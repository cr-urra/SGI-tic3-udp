import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Init extends Component {
    render() {
        return (
            <main className="content">
            <h1 className="display-5 titulo">Buscar Producto</h1>

            <div className="container" >
                <div className="input-group no_flex">
                  <label className="input-group-text " for="inputGroupSelect01">Buscar Producto</label>
                  <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco} ></input>
                  <datalist id="datalistOptions">
                    <option value="producto 1"/>
                    <option value="Producto 2"/>
                  </datalist>
                </div>
            </div>

            <div>
                <div className="container separacion">
                    <div className="card border-primary  shadow-lg">
                      <div className="card-header text-primary">
                        Producto 1
                      </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row g-2 mt-2 mb-2">
                                    <div className="col-4">
                                      <div >Nombre</div>
                                    </div>
                                    <div className="col-8">
                                      <div > Producto 1</div>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row g-2 mt-2 mb-2">
                                    <div className="col-4">
                                      <div > Codigo </div>
                                    </div>
                                    <div className="col-8">
                                      <div > 12343 </div>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row g-2 mt-2 mb-2">
                                    <div className="col-4">
                                      <div > Descripcion </div>
                                    </div>
                                    <div className="col-8">
                                      <div > muy Resistente </div>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row g-2 mt-2 mb-2">
                                    <div className="col-4">
                                      <div > Proveedor </div>
                                    </div>
                                    <div className="col-8">
                                      <div > JJPlastalloy </div>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row g-2 mt-2 mb-2">
                                    <div className="col-4">
                                      <div > Tipo </div>
                                    </div>
                                    <div className="col-8">
                                      <div > Plastico </div>
                                    </div>
                                </div>
                            </li>
                            <li className = "list-group-item">
                                <div className="row">
                                    <div className="col-3"/>
                                    <div className="col-6 text-center">
                                        <Link to = '/users/Buscar_Producto/Historial_Producto_Precio'>
                                            <button type="button" className="btn btn-outline-success rounded-pill ancho ">                                                  
                                                Ver Historial de Precios
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
