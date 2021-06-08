import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Listado from './Componentes_Buscar_Producto/Listado';
import ProductsData from '../../../JasonDePruebas/Productos.json';
import Tabla from './Componentes_Buscar_Producto/Tabla';
import Editar_Producto from './Componentes_Buscar_Producto/Editar_Producto'




export default class Init extends Component {

    state = {
        productsData : ProductsData,
        product : "",
        editar : "false",
    }

    onChangeProduct = (event) => {
        this.setState({
            product: event.target.value
        })
    }

    change = (event) => {
        this.setState({
            editar: event.target.value
        })
     }

    render() {

        if(this.state.editar ==="true"){
            return(
                <main className="content">
                    <h1 className="display-5 titulo">Editar {this.state.product}</h1>
                    <Editar_Producto productsData={this.state.productsData} product = {this.state.product} change = {this.change}/>
                </main>
            )

        }else{
            return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Producto</h1>
    
                <Listado productsData = {this.state.productsData} onChangeProduct = {this.onChangeProduct} product = {this.state.product}></Listado>
                <Tabla product = {this.state.product} productsData = {this.state.productsData} change={this.change}></Tabla>
            </main>
        
            )
        }
    }
}
