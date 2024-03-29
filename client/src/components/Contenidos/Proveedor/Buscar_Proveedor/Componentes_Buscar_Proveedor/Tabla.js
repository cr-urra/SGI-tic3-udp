import React, { Component } from 'react'
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

    delete = (id) => async (e) => {            
        const res = await axios.put("/proveedores/delete/" + id , {} ,{
            "headers": {
                "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
            }
        })
        if(res.data.resultado==true){
            toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
            await this.props.onRechargeData()
            await this.props.onResetProveedor()
        }else{
            toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        } 
        this.setState({
            show: false
        })
    }

    render() {
        if(this.props.proveedor !== ""){
            let j;
            for(let i = 0 ; i < this.props.proveedoresData.length ; i++){
                if(this.props.proveedor=== this.props.proveedoresData[i].nombre){
                    j = i;
                }
            }
            if(this.props.proveedoresData[j]!=null){
                return (       
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Proveedor: {this.props.proveedoresData[j].nombre}
                          </div>
                            <ul className="list-group list-group-flush">
                                <DatoTabla contenido = {"Nombre"} contenido2={this.props.proveedoresData[j].nombre}/>
                                <DatoTabla contenido = {"País"} contenido2={this.props.proveedoresData[j].pais}/>                                
                                <DatoTabla contenido = {"Dirección"} contenido2={this.props.proveedoresData[j].direccion}/>
                                <DatoTabla contenido = {"Correo"} contenido2={this.props.proveedoresData[j].correo}/>                                
                                <DatoTabla contenido = {"Teléfono"} contenido2={this.props.proveedoresData[j].telefono}/>
                                <DatoTabla contenido = {"Moneda"} contenido2={this.props.proveedoresData[j].moneda}/>
                                <DatoTabla contenido = {"Banco"} contenido2={this.props.proveedoresData[j].banco}/>
                            </ul>
                        </div>
                        <div className="row g-2 mt-4 mb-2">
                            <div className="col-6 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill ancho3" value={true} onClick={this.props.change}> 
                                    Editar
                                </button>
                            </div>
                            <div className="col-6 text-center">
                                <button type="submit" className="btn btn-danger rounded-pill ancho3" onClick={this.handleShow}> 
                                    Eliminar
                                </button>
                                <Modal show={this.state.show} onHide={this.handleClose} >
                                    <Modal.Header closeButton>
                                    <Modal.Title className="text-danger"> Eliminar Proveedor</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>Estas apunto de eliminar el siguiente Proveedor ¿Estas Seguro? </div>
                                        <h5 className="separacion text-center text-danger" > {this.props.proveedoresData[j].nombre}</h5>                       
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                    <button type="button" class="btn btn-danger" onClick={this.delete(this.props.proveedoresData[j].id)} >Eliminar Proveedor</button>
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