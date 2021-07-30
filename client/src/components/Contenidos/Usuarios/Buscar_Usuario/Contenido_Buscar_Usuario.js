import React, { Component } from 'react'
import Listado from './Componentes_Buscar_Usuario/Listado'
import Tabla from './Componentes_Buscar_Usuario/Tabla'
import Editar_usuario from './Componentes_Buscar_Usuario/Editar_Usuario'
import axios from 'axios'



export default class Init extends Component {
    state ={
        Usuarios: [],
        Usuario: "",
        editar: "false",
    }

    componentDidMount = async () => {
        const res = await axios.get("/usuarios/",{}) 
        console.log(res,"usuarios");
        for (let i= 0; i < res.data.usuarios.length ; i++){
            let rol = res.data.usuarios[i].roles_id
            if(rol === 1){
                rol = "Administrador"
            } else if( rol === 2){
                rol = "Finanzas"
            }else {
                rol= "Operaciones"
            }
            const Telefono = await axios.get("/telefonosUsuarios/usuarios/"+res.data.usuarios[i].id,{}) 
            console.log(Telefono)
            const usuario = {
                nombre:  res.data.usuarios[i].nombre,
                apellido:  res.data.usuarios[i].apellido,
                telefono:  Telefono.data.telefono.telefono,
                correo:  res.data.usuarios[i].correo,
                id:  res.data.usuarios[i].id,
                rut: res.data.usuarios[i].rut,
                rol:  rol
            }
            this.setState({
                Usuarios: [...this.state.Usuarios, usuario]
            })
        }
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
