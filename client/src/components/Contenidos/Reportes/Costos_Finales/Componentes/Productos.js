import React, { Component } from 'react'
import ProductoA from './Producto'


export default class Productos extends Component {
    render() {   
        if(this.props.filtro==true){  
            return this.props.Productos.filter(Producto => Producto.proveedores_id === this.props.id).map(Producto => <ProductoA Producto={Producto} key={Producto.nombre} onChange = {this.props.onChange}/>) 
        }else{
            return <div/>
        }
    }
}