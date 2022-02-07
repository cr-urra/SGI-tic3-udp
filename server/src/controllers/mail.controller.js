import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
    host: "mail.vy9bogruz.tkk",
    port: 465,
    auth: {
        user: "sgi@vy9bogruz.tk",
        pass: "R4lyHN8Uo0)A"
    }
});

const mailTest = `
    <div style="color: black;">
                <p>
                    <p>
                        Estimado, 
                    </p>
                    <p>
                        Usted ha recibido este mensaje de prueba de forma exitosa, 
                    </p>
                </p>
                <p>
                    Saludos.
                </p>
                <p>
                    Pd: Este es un mensaje automatizado, por ende no responder a él.
                </p>
                <p 
                    style="margin: 10px 0px"
                >
                    ---
                </p>
                <p>
                    Este correo fue enviado desde la aplicación SGI (Sistema de Gestión para Importaciones) de PROMA CHILE.
                </p>
            </div>
`;

export const templateBienvenida = (name, token) => {
    return `
        <div style="color: black;">
            <p>
                <p>
                    Estimado ${name}, 
                </p>
                <p>
                    Bienvenido al Sistema de Gestión para Importaciones de PROMA CHILE. Para poder acceder a su interfaz, porfavor verifique su correo ingresando al siguiente 
                    <a href="http://localhost:4000/auth/confirm/${token}">Link</a>.
                </p>
            </p>
            <p>
                Saludos.
            </p>
            <p>
                Pd: Este es un mensaje automatizado, por ende no responder a él.
            </p>
            <p 
                style="margin: 10px 0px"
            >
                ---
            </p>
            <p>
                Este correo fue enviado desde la aplicación SGI (Sistema de Gestión para Importaciones) de PROMA CHILE.
            </p>
        </div>
    `;
};

export const templateAlerta = (name, rut, ip) => {
    return `
        <div style="color: black;">
            <p>
                <p>
                    Estimado ${name}, 
                </p>
                <p>
                    Se ha detectado un inicio de sesión a la aplicación SGI con su cuenta con nombre de usuario: ${rut}, la IP Pública del origen es: ${ip}.
                </p>
            </p>
            <p>
                Saludos.
            </p>
            <p>
                Pd: Este es un mensaje automatizado, por ende no responder a él.
            </p>
            <p 
                style="margin: 10px 0px"
            >
                ---
            </p>
            <p>
                Este correo fue enviado desde la aplicación SGI (Sistema de Gestión para Importaciones) de PROMA CHILE.
            </p>
        </div>
    `;
};

export const sendTest = async (req, res) => {
    try{
        const info = await transporter.sendMail({
            from: "'Anónimo <undefined@promachile.cl>'",
            to: 'f4a0c35f8c@emailnax.com',
            subject: 'test',
            html: mailTest
        });
        console.log("Mensaje enviado: ", info.messageId);
        info ? res.json({
            resultado: true,
            message: "Correo enviado correctamente",
            html: info
        }) : res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false
        });
    }
};

export const sendMail = async (body, from, to, subject) => {
    try{
        const info = await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            html: body
        });
        console.log("Mensaje enviado: ", info.messageId);
        let r = null;
        if(info){
            r = {
                correo: info,
                resultado: true
            }
        }else{
            r = {
                correo: null,
                resultado: false
            }
        }
        return r;
    }catch(e){
        console.log(e);
        return {
            resultado: false,
            correo: null
        };
    }
};