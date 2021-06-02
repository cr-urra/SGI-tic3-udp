import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {

    state = {
        rut: 0,
        password: "",
        cod_rol: "",
        resultado: ""
    }

    componentDidMount = async () => {
        const res = await axios.get("/getRol");
        res.data.resultado &&  this.setState({
            cod_rol: res.data.codRol
        })
        console.log(this.state.cod_rol)
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const {data} = await axios.get("/csrf");
        axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
        const datosLogin = {
            rut: this.state.rut,
            contraseña: this.state.password
        };
        const res = await axios.post('/auth/signin', datosLogin);
        res.data.resultado === true ? this.setState({ 
            cod_rol: res.data.usuario.cod_rol 
        }) : this.setState({ 
            resultado: res.data.resultado 
        });
    }

    onInputChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
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
                    <button type="submit" className="btn btn-outline-primary rounded-pill ancho mt-2 mb-2"> Ingresar</button>
                </form>
            </div>
        </div>
        )
    }
}
