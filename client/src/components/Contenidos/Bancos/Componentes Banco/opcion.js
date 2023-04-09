import React, { Component } from 'react'

export default class Listado extends Component {
    render() {
        return (     
                <option value={this.props.banco.nombre}>{this.props.banco.proveedores.nombre}</option>
        )
    }
}