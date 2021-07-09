import React, { Component } from 'react'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-bootstrap/Modal'
import Estado from '.././Pedido_Componentes/Estado'


export default class Requisitos extends Component {

    state = {
      fecha1: null,
      fecha2: null,
      archivos: null,
      show: false,
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

    onChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })      
    }

    onSubmit = async e => {
      e.preventDefault();
      if(
        this.state.fecha1 !== null &&
        this.state.fecha2 !== null &&
        //this.state.archivos !== null &&
        this.state.fecha1 !== "" &&
        this.state.fecha2 !== "" //&&
        //this.state.archivos !== ""
      ){
        const Requisitos = {
          fecha_salida: this.state.fecha1,
          fecha_llegada_estimada: this.state.fecha2,
          //archivos: this.state.archivos,
          estado: "internacional"
        }

        const res = await axios.put("/pedidos/"+this.props.id, Requisitos,{
          headers: {
            "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
          }
        })
          if(res.data.resultado==true){
            toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }else{
          toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }
      }else{    
          toast.warn("Debes ingresar correctamente todos los datos, intenta nuevamente", {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }  
        this.setState({
          show:false
        })    
      }
    
      
    

    render() {
        return (
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="container separacion">
                <h3 className="container ml-3 text-primary separacion">Requisitos</h3>
                <div className="container">
                  <div className="row">                          
                    <div className="col-1"/>
                    <div className="col-10 card mt-4">
                      <div className="row separacion">
                        <div className="input-group  separacion">  
                          <div className="col-2"/>
                          <div className="col-3">
                              <div className="input-group-prepend ancho2">
                                  <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Fecha Salida</span>
                              </div>
                          </div>
                          <div className="col-5">
                              <input 
                              type="date" 
                              name="fecha1"
                              className="form-control" 
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.fecha1}
                              />
                          </div>
                          
                        </div>  
                        <div className="input-group separacion">
                        <div className="col-2"/>
                          <div className="col-3">
                              <div className="input-group-prepend ancho2">
                                  <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Fecha Estimada de Arribo</span>
                              </div>
                          </div>
                          <div className="col-5">
                              <input 
                              type="date" 
                              name="fecha2"
                              className="form-control" 
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.fecha2}
                              />
                          </div>                      
                        </div>  
                        <div className="input-group separacion ">    
                          <div className="col-2"/>
                          <div className="col-2">
                            <label for="formFileMultiple" className="form-label">Documentos</label>
                          </div>
                          <div className="col-8">
                            <input className="ancho ml-4" type="file" id="formFileMultiple" onChange={this.onChange} name="archivos" value={this.state.archivos} multiple />
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="col-1"/>
                  </div>
                </div>
              </div>
              <button className="btn color_sitio2 ancho" type ="button"onClick={this.handleShow}>
                Cambiar Estado
              </button>
              <Modal show={this.state.show} onHide={this.handleClose} >
                  <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Cambio de estado</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <div className="text-center">Estas apunto de cambiar el estado del pedido: <span className="text-primary">{this.props.codigo} </span>  </div>   
                      <Estado nombre="Estado Actual" contenido="En Producción" />
                      <Estado nombre="Proximo Estado" contenido="En Tránsito (Internacional)" />
                      <div className="col-12 mb-5"></div>
                      <div className="mb-3 text-center"> ¿Estas Seguro que los datos ingresados son correctos? </div>  
                  </Modal.Body>
                  <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                    <button type="button" className="btn btn-danger" onClick={this.onSubmit} >Guardar Pedido</button>
                  </Modal.Footer>
              </Modal>  
            </form>
          </div>
        )
    }
}
