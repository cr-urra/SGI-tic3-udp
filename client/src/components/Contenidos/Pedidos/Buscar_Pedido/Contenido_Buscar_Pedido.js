import React, { Component } from 'react'
import Filtro from './Componentes_Buscar_Pedido/Filtro'

export default class Init extends Component {

    state = {
      eleccion: null
    }


    onChangeEleccion = (event) => {
      this.setState({
          eleccion: event.target.value
      })
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Pedidos</h1>
                <div className="container separacion">
                    <div>
                        <div className="container separacion">
                            <div className="card shadow-lg">
                              <div className="card-header ">
                                Elegir Forma de Busqueda
                              </div>
                                <ul className="list-group list-group-flush"> 
                                  <li className="list-group-item">
                                    <div className="row ml-3 mr-3 mt-4 mb-4">
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="estado" onChange={this.onChangeEleccion} value={"estado"}/>                                             
                                              <label class="form-check-label form-label" for="estado">
                                                Busqueda por Estado                                               
                                              </label>                                         
                                            </div> 
                                        </div>
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="fecha" onChange={this.onChangeEleccion} value={"fecha"}/>                                             
                                              <label class="form-check-label form-label" for="fecha">
                                                Busqueda por Fecha                                               
                                              </label>                                             
                                            </div> 
                                        </div>
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="producto" onChange={this.onChangeEleccion} value={"producto"}/>                                             
                                              <label class="form-check-label form-label" for="producto">
                                                Busqueda por Proveedor                                         
                                              </label>                                             
                                            </div> 
                                        </div>
                                    </div>
                                  </li> 

                                  <Filtro eleccion = {this.state.eleccion}  />

                                </ul>
                            </div>
                            <div className='margen2'/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
