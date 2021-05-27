import React, { Component } from 'react'
import axios from 'axios';


export default class Ingresar_Usuario extends Component {
    state ={
        nombre: null,
        ciudad: null,
        pais: null,
        contacto: null,
        moneda: null,
        banco: null
    }

    addProveedor = async () =>{
        const Proveedor ={

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
            <main className="content">
                <h1 className="display-5 titulo">Ingresar Proveedor</h1>
                <div className = "container separacion" >
                    <div className = "card shadow-lg">
                        <div className="card-header">
                            Formulario de creación de Usuario
                        </div>
                        <div className = "container separacion" >
                            <form onSubmit = {this.onSubmit}>
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
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Ciudad</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="ciudad"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.ciudad}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">País</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="pais"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.pais}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Contacto</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="contacto"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.contacto}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Moneda</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="moneda"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.moneda}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className = "col-2 text-center">
                                            <h5> Banco </h5>
                                        </div>
                                        <div className = "col-2" >
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioBanco"/>                                             
                                              <label class="form-check-label form-label" for="flexRadioBanco">
                                                Elegir Banco                                                
                                              </label>                                                                                          
                                            </div>  
                                        </div>
                                        <div className = "col-4" > 
                                            <input className="form-control " list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                                            <datalist id="datalistOptions">
                                              <option value="San Francisco"/>
                                              <option value="New York"/>
                                              <option value="Seattle"/>
                                              <option value="Los Angeles"/>
                                              <option value="Chicago"/>
                                            </datalist>
                                        </div>
                                        <div className = "col-3 text-center">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioNuevoBanco"/>
                                              <label class="form-check-label" for="flexRadioNuevoBanco">
                                                Nuevo Banco
                                              </label>
                                            </div> 
                                        </div>
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
