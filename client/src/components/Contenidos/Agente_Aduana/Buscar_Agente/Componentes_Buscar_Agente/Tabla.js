import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DatoTabla from './DatoTabla'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class Tabla extends Component {

    state ={
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

    
    delete  =  (id) => async (e) => {       

        const res = await axios.put("/agentesAduana/delete/"+ id , {} ,{"headers": {
            "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
        }} )

        if(res.data.resultado==true){
            toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }else{
            toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        } 
        this.setState({
            show: false
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
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Agente Aduana: {this.props.AgentesAduana[j].nombre}
                          </div>
                            <ul className="list-group list-group-flush">
                                <DatoTabla contenido = {"Nombre"} contenido2={this.props.AgentesAduana[j].nombre}/>
                                <DatoTabla contenido = {"Apellido"} contenido2={this.props.AgentesAduana[j].apellido}/>
                                <DatoTabla contenido = {"Teléfono"} contenido2={this.props.AgentesAduana[j].telefono}/>
                                <DatoTabla contenido = {"Banco"} contenido2={this.props.AgentesAduana[j].banco}/>
                                <DatoTabla contenido = {"Tipo de Cuenta"} contenido2={this.props.AgentesAduana[j].tipo_cuenta}/>
                                <DatoTabla contenido = {"Numero de Cuenta"} contenido2={this.props.AgentesAduana[j].n_cuenta}/>
                                <DatoTabla contenido = {"Saldo Actual"} contenido2={this.props.AgentesAduana[j].saldo}/>
                                <li className = "list-group-item">
                                    <div className="row">
                                        <div className="col-3"/>
                                        <div className="col-6 text-center">
                                            <Link to = '/users/Buscar_Agente_Aduana/Historial_Saldo'>
                                                <button type="button" className="btn btn-outline-success rounded-pill ancho ">                                                  
                                                    Ver Historial del Saldo
                                                </button>
                                            </Link> 
                                        </div>
                                        <div className="col-3"/>                                        
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="row g-2 mt-4 mb-2">
                            <div className="col-6 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill ancho3" value={true} onClick={this.props.change} > 
                                    Editar
                                </button>
                            </div>
                            <div className="col-6 text-center">
                                <button type="submit" className="btn btn-danger rounded-pill ancho3" onClick={this.handleShow}> 
                                    Eliminar
                                </button>
                            </div>
                            <Modal show={this.state.show} onHide={this.handleClose} >
                                <Modal.Header closeButton>
                                  <Modal.Title className="text-danger"> Eliminar Agente de Aduana</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>Estas apunto de eliminar el siguiente Agente de Aduana ¿Estas Seguro? </div>
                                    <h5 className="separacion text-center text-danger" > {this.props.AgentesAduana[j].nombre}</h5>                       
                                </Modal.Body>
                                <Modal.Footer>
                                  <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                  <button type="button" class="btn btn-danger" onClick={this.delete(this.props.AgentesAduana[j].id)} >Eliminar Agente de Aduana</button>
                                </Modal.Footer>
                            </Modal>
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