import React, { Component } from 'react'

export default class Datos extends Component {
    render() {
        return (
            <div className="row ">
    
              <div className="col-5">
                <span className="input-group-text ancho2" id={this.props.name}>{this.props.nombre}</span>       
              </div>
              <div className="col-7">
                <input 
                type={this.props.tipo} 
                name={this.props.name}
                className="form-control ancho" 
                aria-label="Default" 
                defaultValue={this.props.contenido}
                value={this.props.name2}
                onChange={this.props.onChange}
                />
              </div>
            </div>
        )
    }
}
