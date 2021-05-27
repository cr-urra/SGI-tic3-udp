import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Init extends Component {
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
                        <div className="container separacion"  >
                            <div className="input-group no_flex" style={{margin:"0 30px"}}>
                                <label className="input-group-text col-2 " for="inputGroupSelect01">Agente de Aduana</label>
                                <input className="form-control ancho col-6" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." ></input>
                                <datalist id="datalistOptions">
                                    <option value="Agente Aduana 1"/>
                                    <option value="Agente Aduana 2"/>
                                    <option value="Agente Aduana 3"/>
                                </datalist>
                            </div>
                        </div>
                
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

                            <div className="container mt-4">
                                <table className="table text-center table-striped table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">Id Pedido</th>
                                      <th scope="col">Fecha</th>
                                      <th scope="col">Debe</th>
                                      <th scope="col">Haber</th>
                                      <th scope="col">Descripción</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                        <td>15678</td>
                                        <td>24/05/2021</td>
                                        <td>$400.000</td>
                                        <td>$0</td>
                                        <td>Pago de Aduana</td>
                                    </tr>
                                    <tr>
                                        <td>15678</td>
                                        <td>23/05/2021</td>                                        
                                        <td>$0</td>
                                        <td>$400.000</td>
                                        <td>Pago de Aduana</td>
                                    </tr>
                                    <tr>
                                        <td>15678</td>
                                        <td>15/05/2021</td>
                                        <td>$200.000</td>
                                        <td>$0</td>
                                        <td>Pago de Aduana</td>
                                    </tr>
                                    <tr>
                                        <td>15678</td>
                                        <td>01/05/2021</td>
                                        <td>$0</td>
                                        <td>$200.000</td>
                                        <td>Pago de Aduana</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
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
