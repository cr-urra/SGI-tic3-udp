import React, { Component } from 'react'
import Producto from './Producto'


export default class Pedidos extends Component {
    render() {     
            return this.props.Productos.map(producto => <Producto producto={producto} key={producto.productos_id}/>)
    }
}