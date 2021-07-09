import React, { Component } from 'react'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-bootstrap/Modal'
import Estado from '.././Pedido_Componentes/Estado'

export default class Init extends Component {

    state = {
      iva: null,
      dolar: null,
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

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })      
    }

    onSubmit = async e => {
      e.preventDefault();
      if(
        this.state.iva !== null &&
        this.state.dolar !== null &&
        this.state.iva !== "" &&
        this.state.dolar !== ""
      ){
      
       /* const Requisitos = {
          iva: this.state.iva,
          dolar: this.state.dolar,
         
        } */
        axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token')   

        const Requisitos = { 
          estado: "nacional"
        }
        const res = await axios.put("/pedidos/"+this.props.id, Requisitos,{
          headers: {
            "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
          }
        })
        const A_pago = {
          haber: this.state.iva
        }

        const res3 = await axios.put("/cuentasCorrientes/agentesAduana/"+this.state.agente,A_pago,{
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
      }

    render() {    
        return (
          <div>.
            <form onSubmit={this.onSubmit}>
              <div className="container separacion">
                <h5 className="container ml-3">Requisitos</h5>
                <div className="container">
                  <div className="row">                          
                    <div className="col-1"/>
                    <div className="col-10 card mt-4">
                      <div className="row">
                        <div className="col-12 separacion"/>
                        <div className="col-1"/>
                        <div className="col-3">
                            <span className="input-group-text ancho2 " id="inputGroup-sizing-default">Cobro IVA</span>
                        </div>
                        <input 
                        type="text" 
                        name="iva"
                        className="form-control text-right col-6" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        value={this.state.iva}
                        onChange={this.onChange}
                        />
                        <div className="col-2"/>
                        <div className="col-12 separacion"/>
                        <div className="col-1"/>
                        <div className="col-3">
                            <span className="input-group-text ancho2 " id="inputGroup-sizing-default">Valor Dolar Aduana</span>
                        </div>
                        <input 
                        type="text" 
                        name="dolar"
                        className="form-control text-right col-6" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        value={this.state.dolar}
                        onChange={this.onChange}
                        />
                        <div className="col-2"/>
                        <div className="col-12 separacion"/>
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
                      <Estado nombre="Estado Actual" contenido="Ingreso al País" />
                      <Estado nombre="Proximo Estado" contenido="En Tránsito (Nacional)" />
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
