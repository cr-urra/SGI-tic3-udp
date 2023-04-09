import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form_Ingresar_Producto';

export default class Contenido_Agente_Aduana extends Component {
    render() {
        return (
            <div className="container separacion">
                <div className="card shadow-lg">
                    <div className="card-header">
                        Formulario para Ingresar Productos
                    </div>
                    <Form/>
                </div> 
            </div>
        )
    }
}
