import React, { Component } from 'react'

export default class Opcion extends Component {
    render() {  
        return (       
            <option value={this.props.Proveedor.nombre}>{this.props.Proveedor.nombre}</option>
        )
    }
}