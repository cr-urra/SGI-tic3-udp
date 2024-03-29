import React, { Component } from 'react'
import Datos from './EditDatos'
import {Link} from 'react-router-dom'; 
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default class Banco extends Component {
    
    state ={
        nombre: null,
        pais: null,
        direccion: null,
        correo: null,
        telefono: null,
        id: null,
        show: false
    }

    componentDidMount = async () => {
        if(this.props.proveedor !== ""){
            let j;
            for(let i = 0 ; i < this.props.proveedores.length ; i++){
                if(this.props.proveedor=== this.props.proveedores[i].nombre){
                    j = i;
                }
            }
            if(this.props.proveedores[j]!=null){                                 
                this.setState({
                    nombre: this.props.proveedores[j].nombre,
                    pais: this.props.proveedores[j].pais,
                    direccion: this.props.proveedores[j].direccion,
                    correo: this.props.proveedores[j].correo,
                    telefono: this.props.proveedores[j].telefono,
                    id: this.props.proveedores[j].id
                })
            }
        }    
    }
    
    onSubmit = async e => {            
        e.preventDefault();
        if(
            this.state.nombre != "" &&
            this.state.pais != "" &&
            this.state.direccion != "" &&
            this.state.correo != "" &&
            this.state.telefono != "" 
        ){
            const Proveedor = {
                nombre: this.state.nombre,
                pais: this.state.pais,
                direccion: this.state.direccion,
                correo: this.state.correo,
                telefono: this.state.telefono,      
            }    
            const res = await axios.put("/proveedores/"+ this.state.id, Proveedor, {
                "headers": {
                    "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                }
            })
            if (res.data.resultado == true){
                toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
                await this.props.onRechargeData()
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
        if(this.props.proveedor !== ""){
            let j;
            for(let i = 0 ; i < this.props.proveedores.length ; i++){
                if(this.props.proveedor=== this.props.proveedores[i].nombre){
                    j = i;
                }
            }
            if(this.props.proveedores[j]!=null){
                return (
                    <div>
                        <div className="container separacion">
                            <div className="card border-primary  shadow-lg">
                                <form onSubmit={this.onSubmit}>
                                    <div className="card-header text-primary">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>{this.props.proveedores[j].nombre}</h4>
                                            </div>
                                            <div className="col-7"/>
                                            <div className="col-1">
                                                <Link to = '/users/Buscar_Proveedor'> 
                                                    <button className="btn btn-primary ancho btn-sm" onClick={this.props.change} value ={false}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <Datos nombre={"Nombre"} contenido={this.props.proveedores[j].nombre} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    <Datos nombre={"Pais"} contenido={this.props.proveedores[j].pais} name={"pais"} name2={this.state.pais} onChange={this.onChange}/>
                                    <Datos nombre={"Direccion"} contenido={this.props.proveedores[j].direccion} name={"direccion"} name2={this.state.direccion} onChange={this.onChange}/>
                                    <Datos nombre={"Correo"} contenido={this.props.proveedores[j].correo} name={"correo"} name2={this.state.correo} onChange={this.onChange}/>
                                    <Datos nombre={"Telefono"} contenido={this.props.proveedores[j].telefono} name={"telefono"} name2={this.state.telefono} onChange={this.onChange}/>
                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                        <Modal.Header closeButton>
                                          <Modal.Title className="text-primary">Editar Proveedor</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>Estas apunto de cambiar los datos del siguiente Proveedor ¿Estas Seguro? </div>
                                            <h5 className="separacion text-center text-danger" > {this.props.proveedores[j].nombre}</h5>                       
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                          <button type="button" class="btn color_sitio2" onClick={this.onSubmit}> Guardar Cambios</button>
                                        </Modal.Footer>
                                    </Modal>
                                </form>
                            </div>
                            <button className="btn color_sitio2 separacion" onClick={this.handleShow}>
                                Guardar Proveedor
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