import React, { Component } from 'react'



export default class Contenido_Agente_Aduana extends Component {


    render() {
        return (
            <div className="col-xs-12 col-md-12 col-lg-6 mb-2">
                <div className="row">
                    <div className="col-4 mb-2">
                        <div className="input-group-prepend ancho2 ">
                            <span className="input-group-text ancho rounded-pill" id={this.props.name}>{this.props.field}</span>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-6 mb-2">
                        <input 
                        type="text" 
                        name={this.props.name}
                        className="form-control " 
                        aria-label="Default" 
                        placeholder={this.props.placeholder}
                        aria-describedby={this.props.name}
                        onChange={this.props.onChange}
                        value={this.props.field2}
                        required
                        />
                    </div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                                
                </div>
            </div>

        )
    }
}
