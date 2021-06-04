import React, { Component } from 'react'
import axios from 'axios';


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
                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Nombre</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
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
                                    </div> 

                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Apellido</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="apellido"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.apellido}
                                            />
                                        </div>
                                    </div> 

                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Rut</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
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
                                    </div> 

                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Correo</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="rut"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.rut}
                                            />
                                        </div>
                                    </div> 

                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Teléfono</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="telefono"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.telefono}
                                            />
                                        </div>
                                    </div> 

                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                            <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Contraseña</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
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
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Repetir Contraseña</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
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
                                    </div>

                                    <div className="input-group no_flex">
                                        <div className="col-2">
                                            <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Rol</label>
                                        </div>
                                        <div className="col-10">
                                            <select className="form-select ancho alto"  id="inputGroupSelect01" value = {this.state.rol} onChange={this.onChangeRol} >
                                              <option defaultValue>Escoger el Rol del Usuario</option>
                                              <option value="1">Adminitrador</option>
                                              <option value="2">Operaciones</option>
                                              <option value="3">Finanzas</option>
                                            </select>
                                        </div>
                                    </div>
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
