import React, { Component } from 'react'
import Listado from './Componentes_Buscar_Producto/Listado';
import Tabla from './Componentes_Buscar_Producto/Tabla';
import Editar_Producto from './Componentes_Buscar_Producto/Editar_Producto'
import axios from 'axios'
import Carga from './Carga'

export default class Init extends Component {
    state = {
        productsData : [],
        product : "",
        editar : "false",
        carga: false
    }

    onRechargeData = async () => {
        this.setState({
            productsData : [],
            product : "",
            editar : "false",
            carga: false
        })
        const res = await axios.get("/productos/",{})
        for (let i= 0; i < res.data.productos.length ; i++){
            const medida = await axios.get("/unidadProductos/"+res.data.productos[i].unidad_productos_id,{})
            const precio = await axios.get("/historialPrecios/maxDate/"+res.data.productos[i].id,{})
            const proveedor = await axios.get("/proveedores/"+res.data.productos[i].proveedores_id,{})
            const producto = {
                 nombre :  res.data.productos[i].nombre,
                 id: res.data.productos[i].id,
                 id_proveedor: res.data.productos[i].proveedores_id,
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
        await this.setState({
            carga: true
        })
    }

    componentDidMount = async () => {
        const res = await axios.get("/productos/",{})
        for (let i= 0; i < res.data.productos.length ; i++){
            const medida = await axios.get("/unidadProductos/"+res.data.productos[i].unidad_productos_id,{})
            const precio = await axios.get("/historialPrecios/maxDate/"+res.data.productos[i].id,{})
            const proveedor = await axios.get("/proveedores/"+res.data.productos[i].proveedores_id,{})
            const producto = {
                 nombre :  res.data.productos[i].nombre,
                 id: res.data.productos[i].id,
                 id_proveedor: res.data.productos[i].proveedores_id,
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
        await this.setState({
            carga: true
        })
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

    onResetProduct = (event) => {
        this.setState({
            product: ""
        })
    }

    render() {
        if(this.state.carga==true){
            if(this.state.editar ==="true"){
                return(
                    <main className="content">
                        <h1 className="display-5 titulo">Editar {this.state.product}</h1>
                        <Editar_Producto productsData={this.state.productsData} product = {this.state.product} change = {this.change} onRechargeData = {this.onRechargeData}/>
                    </main>
                )
            }else{
                return (
                    <main className="content">
                        <h1 className="display-5 titulo">Buscar Producto</h1>
                        <Listado productsData = {this.state.productsData} onChangeProduct = {this.onChangeProduct} product = {this.state.product}></Listado>
                        <Tabla product = {this.state.product} productsData = {this.state.productsData} change={this.change} onRechargeData = {this.onRechargeData} onResetProduct = {this.onResetProduct}></Tabla>
                    </main>
                )
            }
        }else{
            return(
                <Carga />
            )
        } 
    }
}
