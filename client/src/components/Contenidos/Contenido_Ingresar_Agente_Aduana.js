import React, { Component } from 'react'
import axios from 'axios';


export default class Contenido_Agente_Aduana extends Component {

    state ={
        empresa: null,
        contacto: null,
        banco: null,
        cuenta_corriente: null
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
            <main className="content">
                <h1 className="display-5 titulo">Ingresar Agente de Aduana</h1>

                <div className="container separacion">

                    <div className="card shadow-lg">

                        <div className="card-header">
                            Formulario para crear un Agente de Aduana
                        </div>

                        <div className="container separacion">
                            <form onSubmit ={this.onSubmit}>
                                
                                <div className="row g-2 mt-2 mb-2">
                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Empresa</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="empresa"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.empresa}
                                            />
                                        </div>   
                                    </div> 

                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2 ">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Contacto</span>
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
                                            value={this.state.contacto}
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
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Cuenta Corriente</span>
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
                                            value={this.state.cuenta_corriente}
                                            />
                                        </div>   
                                    </div>    
                                </div> 
                                <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" >
                                    Guardar Agente de Aduana
                                </button>                              
                            </form>

                            

                        </div>
                    </div> 
                </div>
            </main>
        )
    }
}
