import React, { Component } from 'react'
import axios from 'axios';


export default class Contenido_Agente_Aduana extends Component {

    state ={
        nombre: null,
        apellido: null,
        telefono: null,
        banco: null,
        n_cuenta: null,
        tipo_cuenta: null,
        correo: null
    }

    addAgente = async (nombre,telefono,banco,n_cuenta) =>{
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

    render() {
        return (
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
                                <div className="input-group-prepend ancho2 ">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Teléfono</span>
                                </div>
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="telefono"
                                className="form-control " 
                                aria-label="Default" 
                                placeholder="Ej: +569 12345678"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.telefono}
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
                                name="correo"
                                className="form-control" 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.correo}
                                />
                            </div>   
                        </div>    
                        <div className="input-group mb-3">
                            
                            <div className="col-2">
                                <div className="input-group-prepend ancho2">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Banco</span>
                                </div>
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="banco"
                                className="form-control" 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.banco}
                                />
                            </div>
                            
                        </div>
                        <div className="input-group mb-3">
                            <div className="col-2">
                                <div className="input-group-prepend ancho2">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Tipo de Cuenta</span>
                                </div>
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="tipo_cuenta"
                                className="form-control" 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.tipo_cuenta}
                                />
                            </div>   
                        </div>  
                        <div className="input-group mb-3">
                            <div className="col-2">
                                <div className="input-group-prepend ancho2">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Número de Cuenta</span>
                                </div>
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="n_cuenta"
                                className="form-control" 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.n_cuenta}
                                />
                            </div>   
                        </div>  
                       
                    </div> 
                    <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" >
                        Guardar Agente de Aduana
                    </button>                              
                </form>
            </div>
        )
    }
}
