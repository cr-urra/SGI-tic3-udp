import React, { Component } from 'react'

export default class Datos extends Component {
    render() {
        return (
          <div className="input-group">
            <div className="input-group-prepend ">
                <span className="input-group-text " id="inputGroup-sizing-default">{this.props.nombre}</span>
            </div>
            <input 
            type="text" 
            name="cuenta_corriente"
            className="form-control text-right" 
            aria-label="Default" 
            aria-describedby="inputGroup-sizing-default"
            readOnly
            value={this.props.contenido}
            />
          </div>          
        )
    }
}
