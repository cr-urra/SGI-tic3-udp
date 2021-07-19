import jwt from 'jsonwebtoken';
import config from '../config';

export const verifyAntiCsrfToken = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        !token && res.json({resultado: null, message: "Ha ocurrido un problema con la autenticación"});
        const localCsrf = req.get('X-CSRF-Token');
        const decoded = jwt.verify(token, config.SECRET);
        const antiCsrf = decoded.antiCsrf;
        antiCsrf == localCsrf ? next() : res.json({resultado: null, message: "Ha ocurrido un problema con la autenticación"});
    }catch(error){
        console.log(error);
        res.json({resultado: false, message: "Ha ocurrido un problema, token expirado"});
    };
};