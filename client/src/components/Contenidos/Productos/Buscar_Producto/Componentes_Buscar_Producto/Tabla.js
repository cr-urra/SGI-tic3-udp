import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DatoTabla from './DatoTabla'
import Modal from 'react-bootstrap/Modal'


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
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Producto: {this.props.productsData[j].nombre}
                          </div>
                            <ul className="list-group list-group-flush">
                                <DatoTabla contenido = {"Nombre"} contenido2={this.props.productsData[j].nombre}/>
                                <DatoTabla contenido = {"Codigo"} contenido2={this.props.productsData[j].codigo}/>
                                <DatoTabla contenido = {"Descripcion"} contenido2={this.props.productsData[j].descripcion}/>

                                <DatoTabla contenido = {"Precio"} contenido2={this.props.productsData[j].precio}/>
                                <DatoTabla contenido = {"Proveedor"} contenido2={this.props.productsData[j].proveedor}/>
                                <DatoTabla contenido = {"Tipo"} contenido2={this.props.productsData[j].tipo}/>
                                <li className = "list-group-item">
                                    <div className="row">
                                        <div className="col-3"/>
                                        <div className="col-6 text-center">
                                            <Link to = '/users/Buscar_Producto/Historial_Producto_Precio'>
                                                <button type="button" className="btn btn-outline-success rounded-pill ancho ">                                                  
                                                    Ver Historial de Precio
                                                </button>
                                            </Link> 
                                        </div>
                                        <div className="col-3"/>                                        
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="row g-2 mt-4 mb-2">
                            <div className="col-4 text-center">
                                <button type="submit" className="btn rounded-pill color_sitio2 ancho3"> 
                                    Pedidos
                                </button>
                            </div>
                            <div className="col-4 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill ancho3" value={true} onClick={this.props.change}> 
                                    Editar
                                </button>
                            </div>
                            <div className="col-4 text-center">
                                <button type="submit" className="btn btn-danger rounded-pill ancho3" onClick={this.handleShow}> 
                                    Eliminar
                                </button>
                                <Modal show={this.state.show} onHide={this.handleClose} >
                                    <Modal.Header closeButton>
                                    <Modal.Title className="text-danger"> Eliminar Producto</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>Estas apunto de eliminar el siguiente Producto ¿Estas Seguro? </div>
                                        <h5 className="separacion text-center text-danger" > {this.props.productsData[j].nombre}</h5>                       
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                    <button type="button" className="btn btn-danger" onClick={this.delete} >Eliminar Producto</button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
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