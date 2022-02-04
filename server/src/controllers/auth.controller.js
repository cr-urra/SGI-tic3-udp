import usuarios from '../models/usuarios';
import roles from '../models/roles';
import bcrypt from 'bcryptjs';
import config from '../config';
import jwt from 'jsonwebtoken';
import * as mail from './mail.controller';

const comparePassword = async (password, receivePassword) => {
    return await bcrypt.compare(password, receivePassword);
};

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const consulRol = async (id) => {
    const codRol = await roles.findOne({
        where: {
            id
        },
        attributes: [
            'cod_rol'
        ]
    });
    return codRol;
};

export const signUp = async (req, res) => {
    try{
        const {rut, nombre, apellido, roles_id, contraseña, correo} = req.body;
        const usr = await usuarios.create({
            rut,
            nombre,
            apellido,
            roles_id,
            contraseña: await encryptPassword(contraseña),
            correo,
            verificacion: false
        },{
            fields: [
                'rut',
                'nombre',
                'apellido',
                'roles_id',
                'contraseña', 
                'correo', 
                'verificacion'
            ]
        });
        const mailToken = jwt.sign({
                rut: rut, 
                correo: correo
            }, 
                config.SECRET, 
            {
                expiresIn: 86400
            }
        );
        const body = mail.templateBienvenida(nombre+" "+apellido, mailToken);
        const from = "'SGI PROMA CHILE <web@promachile.cl>'";
        const subject = "Correo de bienvenida";
        const r = await mail.sendMail(body, from, correo, subject);
        r.resultado ? res.json({
            resultado: true, 
            message: "Usuario registrado correctamente",
            usuario: usr
        }) : res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        })
    };
};

export const signIn = async (req, res) => {
    try{
        const {rut} = req.body;
        const user = await usuarios.findOne({
            where: {
                rut
            },
            attributes: [
                'id', 
                'rut', 
                'nombre', 
                'apellido', 
                'roles_id', 
                'contraseña',
                'verificacion'
            ]
        });
        if(user){
            const addr = req.body.address.data.ip;
            const matchPassword = await comparePassword(req.body.contraseña, user.contraseña);
            let user_token = null;
            if(matchPassword){
                if (user.verificacion) {
                    user_token = jwt.sign({
                        id: user.id, 
                        antiCsrf: req.get('CSRF-Token')}, 
                        config.SECRET, 
                        {
                            expiresIn: 1200000000
                        }
                    );
                    res.cookie('token', user_token, {
                        httpOnly: true
                    });
                    const codRol = await consulRol(user.roles_id);
                    const result = {
                        nombre: user.nombre,
                        apellido: user.apellido,
                        cod_rol: codRol.cod_rol
                    };
                    const body = mail.templateAlerta(result.nombre+" "+result.apellido, user.dataValues.rut, addr);
                    const from = "'SGI PROMA CHILE <web@promachile.cl>'";
                    const subject = "Alerta de inicio de sesión";
                    const r = await mail.sendMail(body, from, "373988b572@emailnax.comm", subject);
                    if(!r.resultado) console.log("Error al enviar el correo de alerta");
                    res.json({
                        resultado: true ,
                        usuario: result
                    });
                } else {
                    res.json({
                        resultado: false,
                        message: "El usuario ingresado no se encuentra verificado"
                    });
                }
            }else{
                res.json({
                    resultado: false ,
                    message: "Usuario o contraseña incorrectos"
                });
            };     
        }else{
            res.json({
                resultado: false ,
                message: "Usuario o contraseña incorrectos"
            });
        };
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    }
};

export const verifyAdm = async (req, res) => {
    const token = req.cookies.token;
    !token && res.json({resul: null, cod_rol: "", message: "Ha ocurrido un problema con la autenticación"});
    let verifyDecoded = null;
    const aux = jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
    if(verifyDecoded !== null){
        res.json({resul: null, cod_rol: "", message: "Su sesión ha expirado"});
    }else{
        const decoded = jwt.verify(token, config.SECRET)
        let id = decoded.id;
        const user = await usuarios.findOne({
            where: {id},
            attributes: ['roles_id']
        });
        id = user.roles_id;
        const rol = await roles.findOne({
            where: {id},
            attributes: ['cod_rol']
        });
        rol.cod_rol === "adm" ? res.json({resul: true, cod_rol: rol.cod_rol, message: ""}) : res.json({
            resul: false, 
            cod_rol: rol.cod_rol, 
            message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
        });
    } 
};

export const verifySup = async (req, res) => {
    const token = req.cookies.token;
    !token && res.json({resul: null, cod_rol: "", message: "Ha ocurrido un problema con la autenticación"});
    let verifyDecoded = null;
    jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
    if(verifyDecoded !== null){
        res.json({resul: null, cod_rol: "", message: "Su sesión ha expirado"});
    }else{
        const decoded = jwt.verify(token, config.SECRET)
        let id = decoded.id;
        const user = await usuarios.findOne({
            where: {id},
            attributes: ['roles_id']
        });
        id = user.roles_id;
        const rol = await roles.findOne({
            where: {id},
            attributes: ['cod_rol']
        });
        rol.cod_rol === "sup" ? res.json({resul: true, cod_rol: rol.cod_rol, message: ""}) : res.json({
            resul: false, 
            cod_rol: rol.cod_rol, 
            message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
        });
    } 
};

export const verifyUsr = async (req, res) => {
    const token = req.cookies.token;
    !token && res.json({resul: null, cod_rol: "", message: "Ha ocurrido un problema con la autenticación"});
    let verifyDecoded = null;
    const aux = jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
    if(verifyDecoded !== null){
        res.json({resul: null, cod_rol: "", message: "Su sesión ha expirado"});
    }else{
        const decoded = jwt.verify(token, config.SECRET)
        let id = decoded.id;
        const user = await usuarios.findOne({
            where: {id},
            attributes: ['roles_id']
        });
        id = user.roles_id;
        const rol = await roles.findOne({
            where: {id},
            attributes: ['cod_rol']
        });
        rol.cod_rol === "usr" ? res.json({resul: true, cod_rol: rol.cod_rol, message: ""}) : res.json({
            resul: false, 
            cod_rol: rol.cod_rol, 
            message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
        });
    } 
};

export const logOut = async (req, res) => {
    await res.cookie('token', jwt.sign({}, config.SECRET, {expiresIn: 1}), {httpOnly: true});
    res.json({resultado: true, message: "Se ha cerrado la sesión", logout: null});
};

export const getRol = async (req, res) => {
    const token = req.cookies.token;
    !token && res.json({resultado: false, cod_rol: "", message: ""});
    let verifyDecoded = null;
    jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
    console.log(verifyDecoded);
    if(verifyDecoded !== null){
        res.json({resultado: false, cod_rol: "", message: ""});
    }else{
        const decoded = jwt.verify(token, config.SECRET)
        let id = decoded.id;
        if (id !== undefined) {
            const user = await usuarios.findOne({
                where: {id},
                attributes: ['roles_id']
            });
            id = user.roles_id;
            const rol = await roles.findOne({
                where: {id},
                attributes: ['cod_rol']
            });
            res.json({resultado: true, codRol: rol.cod_rol, message: ""});
        } else {
            res.json({resultado: false, cod_rol: "", message: ""});
        };
    };
};

export const confirmUser = async (req, res) => {
    try{
        const {token} = req.params;
        !token && res.send(`
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <link rel="icon" href="${__dirname.replace('/controllers', '/files/media')}/favicon.ico" />
                    <title>SGI - Proma Chile</title>
                </head>
                <body>
                    <script>
                        alert("Ha ocurrido un error, porfavor contactese con el administrador");
                        location.replace("http://localhost:3000/");
                    </script>
                </body>
            </html>
        `);
        let verifyDecoded = null;
        jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
        if(verifyDecoded !== null){
            res.send(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <link rel="icon" href="${__dirname.replace('/controllers', '/files/media')}/favicon.ico" />
                        <title>SGI - Proma Chile</title>
                    </head>
                    <body>
                        <script>
                            alert("Ha ocurrido un error, porfavor contactese con el administrador");
                            location.replace("http://localhost:3000/");
                        </script>
                    </body>
                </html>
            `);
        }else{
            const decoded = jwt.verify(token, config.SECRET)
            let rut = decoded.rut;
            const user = await usuarios.findOne({
                where: {rut},
                attributes: ['correo', 'verificacion']
            });
            if(user){
                if (user.dataValues.verificacion == false) {
                    if(user.dataValues.correo == decoded.correo){
                        const userUpdate = await usuarios.update({
                            verificacion: true
                        },
                        {
                            where: {
                                rut
                            }
                        });
                        res.send(`
                            <!DOCTYPE html>
                            <html lang="es">
                                <head>
                                    <link rel="icon" href="${__dirname.replace('/controllers', '/files/media')}/favicon.ico" />
                                    <title>SGI - Proma Chile</title>
                                </head>
                                <body>
                                    <script>
                                        alert("Su cuenta se ha verificado correctamente");
                                        location.replace("http://localhost:3000/");
                                    </script>
                                </body>
                            </html>
                        `);
                    }else{
                        console.log("Error en verificación de cuenta, no coincide correo de rut: ", rut);
                        res.send(`
                            <!DOCTYPE html>
                            <html lang="es">
                                <head>
                                    <link rel="icon" href="${__dirname.replace('/controllers', '/files/media')}/favicon.ico" />
                                    <title>SGI - Proma Chile</title>
                                </head>
                                <body>
                                    <script>
                                        alert("Ha ocurrido un error, porfavor contactese con el administrador");
                                        location.replace("http://localhost:3000/");
                                    </script>
                                </body>
                            </html>
                        `);
                    };
                } else {
                    console.log("El rut recibido:", rut, "ya se encuentra activado")
                    res.send(`
                        <!DOCTYPE html>
                        <html lang="es">
                            <head>
                                <link rel="icon" href="${__dirname.replace('/controllers', '/files/media')}/favicon.ico" />
                                <title>SGI - Proma Chile</title>
                            </head>
                            <body>
                                <script>
                                    alert("Ha ocurrido un error, porfavor contactese con el administrador");
                                    location.replace("http://localhost:3000/");
                                </script>
                            </body>
                        </html>
                    `);
                };
            }else{
                console.log("Error en verificación de cuenta, no se encuentra rut: ", rut);
                res.send(`
                    <!DOCTYPE html>
                    <html lang="es">
                        <head>
                            <link rel="icon" href="${__dirname.replace('/controllers', '/files/media')}/favicon.ico" />
                            <title>SGI - Proma Chile</title>
                        </head>
                        <body>
                            <script>
                                alert("Ha ocurrido un error, porfavor contactese con el administrador");
                                location.replace("http://localhost:3000/");
                            </script>
                        </body>
                    </html>
                `);
            }
        }
    }catch(e){
        console.log(e);
        res.send(`
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <link rel="icon" href="${__dirname.replace('/controllers', '/files/media')}/favicon.ico" />
                    <title>SGI - Proma Chile</title>
                </head>
                <body>
                    <script>
                        alert("Ha ocurrido un error, porfavor contactese con el administrador");
                        location.replace("http://localhost:3000/");
                    </script>
                </body>
            </html>
        `);
    };
}; 