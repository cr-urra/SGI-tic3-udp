import React, { Component } from 'react'
import Opcion from './opcion'

export default class Opciones extends Component {
    render() {     
        return this.props.proveedoresData.slice(0,5).map(proveedor => <Opcion proveedor={proveedor} key={proveedor.nombre}/>) 
    }
}