import React, { Component } from 'react'


export default class Listado extends Component {
    render() {
        
        return (       
            <option value={this.props.Usuario.nombre}>{this.props.Usuario.nombre}</option>
        )
    }
}