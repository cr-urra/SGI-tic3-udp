import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './InputForm'
import InputFormOption  from './InputFormOption'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

export default class Contenido_Agente_Aduana extends Component {

    state ={
        nombre: null,
        apellido: null,
        telefono: null,
        banco: null,
        n_cuenta: null,
        tipo_cuenta: null,
        correo: null,
        show: false,
        rut: null
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

    notificacion = (data) =>{
        if(data.message === "Agente de aduana creado correctamente") toast.success(data.message, {position: toast.POSITION.TOP_CENTER})

        
    }


    onSubmit = async e => {
        e.preventDefault();
        axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token')        
        const banco = {
            numero_cuenta: this.state.n_cuenta,
            tipo_cuenta: this.state.tipo_cuenta,
            nombre_banco: this.state.banco,
        }                    
        const id = await axios.post("/bancosAgentesAduana/", banco)              
        const Agente = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,  
            numero_cuenta: this.state.n_cuenta,          
            correo: this.state.correo,
            bancos_agentes_aduana_id: id.data.bancosAgentesAduana.id,
            rut: this.state.rut
        }
        const res = await axios.post("/agentesAduana/", Agente)
        console.log(res)
        const telefono = {
            telefono: this.state.telefono,
            agentes_aduana_id: res.data.agentes_aduana.id
        }
        const aux = await axios.post("/telefonosAgentesAduana/",telefono)

       
        this.notificacion(res.data)
       
        this.setState({
            show: false
        })
        
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
                        <InputForm field ="Rut" onChange = {this.onChange} field2 = {this.state.rut} name="rut" />
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
                          <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}  >Guardar Agente de Aduana</button>
                        </Modal.Footer>
                    </Modal>                           
                </form>
            </div>
        )
    }
}
