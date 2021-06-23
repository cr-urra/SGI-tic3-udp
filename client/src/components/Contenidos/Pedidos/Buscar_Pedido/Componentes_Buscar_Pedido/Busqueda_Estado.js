import React, { Component } from 'react'
import Pedidos from './Pedidos'
import pedidos from '../../../../JasonDePruebas/Pedidos.json'
import Filtro from './FiltroEstado'

export default class Init extends Component {

  state = {
    pedidos: pedidos,
    filtro: "0"
  }

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })        
  }

    render() {
        return (
          <li className="list-group-item">
              Busqueda por Estado
            <div className="container separacion">
              <div className="row">
                <div className="input-group no_flex">
                  <div className="col-2">
                    <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Estado</label>
                  </div>                  
                  <div className="col-4">
                    <select className="form-select ancho alto"  id="inputGroupSelect01" name="filtro" value={this.state.filtro} onChange={this.onChange}>
                      <option defaultValue value="0">Estado del Pedido</option>
                      <option value="produccion">En Producción</option>
                      <option value="internacional">En Transito (Internacional)</option>
                      <option value="ingreso">Ingreso al País</option>
                      <option value="nacional">En Transito (Nacional)</option>
                      <option value="finalizado">Finalizado</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Filtro Pedidos ={this.state.pedidos} filtro = {this.state.filtro}/>                                           
          </li>
        )
    }
}
