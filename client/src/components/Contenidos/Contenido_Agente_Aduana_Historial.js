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
                                    Saldo Actual
                                </div>
                                <div className="col-8">
                                    $550.000
                                </div>
                                <div className="col-1">
                                    <Link to = '/users/Buscar_Agente_Aduana'> 
                                        <button className="btn btn-primary ancho btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                              <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="container separacion">
                            <div className="row">
                                <div className="col-3 text-center">
                                    Busqueda por Fecha
                                </div>
                                <div className="col-9">
                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
                                            name="empresa"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            /*onChange={this.onChange}
                                            value={this.state.empresa}*/
                                            />
                                        </div>   
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <input 
                                            type="text" 
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
                                <div className="col-10"/>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary rounded-pill " >
                                            Filtrar Fechas
                                    </button> 
                                </div>
                            </div>

                            <div className="container mt-4">
                                <table class="table">
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
                </div>
            </main>
        )
    }
}
