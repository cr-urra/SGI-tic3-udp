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
    delete  =  (id) => async (e) => {       
        console.log(localStorage.getItem('X-CSRF-Token') , "revisa aqui")        
        const res = await axios.delete("/usuarios/"+ id , {} ,{"headers": {
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
        if(this.props.Usuario !== ""){
            let j;
            for(let i = 0 ; i < this.props.Usuarios.length ; i++){
                
                if(this.props.Usuario=== this.props.Usuarios[i].nombre){
                    j = i;
                }
            }
            if(this.props.Usuarios[j]!=null){
                return (       
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Usuario {this.props.Usuarios[j].nombre}
                          </div>
                            <ul className="list-group list-group-flush">
                                <DatoTabla contenido = {"Nombre"} contenido2={this.props.Usuarios[j].nombre}/>
                                <DatoTabla contenido = {"Apellido"} contenido2={this.props.Usuarios[j].apellido}/>
                                <DatoTabla contenido = {"Rut"} contenido2={this.props.Usuarios[j].rut}/>
                                <DatoTabla contenido = {"Telefono"} contenido2={this.props.Usuarios[j].telefono}/>
                                <DatoTabla contenido = {"Correo"} contenido2={this.props.Usuarios[j].correo}/>
                                <DatoTabla contenido = {"Rol"} contenido2={this.props.Usuarios[j].rol}/>
                            </ul>
                        </div>
                        <div className="row g-2 mt-5 mb-4">
                            <div className="col-6 text-center">
                                <button type="button" className="btn btn-primary rounded-pill ancho3" value={true} onClick={this.props.change} >
                                    Editar Usuario 
                                </button>
                            </div>
                            <div className="col-6 text-center">
                                <button type="button" className="btn btn-danger rounded-pill ancho3" onClick={this.handleShow}>
                                    Eliminar Usuario
                                </button>
                                <Modal show={this.state.show} onHide={this.handleClose} >
                                    <Modal.Header closeButton>
                                      <Modal.Title className="text-danger"> Eliminar Usuario</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>Estas apunto de eliminar el siguiente Usuario ¿Estas Seguro? </div>
                                        <h5 className="separacion text-center text-danger" > {this.props.Usuarios[j].nombre}</h5>                       
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                      <button type="button" class="btn btn-danger" onClick={this.delete(this.props.Usuarios[j].id)} >Eliminar Usuario</button>
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