import React, { Component } from 'react'
import Opciones from './opciones'


export default class Contenido_Agente_Aduana extends Component {


    render() {
        return (
            <div className="col-6 mb-2">
                <div className="row">
                    <div className="col-4">
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
