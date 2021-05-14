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
            password: this.state.password
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
                <div className="card card-body border border-primary shadow-lg p-3 mb-5 bg-white rounded">
                    <h3 className="text-center " >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        &nbsp;Inicio de Sesión
                    </h3>
                <br />
                <h5>
                    &nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                Usuario
                </h5>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="Tel" 
                            className="form-control" 
                            placeholder="Ej: 123456789" 
                            name="rut" 
                            onChange={this.onInputChange} 
                            required
                        />
                    </div>
                    <h5>
                        &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-lock" viewBox="0 0 22 22">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                        </svg>
                        Password
                    </h5>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="********" name="password" 
                            onChange={this.onInputChange} 
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary rounded-pill"> Ingresar</button>
                </form>
            </div>
        </div>
        )
    }
}
