import React, { Component } from 'react'
import axios from 'axios';


export default class Contenido_Agente_Aduana extends Component {


    render() {
        return (
            <div className="col-xs-12 col-md-10 col-lg-6 mb-2">
                <div className="row">
                    <div className="col-4 mb-2">
                        <div className="input-group-prepend ancho2 ">
                            <span className="input-group-text ancho rounded-pill" id={this.props.name}>{this.props.field}</span>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 col-md-10 col-lg-6 mb-2">
                        <input 
                        type={this.props.type} 
                        name={this.props.name}
                        className="form-control " 
                        aria-label="Default" 
                        aria-describedby={this.props.name}
                        onChange={this.props.onChange}
                        value={this.props.field2}
                        />
                    </div>
                                
                </div>
            </div>

        )
    }
}
