import React, { Component } from 'react'
import Linea from './Linea'

export default class Lineas extends Component {
    render() {     
        return this.props.Productos.map(Producto => <Linea Producto={Producto} key={Producto.nombre}/>) 
    }
}