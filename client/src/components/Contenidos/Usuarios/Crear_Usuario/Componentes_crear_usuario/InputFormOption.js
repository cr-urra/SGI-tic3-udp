import React, { Component } from 'react'
import axios from 'axios';


export default class Contenido_Agente_Aduana extends Component {


    render() {
        return (
            <div className="col-6 mb-2">
                <div className="row">
                    <div className="col-4">
                        <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Rol</label>
                    </div>
                    <div className="col-8">
                        <select className="form-select ancho alto"  id="inputGroupSelect01" value = {this.props.rol} onChange={this.props.onChange} >
                          <option defaultValue>Escoger el Rol del Usuario</option>
                          <option value="Administrador">Administrador</option>
                          <option value="Operaciones">Operaciones</option>
                          <option value="Finanzas">Finanzas</option>
                        </select>
                    </div>
                </div>
            </div>

        )
    }
}
