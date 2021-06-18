import React, { Component } from 'react'
import Opcion from './opcion'


export default class Opciones extends Component {
    render() {     
            return this.props.Proveedores.map(Proveedor => <Opcion Proveedor={Proveedor} key={Proveedor.nombre}/>) 
    }
}