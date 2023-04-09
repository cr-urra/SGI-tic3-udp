import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form_Ingresar_Producto';

export default class Contenido_Agente_Aduana extends Component {
    render() {
        return (
            <div className="col-xs-6 col-md-12 col-lg-6 mb-2">
                <div className="row">
                    <div className="col-3 mb-2">
                        <div className="input-group-prepend ancho2 ">
                            <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">{this.props.field}</span>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-8 col-lg-8 mb-2">
                        <input 
                            type={this.props.type} 
                            name={this.props.name}
                            className="form-control" 
                            placeholder={this.props.placeholder}
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.props.onChange}
                            value={this.props.field2}
                        />
                    </div>           
                </div>
            </div>
        )
    }
}
