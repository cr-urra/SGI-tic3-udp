import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './Componentes_crear_usuario/InputForm'
import InputFormPass from './Componentes_crear_usuario/InputFormPass'
import InputFormOption from './Componentes_crear_usuario/InputFormOption'


export default class Crear_Usuario extends Component {

    state ={
        nombre: null,
        apellido: null,
        rut: null,
        correo: null,        
        telefono: null,
        contraseña: null,
        r_contraseña: null,
        rol: null
    }

    addUsuario = async (nombre, contraseña, r_contraseña, rol) =>{
        const Agente_Aduanta ={

        }
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await axios.get()

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onChangeRol = (event) => {
        this.setState({
            rol: event.target.value
        })
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Crear Usuario</h1>

                <div className="container separacion">

                    <div className="card shadow-lg">

                        <div className="card-header">
                            Formulario de creación de Usuario
                        </div>

                        <div className="container separacion">
                            <form onSubmit ={this.onSubmit}>
                                <div className="row g-2 mt-2 mb-2">
                                    <InputForm field ="Nombre" onChange = {this.onChange} field2 = {this.state.nombre} name="nombre"></InputForm>
                                    <InputForm field ="Apellido" onChange = {this.onChange} field2 = {this.state.apellido} name="apellido"></InputForm>
                                    <InputForm field ="Rut" onChange = {this.onChange} field2 = {this.state.rut} name="rut"></InputForm> 
                                    <InputForm field ="Correo" onChange = {this.onChange} field2 = {this.state.correo} name="correo"></InputForm> 
                                    <InputForm field ="Telefono" onChange = {this.onChange} field2 = {this.state.telefono} name="telefono"></InputForm> 
                                    <InputFormPass field ="Contraseña" onChange = {this.onChange} field2 = {this.state.contraseña} name="contraseña"></InputFormPass>
                                    <InputFormPass field ="Repetir Contraseña" onChange = {this.onChange} field2 = {this.state.r_contraseña} name="r_contraseña"></InputFormPass>
                                    <InputFormOption field ="Rol" onChange = {this.onChangeRol} field2 = {this.state.rol} name="rol"></InputFormOption>
                                    
                                    <div className = "container mt-4 ml-3"> 
                                        <button type="button" className="btn btn-primary rounded-pill" >
                                            Guardar Usuario
                                        </button>
                                    </div> 
                                </div>                            
                            </form>
                        </div>
                        
                    </div> 
                </div>
            </main>
        )
    }
}
