import React, { Component } from 'react'
import Login from './Login'
import Derechos from '../../layout/footer'
import logo from '../../../imagenes/logo.png'

export default class Init extends Component {
    render() {
        return (
            <div>
                <div className="text-center mt-3">
                    <img src={logo} className="rounded " width="120" height="120" alt="logo"></img>     
                </div>
                <div className="text-center mt-4 mb-4">
                    <h1 className="color_escritura">Sistema de Gestión de Importaciones</h1>
                </div>
                <Login/>
                <Derechos/>    
            </div>
        )
    }
}
