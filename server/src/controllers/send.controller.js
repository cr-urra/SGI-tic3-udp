import nodeMailer from 'nodemailer';

export const sendTest = async (req, res) => {
    try{
        const body = `
            Hola soy un correo
        `;
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'cr.urra6@gmail.com',
                pass: 'lavidanoesloqueunopiensa'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const info = await transporter.sendMail({
            from: "'Tetoko Tukulo <tukulito@promachile.cl>'",
            to: '3542158775@firemailbox.club',
            subject: 'test',
            text: body
        });
        console.log("Se ha enviado un correo, meesage-id: ", info.messageId);
        info ? res.json({
            resultado: true,
            message: "Correo enviado correctamente",
            correo: info
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