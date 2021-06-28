import React, { Component } from 'react'
import axios from 'axios';


export default class Contenido_Agente_Aduana extends Component {


    render() {
        return (
            <div className="col-6 mb-2">
                <div className="row">
                    <div className="col-4">
                        <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">{this.props.field}</label>
                    </div>
                    <div className="col-8">
                        <select className="form-select ancho alto" name={this.props.name} id="inputGroupSelect01" value = {this.props.field2} onChange={this.props.onChange} >
                          <option defaultValue>Tipo de Cuenta</option>
                          <option value="Cuenta Corriente">Cuenta Corriente</option>
                          <option value="Cuenta de Ahorros">Cuenta de Ahorros</option>
                          <option value="Cuenta Vista">Cuenta Vista</option>
                        </select> 
                    </div>
                </div>
            </div>

        )
    }
}
