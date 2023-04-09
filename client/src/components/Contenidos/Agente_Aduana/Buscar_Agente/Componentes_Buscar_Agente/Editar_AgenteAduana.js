import React, { Component } from 'react'
import Datos from './EditDatos'
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default class EditAgenteAduana extends Component {

    state = {
        nombre: null,
        apellido:null,
        telefono:null,
        banco:null,
        tipo_cuenta : null,
        n_cuenta: null,
        id: null,
        banco_id: null,
        show: false
    }

    componentDidMount = async () => {
        if(this.props.AgenteAduana !== ""){
            let j;
            for(let i = 0 ; i < this.props.AgentesAduana.length ; i++){
                if(this.props.AgenteAduana=== this.props.AgentesAduana[i].nombre){
                    j = i;
                }
            }
            if(this.props.AgentesAduana[j]!=null){               
                this.setState({
                    nombre: this.props.AgentesAduana[j].nombre,
                    apellido: this.props.AgentesAduana[j].apellido,
                    telefono: this.props.AgentesAduana[j].telefono,
                    banco: this.props.AgentesAduana[j].banco,
                    tipo_cuenta : this.props.AgentesAduana[j].tipo_cuenta,
                    n_cuenta: this.props.AgentesAduana[j].n_cuenta,
                    id: this.props.AgentesAduana[j].id,
                    banco_id: this.props.AgentesAduana[j].id_banco
                })
            }
        }    
    }
    
    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.nombre != "" &&
            this.state.apellido !="" &&
            this.state.telefono !="" &&
            this.state.banco !="" &&
            this.state.tipo_cuenta  != "" &&
            this.state.n_cuenta != "" 
        ){
            const Agente = {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                numero_cuenta: this.state.n_cuenta,
                tipo_cuenta: this.state.tipo_cuenta,            
            }
            const res = await axios.put("/agentesAduana/" + this.state.id, Agente, {
                "headers": {
                    "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                }
            })
            const banco ={
                nombre_banco: this.state.banco
            }
            let res2 = null
            let res3 = null
            if (res.data.resultado) {
                res2 = await axios.put("/bancosAgentesAduana/" + this.state.banco_id, banco, {
                    "headers": {
                        "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                    }
                })
                const telefono = {
                    telefono: this.state.telefono
                }
                if (res2.data.resultado) {
                    res3 = await axios.put("/telefonosAgentesAduana/" + this.state.id, telefono, {
                        "headers": {
                            "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                        }
                    })
                    if (res3.data.resultado==true) {
                        toast.success(res3.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
                        this.props.onRechargeData()
                        this.props.onResetAgente()
                    }else{
                        toast.error(res3.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
                    } 
                } else {
                    toast.error(res2.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
                }
            } else {
                toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
            } 
        }else{
            toast.warn("Debes ingresar correctamente todos los datos, intenta nuevamente", {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }
        this.setState({
            show: false
        })                    
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
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

    render() {
        if(this.props.AgenteAduana !== ""){
            let j;
            for(let i = 0 ; i < this.props.AgentesAduana.length ; i++){
                
                if(this.props.AgenteAduana=== this.props.AgentesAduana[i].nombre){
                    j = i;
                }
            }
            if(this.props.AgentesAduana[j]!=null){
                return (
                    <div>
                        
                        <div className="container separacion">

                            <div className="card border-primary  shadow-lg">
                                <form onSubmit={this.onSubmit}>
                                    <div className="card-header text-primary">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>{this.props.AgentesAduana[j].nombre}</h4>
                                            </div>
                                            <div className="col-7"/>
                                            <div className="col-1">
                                                <Link to = '/users/Buscar_Agente_Aduana'> 
                                                    <button className="btn btn-primary ancho btn-sm" onClick={this.props.change} value ={false}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <Datos nombre={"Nombre"} contenido={this.props.AgentesAduana[j].nombre} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    <Datos nombre={"Apellido"} contenido={this.props.AgentesAduana[j].apellido} name={"apellido"} name2={this.state.apellido} onChange={this.onChange}/>
                                    <Datos nombre={"Telefono"} contenido={this.props.AgentesAduana[j].telefono} name={"telefono"} name2={this.state.telefono} onChange={this.onChange}/>
                                    <Datos nombre={"Banco"} contenido={this.props.AgentesAduana[j].banco} name={"banco"} name2={this.state.banco} onChange={this.onChange}/>
                                    <Datos nombre={"Tipo Cuenta"} contenido={this.props.AgentesAduana[j].tipo_cuenta} name={"tipo_cuenta"} name2={this.state.tipo_cuenta} onChange={this.onChange}/>
                                    <Datos nombre={"Numero Cuenta"} contenido={this.props.AgentesAduana[j].n_cuenta} name={"n_cuenta"} name2={this.state.n_cuenta} onChange={this.onChange}/>
                                    
                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                        <Modal.Header closeButton>
                                          <Modal.Title className="text-primary">Editar Agente de Aduana</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>Estas apunto de cambiar los datos del siguiente Agente de Aduana ¿Estas Seguro? </div>
                                            <h5 className="separacion text-center text-danger" > {this.props.AgentesAduana[j].nombre}</h5>                       
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                          <button type="button" class="btn color_sitio2" onClick={this.onSubmit}> Guardar Cambios</button>
                                        </Modal.Footer>
                                    </Modal>
                                </form>
                            </div>
                            
                            <button className="btn color_sitio2 separacion" onClick={this.handleShow}>
                                Guardar Agente Aduana
                            </button>
                        </div>
                    </div>
                )
            }else{
                return <div/>
            }
        }else{
           return <div/>
        } 
    }
}