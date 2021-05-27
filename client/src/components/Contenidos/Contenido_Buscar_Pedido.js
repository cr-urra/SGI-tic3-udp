import React, { Component } from 'react'


export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Agente de Aduana</h1>
                <div className="container separacion">
                    <div>
                        <div className="container separacion">
                            <div className="card   shadow-lg">
                              <div className="card-header ">
                                Elegir Forma de Busqueda
                              </div>
                                <ul className="list-group list-group-flush"> 
                                  <li className="list-group-item">
                                    <div className="row ml-3 mr-3 mt-4 mb-4">
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioBanco"/>                                             
                                              <label class="form-check-label form-label" for="flexRadioBanco">
                                                Busqueda por Estado                                               
                                              </label>                                             
                                            </div> 
                                        </div>
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioBanco"/>                                             
                                              <label class="form-check-label form-label" for="flexRadioBanco">
                                                Busqueda por Fecha                                               
                                              </label>                                             
                                            </div> 
                                        </div>
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioBanco"/>                                             
                                              <label class="form-check-label form-label" for="flexRadioBanco">
                                                Busqueda por Producto                                          
                                              </label>                                             
                                            </div> 
                                        </div>
                                    </div>
                                  </li> 
                                  <li className="list-group-item">
                                      Busqueda por Estado

                                  </li>
                                  <li className="list-group-item">
                                      Busqueda por Fecha

                                  </li>
                                  <li className="list-group-item">
                                      Busqueda por Producto

                                  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
