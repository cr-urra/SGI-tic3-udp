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
            const medida = await axios.get("/unidadProductos/"+res.data.productos[i].unidad_productos_id,{})
            const precio = await axios.get("/historialPrecios/maxDate/"+res.data.productos[i].id,{})
            const proveedor = await axios.get("/proveedores/"+res.data.productos[i].proveedores_id,{})
            console.log(precio)
            const producto = {
                 nombre :  res.data.productos[i].nombre,
                 codigo :  res.data.productos[i].codigo,
                 precio :  precio.data.historialPrecios.precio,
                 tipo :  res.data.productos[i].tipo,
                 proveedor : proveedor.data.proveedores.nombre,
                 medida: medida.data.unidadProductos.nombre_medida
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
