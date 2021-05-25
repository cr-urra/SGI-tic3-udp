import React, { Component } from 'react'


export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Proveedor</h1>
                    <div className="container" >
                        <div className="input-group no_flex">
                          <label className="input-group-text " for="inputGroupSelect01">Buscar un Usuario</label>
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
                                Usuario A
                              </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="row g-2 mt-2 mb-2">
                                            <div className="col-4">
                                              <div >Nombre</div>
                                            </div>
                                            <div className="col-8">
                                              <div > Nombre A</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row g-2 mt-2 mb-2">
                                            <div className="col-4">
                                              <div >Rol</div>
                                            </div>
                                            <div className="col-8">
                                              <div > Administrador</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container separacion_final">
                            <div className="row g-2  mb-4">
                                <div className="col-6 text-center">
                                <button type="button" className="btn btn-primary rounded-pill ancho3" >
                                    Editar Usuario 
                                </button>
                                </div>
                                <div className="col-6 text-center">
                                <button type="button" className="btn btn-danger rounded-pill ancho3" >
                                    Eliminar Usuario
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        )
    }
}
