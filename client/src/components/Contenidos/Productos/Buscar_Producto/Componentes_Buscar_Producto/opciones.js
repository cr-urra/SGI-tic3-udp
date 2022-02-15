import React, { Component } from 'react'
import Opcion from './opcion'


export default class Opciones extends Component {
    render() {     
            return this.props.productsData.slice(0,this.props.productsData.length).map(product => <Opcion product={product} key={product.nombre}/>)
    }
}