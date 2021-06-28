import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './InputForm'
import Modal from 'react-bootstrap/Modal'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


export default class Contenido_Ingresar_Producto extends Component {

    state ={
        nombre: null,
        codigo: null,
        descripcion: null,
        precio: null,
        proveedor:null,
        tipo:null,

        show: false
    }


    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.nombre !=  null && 
            this.state.codigo !=  null &&
            this.state.descripcion !=  null &&
            this.state.precio !=  null &&
            this.state.proveedor != null &&
            this.state.tipo != null &&
            this.state.nombre !=  "" && 
            this.state.codigo !=  "" &&
            this.state.descripcion !=  "" &&
            this.state.precio !=  "" &&
            this.state.proveedor != "" &&
            this.state.tipo != ""
        ){
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const Producto = {
                nombre: this.state.nombre,
                codigo: this.state.codigo,
                descripcion: this.state.descripcion,
                precio: this.state.precio,
                proveedor: this.state.proveedor,
                tipo: this.state.tipo 
            }
            console.log(Producto)
            const res = await axios.post("/sacate-la-url/", Producto)  
            toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  

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
                    <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" onClick={this.handleShow}>
                        Guardar Productos
                    </button>  

                    <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                          <Modal.Title className="text-primary">Ingresar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>Estas apunto de crear un nuevo Producto ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                        </Modal.Body>
                        <Modal.Footer>
                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                          <button type="button" class="btn btn-primary" onClick={this.onSubmit} >Guardar Producto</button>
                        </Modal.Footer>
                    </Modal>                            
                </form>
                
            </div>
        )
    }
}
