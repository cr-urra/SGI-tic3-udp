import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default class Botones extends Component {

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

    delete  = async (e) => {       

        const res = await axios.put("/cuentasBancos/delete/"+ this.props.id , {} ,{"headers": {
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

            return (
                <div className="container separacion_final">
                    <div className="row g-2  mb-4">
                        <div className="col-6 text-center">
                        <button type="button" className="btn btn-primary rounded-pill ancho3"  value ={true} onClick={this.props.change} >
                            Editar Banco 
                        </button>
                        </div>
                        <div className="col-6 text-center">
                        <button type="button" className="btn btn-danger rounded-pill ancho3" onClick={this.handleShow}>
                            Eliminar Banco
                        </button>
                        </div>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                          <Modal.Title className="text-danger">Eliminar Banco</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>Estas apunto de eliminar el siguiente banco ¿Estas Seguro? </div>
                            <h5 className="separacion text-center text-danger" > {this.props.nombre}</h5>                       
                        </Modal.Body>
                        <Modal.Footer>
                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                          <button type="button" class="btn btn-danger" onClick={this.delete} > Eliminar Banco</button>
                        </Modal.Footer>
                    </Modal>
                </div>

                
        
            )
    }
}