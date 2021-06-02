import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Listado from '../Componentes/Componentes Productos/Listado';
import ProductsData from '../JasonDePruebas/Productos.json';
import Tabla from '../Componentes/Componentes Productos/Tabla';




export default class Init extends Component {

    state = {
        productsData : ProductsData,
        product : "",
    }

    onChangeProduct = (event) => {
        this.setState({
            product: event.target.value
        })
    }

    render() {
        return (
            <main className="content">
            <h1 className="display-5 titulo">Buscar Producto</h1>

            <Listado productsData = {this.state.productsData} onChangeProduct = {this.onChangeProduct} product = {this.state.product}></Listado>
            <Tabla product = {this.state.product} productsData = {this.state.productsData}></Tabla>
        </main>
        )
    }
}
