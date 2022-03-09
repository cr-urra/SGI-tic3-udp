import React, { Component } from 'react'
import Login from './Login'
import Derechos from '../../layout/footer'
import logo from '../../../imagenes/logo.png'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export default class Init extends Component {

    state = {
        cod_rol: "",
        resultado: null
    }

    componentDidMount = async () => {
        try{
            const res = await axios.get("/auth/getRol");
            if(res.data.resultado) {
                const res2 = await axios.get("/money");
                localStorage.setItem('dolar', res2.data.dolar.valor);
                localStorage.setItem('uf', res2.data.uf.valor);
                localStorage.setItem('utm', res2.data.utm.valor);
                this.setState({
                    cod_rol: res.data.codRol
                })
            } else {
                this.setState({
                    resultado: false
                })
            }   
        }catch(e){
            console.log(e);
            this.setState({
                resultado: false
            })
        }
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
        if (this.state.resultado !== true && this.state.resultado !== null)
            return (
                <div>
                    <div className="text-center pt-3">
                        <img src={logo} className="rounded " width="19%" alt="logo"></img>     
                    </div>
                    <div className="text-center mt-4 mb-4">
                        <h1 className="color_escritura">Sistema de Gestión para Importaciones</h1>
                    </div>
                    <Login/>
                    <Derechos/>    
                </div>
        )
        else return <div></div>
    }
}
