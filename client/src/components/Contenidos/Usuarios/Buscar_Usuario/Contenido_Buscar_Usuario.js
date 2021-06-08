import React, { Component } from 'react'
import Usuarios from '../../../JasonDePruebas/Usuarios.json'
import Listado from './Componentes_Buscar_Usuario/Listado'
import Tabla from './Componentes_Buscar_Usuario/Tabla'
import Editar_usuario from './Componentes_Buscar_Usuario/Editar_Usuario'



export default class Init extends Component {
    state ={
        Usuarios: Usuarios,
        Usuario: "",
        editar: "false",
    }

    onChangeUsuario = (event) => {
        this.setState({
            Usuario: event.target.value
        })
    }

    change = (event) =>{
        this.setState({
            editar : event.target.value
        })
    }
    
    render() {

        if(this.state.editar ==="true"){
            return(
                <main className="content">
                    <h1 className="display-5 titulo">Editar Usuario {this.state.AgenteAduana}</h1>
                    <Editar_usuario Usuarios={this.state.Usuarios} Usuario = {this.state.Usuario} change = {this.change}/>
                </main>
            )

        }else{
            return (
                <main className="content">
                    <h1 className="display-5 titulo">Buscar Usuario</h1>
                        <Listado Usuarios ={this.state.Usuarios} onChangeUsuario ={this.onChangeUsuario} Usuario={this.state.Usuario}/>
    
                        <Tabla  Usuario={this.state.Usuario} Usuarios = {this.state.Usuarios} change={this.change} />
                        
                </main>
            )

        }

    
        
    }
}
