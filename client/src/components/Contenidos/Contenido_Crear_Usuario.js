import React, { Component } from 'react'
import axios from 'axios';


export default class Crear_Usuario extends Component {

    state ={
        nombre: null,
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

                    <div className="card">

                        <div className="card-header">
                            Formulario de creación de Usuario
                        </div>

                        <div className="container separacion">
                            <form onSubmit ={this.onSubmit}>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                                    </div>
                                    <input 
                                    type="text" 
                                    name="nombre"
                                    className="form-control" 
                                    aria-label="Default" 
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={this.onChange}
                                    value={this.state.nombre}
                                    />
                                </div> 

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Contraseña</span>
                                    </div>
                                    <input 
                                    type="password" 
                                    name="contraseña"
                                    className="form-control" 
                                    aria-label="Default" 
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={this.onChange}
                                    value={this.state.contraseña}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Repetir Contraseña</span>
                                    </div>
                                    <input 
                                    type="password" 
                                    name="r_contraseña"
                                    className="form-control" 
                                    aria-label="Default" 
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={this.onChange}
                                    value={this.state.r_contraseña}
                                    />
                                </div>

                                <div className="input-group no_flex">
                                  <label className="input-group-text" for="inputGroupSelect01">Rol</label>
                                  <select className="form-select ancho" id="inputGroupSelect01" value = {this.state.rol} onChange={this.onChangeRol} >
                                    <option defaultValue>Escoger el Rol del Usuario</option>
                                    <option value="1">Adminitrador</option>
                                    <option value="2">Operaciones</option>
                                    <option value="3">Finanzas</option>
                                  </select>
                                </div>
                                                              
                            </form>
                        </div>
                        <div className = "container mb-4 ml-3"> 
                                <button type="button" className="btn btn-primary rounded-pill" >
                                    Guardar Usuario
                                </button>
                        </div>
                    </div> 
                </div>
            </main>
        )
    }
}
