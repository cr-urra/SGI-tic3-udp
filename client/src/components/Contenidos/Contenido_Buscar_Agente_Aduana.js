import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar un Agente de Aduana</h1>

                <div className="container" >
                    <div className="input-group no_flex">
                      <label className="input-group-text " for="inputGroupSelect01">Buscar un Banco</label>
                      <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco} ></input>
                      <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago"/>
                      </datalist>
                    </div>
                </div>

                <div>
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Agente Aduana A
                          </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row g-2 mt-2 mb-2">
                                        <div className="col-4">
                                          <div >Empresa</div>
                                        </div>
                                        <div className="col-8">
                                          <div > Empresa A</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row g-2 mt-2 mb-2">
                                        <div className="col-4">
                                          <div > Contacto </div>
                                        </div>
                                        <div className="col-8">
                                          <div > Contacto A </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row g-2 mt-2 mb-2">
                                        <div className="col-4">
                                          <div > Saldo Actual </div>
                                        </div>
                                        <div className="col-8">
                                          <div > $550.500 </div>
                                        </div>
                                    </div>
                                </li>
                                <li className = "list-group-item">
                                    <div className="row">
                                        <div className="col-3"/>
                                        <div className="col-6 text-center">
                                            <Link to = '/users/Buscar_Agente_Aduana/Historial_Saldo'>
                                                <button type="button" className="btn btn-outline-success rounded-pill ancho ">                                                  
                                                    Ver Historial del Saldo
                                                </button>
                                            </Link> 
                                        </div>
                                        <div className="col-3"/>                                        
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="row g-2 mt-4 mb-2">
                            <div className="col-4 text-center">
                                <button type="submit" className="btn rounded-pill color_sitio2 ancho3"> 
                                    Pedidos
                                </button>
                            </div>
                            <div className="col-4 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill ancho3"> 
                                    Editar
                                </button>
                            </div>
                            <div className="col-4 text-center">
                                <button type="submit" className="btn btn-danger rounded-pill ancho3"> 
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
