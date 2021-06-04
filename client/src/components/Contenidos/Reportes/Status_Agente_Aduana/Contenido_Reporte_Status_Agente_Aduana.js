import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AgentesAduana from '../../../JasonDePruebas/AgenteAduana.json';
import Listado from './Componentes_Buscar/Listado';
import Tabla from './Componentes_Buscar/Tabla';


export default class Init extends Component {

    state = {
        AgentesAduana: AgentesAduana,
        AgenteAduana: "",
    }
    onChangeAgente = (event) => {
        this.setState({
            AgenteAduana: event.target.value
        })
    }
    
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Historial de Saldo: Agente A</h1>

                <div className="container separacion">

                    <div className="card shadow-lg">

                        <div className="card-header">
                            <div className="row">
                                <div className="col-3 text-center">
                                    <h4>Saldo Actual:</h4>
                                </div>
                                <div className="col-8">
                                    <h4>$550.000</h4>
                                </div>
                            </div>
                        </div>
                        <Listado AgentesAduana= {this.state.AgentesAduana} onChangeAgente={this.onChangeAgente} AgenteAduana={this.state.AgenteAduana}/>
                
                        <div className="container separacion">
                            <div className="row">
                                <div className="col-3 text-center">
                                    <h5>Busqueda por Fecha</h5>
                                </div>
                                <div className="col-9">
                                    <div className="input-group mb-3">
                                        <div className="col-1"/>
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <input 
                                            type="date" 
                                            name="empresa"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            /*onChange={this.onChange}
                                            value={this.state.empresa}*/
                                            />
                                        </div> 
                                        <div className="col-3">
                                            <button type="button" className="btn btn-primary rounded-pill " >
                                                    Filtrar Fechas
                                            </button> 
                                        </div> 
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="col-1"/>
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <input 
                                            type="date" 
                                            name="empresa"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            /*onChange={this.onChange}
                                            value={this.state.empresa}*/
                                            />
                                        </div>   
                                    </div> 
                                     
                                </div>

                                
                            </div>
                            <Tabla AgentesAduana={this.state.AgentesAduana} AgenteAduana={this.state.AgenteAduana}/>
                        </div>                     
                    </div> 
                        <div className="container separacion">
                            <div className="row g-2 mb-4">
                                <div className="col-12 text-center">
                                    <button type="button" className="btn btn-success rounded-pill" style={{width:"20%"}} >
                                        Exportar 
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </main>
        )
    }
}
