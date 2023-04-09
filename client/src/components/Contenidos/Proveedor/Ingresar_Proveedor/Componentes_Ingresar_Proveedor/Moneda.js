import React, { Component } from 'react'
import Dato from './Dato'
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
        pais: null,
        moneda: null,

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
            this.state.pais != null &&
            this.state.moneda != null &&
            this.state.pais != "" &&
            this.state.moneda != ""
        ){
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const Moneda = {
                pais: this.state.pais,
                moneda: this.state.moneda
            }
            const res = await axios.post("/monedas/", Moneda)  
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
                            Formulario para Ingresar Nueva Moneda
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="row  ml-2 mr-2 mt-5">
                                <div className="col-6 mb-3">
                                    <Dato nombre={"Pais"} name={"pais"} name2={this.state.pais} onChange={this.onChange}/>
                                </div>
                                <div className="col-6 mb-3">
                                    <Dato nombre={"Moneda"} name={"moneda"} name2={this.state.moneda} onChange={this.onChange}/>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary rounded-pill separacion" onClick={this.handleShow}>
                                Guardar Moneda
                            </button> 
                            <Modal show={this.state.show} onHide={this.handleClose} >
                                <Modal.Header closeButton>
                                  <Modal.Title className="text-primary">Ingresar Moneda</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>Estas apunto de crear una nueva Moneda ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                                </Modal.Body>
                                <Modal.Footer>
                                  <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                  <button type="button" className="btn btn-primary" onClick={this.onSubmit} >Guardar Moneda</button>
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
