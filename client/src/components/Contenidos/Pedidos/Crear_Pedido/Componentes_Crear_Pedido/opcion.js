import React, { Component } from 'react'


export default class Listado extends Component {
    render() {
        
        return (       
            <option value={this.props.proveedor.id}>{this.props.proveedor.nombre}</option>
        )
    }
}