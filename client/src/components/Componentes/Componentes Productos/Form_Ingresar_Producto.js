import React, { Component } from 'react'
import axios from 'axios';


export default class Contenido_Ingresar_Producto extends Component {

    state ={
        nombre: null,
        codigo: null,
        descripcion: null,
        precio: null,
        proveedor:null,
        tipo:null
    }

    addAgente = async (empresa,contacto,banco,cuenta_corriente) =>{
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
                                <div className="input-group-prepend ancho2 ">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Codigo</span>
                                </div>
                                
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="contacto"
                                className="form-control " 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.codigo}
                                />
                            </div>
                            
                        </div>
                        
                        <div className="input-group mb-3">
                            
                            <div className="col-2">
                                <div className="input-group-prepend ancho2">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Descripcion</span>
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
                                value={this.state.descripcion}
                                />
                            </div>
                            
                        </div>
                        
                        <div className="input-group mb-3">
                            <div className="col-2">
                                <div className="input-group-prepend ancho2">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Precio</span>
                                </div>
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="cuenta_corriente"
                                className="form-control" 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.precio}
                                />
                            </div>   
                        </div>  

                        <div className="input-group mb-3">
                            <div className="col-2">
                                <div className="input-group-prepend ancho2">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Proveedor</span>
                                </div>
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="cuenta_corriente"
                                className="form-control" 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.proveedor}
                                />
                            </div>   
                        </div>    

                        <div className="input-group mb-3">
                            <div className="col-2">
                                <div className="input-group-prepend ancho2">
                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Tipo</span>
                                </div>
                            </div>
                            <div className="col-10">
                                <input 
                                type="text" 
                                name="cuenta_corriente"
                                className="form-control" 
                                aria-label="Default" 
                                aria-describedby="inputGroup-sizing-default"
                                onChange={this.onChange}
                                value={this.state.tipo}
                                />
                            </div>   
                        </div>   
                    </div> 
                    <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" >
                        Guardar Productos
                    </button>                              
                </form>
                
            </div>
        )
    }
}
