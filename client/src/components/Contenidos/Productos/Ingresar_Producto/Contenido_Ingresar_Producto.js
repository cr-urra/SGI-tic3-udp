import React, { Component } from 'react'
import Card from './Componentes_Ingresar_Producto/Card_Form';



export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo"> Ingresar Productos</h1>
                <Card/>
            </main>
        )
    }
}
