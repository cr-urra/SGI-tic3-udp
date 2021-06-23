import React, { Component } from 'react'
import Opcion from './Opcion'


export default class Opciones extends Component {
    render() {     
            return this.props.Proveedores.map(proveedor => <Opcion proveedor={proveedor} key={proveedor.nombre} />)
    }
}