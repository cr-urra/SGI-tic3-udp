import React, { Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import CryptoJS from 'crypto-js';
import ReCAPTCHA from "react-google-recaptcha";

export default class Login extends Component {

    state = {
        stringOne: "Ñ_nñ*@119Bgˀ¬ø*&&3/!dk",
        stringTwo: "@?bBÑ4",
        password: "",
        cod_rol: "",
        resultado: "",
        rut: "",
        message: true,
        verificacion: false,
        button: true
    }

    encrypt = async (pass) => {
        const hash = CryptoJS.SHA3(pass+"promachile.cl", {outputLength: 512});
        return hash;
    }

    encryptAes = async (message, key, iv) => {
        const encrypted = CryptoJS.AES.encrypt(message, key, {iv: iv});
        return CryptoJS.enc.Utf8.parse(encrypted);
    }

    decryptAes = async (encrypt, key, iv) => {
        const decrypted = CryptoJS.AES.decrypt(CryptoJS.enc.Utf8.stringify(encrypt), key, {iv: iv});
        return CryptoJS.enc.Utf8.stringify(decrypted);
    }

    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({ 
            button: true
        })
        if(this.state.verificacion){
            const addr = await axios.get('https://api.ipify.org?format=json');
            const {data} = await axios.get("/csrf");
            axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
            const key = this.state.stringOne+data.csrfToken.substring(10, 20);
            const iv = data.csrfToken.substring(20, 30)+this.state.stringTwo;
            const datosLogin = {
                rut: await this.encryptAes(this.state.rut, key, iv),
                contraseña: await this.encrypt(this.state.password),
                address: await this.encryptAes(addr.data.ip, key, iv)
            };
            const res = await axios.post('/auth/signin', datosLogin);
            if(res.data.resultado){
                const res2 = await axios.get("/money");
                localStorage.setItem('X-CSRF-Token', data.csrfToken);
                localStorage.setItem('nombre', await this.decryptAes(res.data.usuario.nombre, key, iv));
                localStorage.setItem('dolar', res2.data.dolar.valor);
                localStorage.setItem('uf', res2.data.uf.valor);
                localStorage.setItem('utm', res2.data.utm.valor);
                localStorage.setItem('iv', iv);
                localStorage.setItem('key', key);
                localStorage.setItem('rut', this.state.rut);
                this.setState({ 
                    cod_rol: await this.decryptAes(res.data.usuario.cod_rol, key, iv) 
                });
            } else this.setState({ 
                resultado: res.data.resultado,
                message: res.data.message,
                button: false
            });
        } else this.setState({ 
            resultado: false,
            message: "Captcha aún no verificado",
            button: true
        });
    }

    onInputChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    onChange = () => {
        this.setState({ 
            verificacion: !this.state.verificacion,
            button: !this.state.button
        })
    }

    render() {
        switch(this.state.cod_rol) {
            case "adm":
                return <Redirect to={{ 
                            pathname: '/users/adm'
                        }} />;
            case "sup":
                return <Redirect to={{ 
                            pathname: '/users/sup'
                        }} />;
            case "usr":
                return <Redirect to={{ 
                            pathname: '/users/usr'
                        }} />;
            default:
                break;
        };
        return (
            <div className="col-md-4 offset-md-4 align-self-sm-end">
                <div className="card card-body border border-primary shadow-lg p-3 mb-5 bg-white">
                    <h3 className="text-center ml-3 mb-4  mt-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-circle " viewBox="0 0 19 19">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        Inicio de Sesión
                    </h3>
                <h5 className="ml-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 18 18">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Usuario
                </h5>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mb-4">
                        <input
                            type="Tel" 
                            className="form-control rounded-pill" 
                            placeholder="Ej: 123456789" 
                            name="rut" 
                            onChange={this.onInputChange} 
                            required
                        />
                    </div>
                    <h5 className="ml-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-key" viewBox="0 0 18 18">
                          <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        Password
                    </h5>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control rounded-pill" 
                            placeholder="********" name="password" 
                            onChange={this.onInputChange} 
                            required
                        />
                    </div>
                    <div className="center captcha">
                        <ReCAPTCHA
                            sitekey="6LdBCnYeAAAAAJIjA5EY_G-z151jqYpkcDEZjfPa"
                            onChange={this.onChange}
                        />
                    </div>
                    <button disabled={this.state.button} type="submit" className="btn btn-outline-primary rounded-pill ancho mt-2 mb-2"> Ingresar</button>
                    {!this.state.resultado && <p className="mt-4">{this.state.message}</p>}
                </form>
            </div>
        </div>
        )
    }
}
