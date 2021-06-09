import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './InputForm'
import InputFormPhone from './InputFormPhone'


export default class Contenido_Agente_Aduana extends Component {

    state ={
        nombre: null,
        apellido: null,
        telefono: null,
        banco: null,
        n_cuenta: null,
        tipo_cuenta: null,
        correo: null
    }

    addAgente = async (nombre,telefono,banco,n_cuenta) =>{
        const Agente_Aduanta ={
            
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
                        <InputForm field ="Apellido" onChange = {this.onChange} field2 = {this.state.apellido} name="apellido"></InputForm>
                        <InputFormPhone field ="Telefono" onChange = {this.onChange} field2 = {this.state.telefono} name="telefono"></InputFormPhone>
                        <InputForm field ="Correo" onChange = {this.onChange} field2 = {this.state.correo} name="correo"></InputForm>
                        <InputForm field ="Banco" onChange = {this.onChange} field2 = {this.state.banco} name="banco"></InputForm>
                        <InputForm field ="Tipo Cuenta" onChange = {this.onChange} field2 = {this.state.tipo_cuenta} name="tipo_cuenta"></InputForm>
                        <InputForm field ="Numero Cuenta" onChange = {this.onChange} field2 = {this.state.n_cuenta} name="n_cuenta"></InputForm>
                       
                    </div> 
                    <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" >
                        Guardar Agente de Aduana
                    </button>                              
                </form>
            </div>
        )
    }
}
