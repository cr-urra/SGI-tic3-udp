import React, { Component } from 'react'
import InputForm from './InputForm'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

export default class Contenido_Agente_Aduana extends Component {

    state ={
        nombre_medida: null,
        valor_unidad: null,

        show: false
    }

    timeSensativeAction = async (e) =>{
        const res = await sleep(2500) 
        window.location.reload();        
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.nombre_medida != null &&
            this.state.valor_unidad != null &&
            this.state.nombre_medida != "" &&
            this.state.valor_unidad != ""
        ){
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const Medida = {
                nombre_medida: this.state.nombre_medida,
                valor_unidad: this.state.valor_unidad
            }
            const res = await axios.post("/unidadProductos/", Medida)  
            if(res.data.resultado==true){
                toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  

                this.timeSensativeAction()
                               
                
            }else{
                toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
            }  
        }else{
            toast.warn("Debes ingresar correctamente todos los datos, intenta nuevamente", {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }              
        this.setState({
            show: false
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
        if(this.props.filtro===true){
            return (
                <div className="container separacion">
                    <div className="card shadow-lg">
                        <div className="card-header">
                            Formulario para Ingresar Nueva Medida
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="row  ml-2 mr-2 mt-5">
                                <InputForm field ="Nombre" onChange = {this.onChange} field2 = {this.state.nombre_medida} name="nombre_medida" type={"text"}/>
                                <InputForm field ="Valor Unidad" onChange = {this.onChange} field2 = {this.state.valor_unidad} name="valor_unidad" type={"number"} placeholder={"EJ=> Kilo=1 ; Tonelada = 1000"}/>                                               
                            </div>
                            <button type="button" className="btn btn-primary rounded-pill separacion" onClick={this.handleShow}>
                                Guardar Medida
                            </button> 
                            <Modal show={this.state.show} onHide={this.handleClose} >
                                <Modal.Header closeButton>
                                  <Modal.Title className="text-primary">Ingresar Medida</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>Estas apunto de crear una nueva Medida ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                                </Modal.Body>
                                <Modal.Footer>
                                  <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                  <button type="button" className="btn btn-primary" onClick={this.onSubmit} >Guardar Medida</button>
                                </Modal.Footer>
                            </Modal>      
                        </form>
                    </div>                     
                </div>
            )

        }else{
            return <div/>
        }
        
    }
}
