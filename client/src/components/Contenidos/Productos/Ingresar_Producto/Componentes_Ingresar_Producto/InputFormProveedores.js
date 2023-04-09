import React, { Component } from 'react'
import Opciones from './opciones'

export default class Contenido_Agente_Aduana extends Component {
    render() {
        return (
            <div className="col-xs-12 col-md-12 col-lg-6 mb-3">
                <div className="row">
                    <div className="col-3">
                        <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Proveedor</label>
                    </div>
                    <div className="col-8">
                        <select className="form-select ancho alto"  id="inputGroupSelect01" value = {this.props.field2} onChange={this.props.onChange} name={this.props.name} >
                          <option defaultValue>Escoger el Proveedor del producto</option>
                          <Opciones proveedores={this.props.proveedores} />
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
