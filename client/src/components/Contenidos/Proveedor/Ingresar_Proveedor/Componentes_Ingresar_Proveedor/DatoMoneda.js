import React, { Component } from 'react'
import Opciones from './opciones'

export default class Contenido_Agente_Aduana extends Component {
    render() {
        return (            
            <div className="row">
                <div className="col-4">
                    <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Moneda</label>
                </div>
                <div className="col-8">
                    <select className="form-select ancho alto"  id="inputGroupSelect01" value = {this.props.name2} onChange={this.props.onChange} name={this.props.name} >
                      <option defaultValue value={null}>Escoger la Moneda</option>
                      <Opciones monedas={this.props.monedas} />
                    </select>
                </div>
            </div>            
        )
    }
}
