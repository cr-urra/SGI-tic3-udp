import React, { Component } from 'react'
import Login from './Login'
import Derechos from './layout/footer'
import logo from '../imagenes/logo.png'

export default class Init extends Component {
    render() {
        return (
            <div>
                <br/>
                <div class="text-center">
                    <img src={logo} class="rounded " width="150" height="150" alt="logo"></img>     
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
