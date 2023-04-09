import React, { Component } from 'react'

export default class Listado extends Component {
    render() {
        return (       
            <option value={this.props.proveedor.nombre}>{this.props.proveedor.nombre}</option>
        )
    }
}