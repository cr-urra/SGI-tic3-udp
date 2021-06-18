import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './InputForm'
import InputFormOption  from './InputFormOption'
import Modal from 'react-bootstrap/Modal'



export default class Contenido_Agente_Aduana extends Component {

    state ={
        nombre: null,
        apellido: null,
        telefono: null,
        banco: null,
        n_cuenta: null,
        tipo_cuenta: null,
        correo: null,

        show: false
    }

 

    handleClose = () =>{
        this.setState({
            show: false
        })
    }

    handleShow = () =>{
        this.setState({
            show: true
        })
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
                        <InputForm field ="Nombre" onChange = {this.onChange} field2 = {this.state.nombre} name="nombre" />
                        <InputForm field ="Apellido" onChange = {this.onChange} field2 = {this.state.apellido} name="apellido" />
                        <InputForm field ="Telefono" onChange = {this.onChange} field2 = {this.state.telefono} name="telefono" placeholder={"Ej: +569 12345678"}></InputForm>
                        <InputForm field ="Correo" onChange = {this.onChange} field2 = {this.state.correo} name="correo"></InputForm>
                        <InputForm field ="Banco" onChange = {this.onChange} field2 = {this.state.banco} name="banco"></InputForm>
                        <InputFormOption field ="Tipo Cuenta" onChange = {this.onChange} field2 = {this.state.tipo_cuenta} name="tipo_cuenta"/>
                        <InputForm field ="Numero Cuenta" onChange = {this.onChange} field2 = {this.state.n_cuenta} name="n_cuenta"></InputForm>
                       
                    </div> 
                    <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" onClick={this.handleShow} >
                        Guardar Agente de Aduana
                    </button>   

                    <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                          <Modal.Title className="text-primary">Ingresar Agente de Aduana</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>Estas apunto de crear un nuevo Agente de Aduana ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                        </Modal.Body>
                        <Modal.Footer>
                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                          <button type="button" class="btn btn-primary" onClick={this.onSubmit} >Guardar Agente de Aduana</button>
                        </Modal.Footer>
                    </Modal>                           
                </form>
            </div>
        )
    }
}
