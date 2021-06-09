import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './InputForm'


export default class Contenido_Ingresar_Producto extends Component {

    state ={
        nombre: null,
        codigo: null,
        descripcion: null,
        precio: null,
        proveedor:null,
        tipo:null
    }

    addAgente = async (nombre,codigo,descripcion,precio,tipo,proveedor) =>{
        const Producto ={
            
        }
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await axios.get()

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    render() {
        return (
            <div className="container separacion">
                <form onSubmit ={this.onSubmit}>
                    
                    <div className="row g-2 mt-2 mb-2">                 
                        <InputForm field ="Nombre" onChange = {this.onChange} field2 = {this.state.nombre} name="nombre"></InputForm>                       
                        <InputForm field ="Codigo" onChange = {this.onChange} field2 = {this.state.codigo} name="codigo"></InputForm>
                        <InputForm field ="Descripcion" onChange = {this.onChange} field2 = {this.state.descripcion} name="descripcion"></InputForm>
                        <InputForm field ="Precio" onChange = {this.onChange} field2 = {this.state.precio} name="precio"></InputForm>
                        <InputForm field ="Proveedor" onChange = {this.onChange} field2 = {this.state.proveedor} name="proveedor"></InputForm>
                        <InputForm field ="Tipo" onChange = {this.onChange} field2 = {this.state.tipo} name="tipo"></InputForm>
                    </div>
                    <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" >
                        Guardar Productos
                    </button>                              
                </form>
                
            </div>
        )
    }
}
