import React, { Component } from 'react'
import axios from 'axios';
import Card from './Componentes_Ingresar_Agente/Card_Form'

export default class Contenido_Agente_Aduana extends Component {

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Ingresar Agente de Aduana</h1>
                <Card/>
            </main>
        )
    }
}
