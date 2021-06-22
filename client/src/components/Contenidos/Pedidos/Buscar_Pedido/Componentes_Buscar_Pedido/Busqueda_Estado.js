import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Pedidos from './Pedidos'
import pedidos from '../../../../JasonDePruebas/Pedidos.json'

export default class Init extends Component {

  state = {
    pedidos: pedidos
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
                    <select className="form-select ancho alto"  id="inputGroupSelect01" >
                      <option defaultValue>Estado del Pedido</option>
                      <option value="1">En Producción</option>
                      <option value="2">En Transito (Internacional)</option>
                      <option value="3">Ingreso al País</option>
                      <option value="4">En Transito (Nacional)</option>
                      <option value="5">Finalizado</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Pedidos Pedidos ={ this.state.pedidos} />                                     
          </li>
        )
    }
}
