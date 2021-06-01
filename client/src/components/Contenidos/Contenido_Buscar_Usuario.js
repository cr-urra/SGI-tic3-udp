import React, { Component } from 'react'
import Usuarios from '../JasonDePruebas/Usuarios.json'
import Listado from '../Componentes/Componentes Usuarios/Listado'
import Tabla from '../Componentes/Componentes Usuarios/Tabla'



export default class Init extends Component {
    state ={
        Usuarios: Usuarios,
        Usuario: ""
    }

    onChangeUsuario = (event) => {
        this.setState({
            Usuario: event.target.value
        })
    }
    
    render() {

    
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Usuario</h1>
                    <Listado Usuarios ={this.state.Usuarios} onChangeUsuario ={this.onChangeUsuario} Usuario={this.state.Usuario}/>

                    <Tabla  Usuario={this.state.Usuario} Usuarios = {this.state.Usuarios} />
                    
            </main>
        )
    }
}
