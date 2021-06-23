import React, { Component } from 'react'
import Opciones from './Opciones'
import Filtro from './FiltroProveedor'
import Proveedores from '../../../../JasonDePruebas/Proveedores.json'
import Pedidos from '../../../../JasonDePruebas/Pedidos.json'




export default class Init extends Component {

    state = {
      proveedores: Proveedores,
      pedidos: Pedidos,
      eleccion: "0",
    }

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
        return (
          <li className="list-group-item">
            Busqueda por Proveedor
            <div className="row mt-4" >
              <div className="col-5">
                <div className="container" >
                  <div className="row">
                    <div className="input-group no_flex">
                      <div className="col-4">
                        <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Proveedores</label>
                      </div>                  
                      <div className="col-8">
                        <select className="form-select ancho alto"  id="inputGroupSelect01" name="eleccion" value={this.state.filtro} onChange={this.onChange}>
                          <option defaultValue value="0">Proveedores</option>
                          <Opciones Proveedores={this.state.proveedores}  />
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>              
            </div>
            <Filtro Pedidos={this.state.pedidos} filtro ={this.state.eleccion} />
        </li>
        )
    }
}
