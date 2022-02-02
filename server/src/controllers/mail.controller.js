import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
    host: "vy9bogruz.gclientes.com",
    port: 465,
    auth: {
        user: "sgi@vy9bogruz.gclientes.com",
        pass: "Kolmn25134k25@"
    }
});

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
    `
};

export const sendTest = async (req, res) => {
    try{
        const info = await transporter.sendMail({
            from: "'Tetoko Tukulo <tukulito@promachile.cl>'",
            to: 'cristobal.urra@mail.udp.cl',
            subject: 'test',
            html: templateBienvenida()
        });
        console.log("Message sent: ", info.messageId);
        info ? res.json({
            resultado: true,
            message: "Correo enviado correctamente",
            html: info
        }) : res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            correo: null
        });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            correo: null
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
        console.log("Message sent: ", info.messageId);
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
        res.json({
            message: 'Ha ocurrido un error, porfavor contactese con el administrador',
            resultado: false,
            correo: null
        });
    }
};