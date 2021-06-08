import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Datos extends Component {
    render() {
        return (
            <div className="row separacion">
              <div className="col-1"/>
              <div className="col-4">
                <span className="input-group-text ancho2" id="inputGroup-sizing-default">{this.props.nombre}</span>       
              </div>
              <div className="col-6">
                <input 
                type="text" 
                name={this.props.name}
                className="form-control  ancho" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                defaultValue={this.props.contenido}
                value = {this.props.name2}
                onChange = {this.props.onChange}
                />
              </div>
            </div>
        )
    }
}
