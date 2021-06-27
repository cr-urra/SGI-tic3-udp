import React, { Component } from 'react'
import Listado from './Componentes_Buscar_Producto/Listado';
import Tabla from './Componentes_Buscar_Producto/Tabla';
import Editar_Producto from './Componentes_Buscar_Producto/Editar_Producto'
import axios from 'axios'




export default class Init extends Component {

    state = {
        productsData : [],
        product : "",
        editar : "false",
    }

    componentDidMount = async () => {
        const res = await axios.get("/productos/",{})
        console.log(res,"productos");
        for (let i= 0; i < res.data.productos.length ; i++){
            const producto = {
                 nombre :  res.data.productos[i].nombre,
                 codigo :  res.data.productos[i].codigo,
                 precio :  "falta conectar dato",
                 tipo :  res.data.productos[i].tipo,
                 descripcion :  "falta conectar dato",
                 proveedor : res.data.productos[i].proveedores_id
            }
            this.setState({
                productsData: [...this.state.productsData, producto]
            })
        }
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
