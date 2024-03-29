import React, { Component } from 'react'
import Datos from './EditDatos'
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'   
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default class EditProduct extends Component {

    state = {
        nombre: null,
        codigo: null,
        tipo: null,
        precio: null,
        id: null,
        id_proveedor: null,
        show: false
    }

    componentDidMount = async () => {
        if(this.props.product !== ""){
            let j;
            for(let i = 0 ; i < this.props.productsData.length ; i++){
                if(this.props.product=== this.props.productsData[i].nombre){
                    j = i;
                }
            }
            if(this.props.productsData[j]!=null){                        
                this.setState({
                    nombre: this.props.productsData[j].nombre,
                    codigo: this.props.productsData[j].codigo,
                    precio: this.props.productsData[j].precio,
                    descripcion: this.props.productsData[j].descripcion,
                    tipo: this.props.productsData[j].tipo,
                    id : this.props.productsData[j].id,
                    id_proveedor: this.props.productsData[j].id_proveedor
                })
            }
        }    
    }
    
    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.nombre != ""&&
            this.state.codigo !=""&&           
            this.state.tipo != ""&&
            this.state.precio != ""
        ){
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const Producto = {
                nombre: this.state.nombre,
                codigo: this.state.codigo,
                tipo: this.state.tipo,
            }
            const res = await axios.put("/productos/" + this.state.id, Producto, {
                "headers": {
                    "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                }
            }) 
            let res2 = null;
            res.data.resultado ? res2 = await axios.post("/historialPrecios/",{
                productos_id: this.state.id,
                precio: this.state.precio
            } , {
                "headers": {
                    "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                }
            }) : toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
            if(res2.data.resultado==true){
                toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
                await this.props.onRechargeData()
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

        if(this.props.product !== ""){
            let j;
            for(let i = 0 ; i < this.props.productsData.length ; i++){
                
                if(this.props.product=== this.props.productsData[i].nombre){
                    j = i;
                }
            }
            if(this.props.productsData[j]!=null){
                return (
                    <div>
                        
                        <div className="container separacion">

                            <div className="card border-primary  shadow-lg">
                                <form onSubmit={this.onSubmit}>
                                    <div className="card-header text-primary">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>{this.props.productsData[j].nombre}</h4>
                                            </div>
                                            <div className="col-7"/>
                                            <div className="col-1">
                                                <Link to = '/users/Buscar_Producto'> 
                                                    <button className="btn btn-primary ancho btn-sm" onClick={this.props.change} value ={false}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <Datos nombre={"Nombre"} contenido={this.props.productsData[j].nombre} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    <Datos nombre={"Codigo"} contenido={this.props.productsData[j].codigo} name={"codigo"} name2={this.state.codigo} onChange={this.onChange}/>                                                                    
                                    <Datos nombre={"Tipo"} contenido={this.props.productsData[j].tipo} name={"tipo"} name2={this.state.tipo} onChange={this.onChange}/>
                                    <Datos nombre={"Precio"} contenido={this.props.productsData[j].precio} name={"precio"} name2={this.state.precio} onChange={this.onChange}/>

                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                        <Modal.Header closeButton>
                                          <Modal.Title className="text-primary">Editar Producto</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>Estas apunto de cambiar los datos del siguiente Producto ¿Estas Seguro? </div>
                                            <h5 className="separacion text-center text-danger" > {this.props.productsData[j].nombre}</h5>                       
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                          <button type="button" class="btn color_sitio2" onClick={this.onSubmit}> Guardar Cambios</button>
                                        </Modal.Footer>
                                    </Modal>
                                </form>
                            </div>
                            
                            <button className="btn color_sitio2 separacion" onClick={this.handleShow} >
                                Guardar Producto
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