import React, { Component } from 'react'
import ProductoA from './Producto'


export default class Productos extends Component {
    render() {   
        if(this.props.filtro==true){  
            return this.props.Productos.map(Producto => <ProductoA Producto={Producto} key={Producto.nombre}/>) 
        }else{
            return <div/>
        }
    }
}