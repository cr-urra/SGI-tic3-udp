import React, { Component } from 'react'
import Head_Card from '../Pedido_Componentes/Head_Card'
import Costos from '../Pedido_Componentes/Costos'
import Datos_Produccion from '../Pedido_Componentes/Datos_Produccion'
import Datos_Internacional from '../Pedido_Componentes/Datos_Internacional'
import Datos_Ingreso from '../Pedido_Componentes/Datos_Ingreso'
import Datos_Nacional from '../Pedido_Componentes/Datos_Nacional'
import Observaciones from '../Pedido_Componentes/Observaciones'
import Gastos from '../Pedido_Componentes/Gastos'
import Crear_Observacion from '../Pedido_Componentes/Crear_Observacion'
import Estados from '../Pedido_Componentes/Estados'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Estado from '.././Pedido_Componentes/Estado'

export default class Init extends Component {

  onSubmit = async e => {
    e.preventDefault();
    
        const Requisitos = { 
          estado: "finalizado"
        }
        const res = await axios.put("/pedidos/"+this.props.auxiliar.pedido.pedido.id, Requisitos,{
          headers: {
            "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
          }
        })
        if(res.data.resultado==true){
          toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
      }else{
        toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
      }   
    }

    state = {
      costos: 0,
      observaciones: null,
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

    componentDidMount = async () => {      
      let cuenta = 0
      for (let i =0; i < this.props.auxiliar.pedido.productos.length ; i++){
        cuenta = cuenta + this.props.auxiliar.pedido.productos[i].precio*this.props.auxiliar.pedido.productos[i].producto.cantidad
      }
      this.setState({
        costos: cuenta,
        observaciones: this.props.auxiliar.pedido.pedido.observaciones
      })
    }

    cambio = (e) =>{
      this.setState({
        observaciones: e
      })
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Pedido en Tránsito Nacional</h1>             
                <div className="container separacion">           
                  <div className="card border-primary mb-5 shadow-lg">

                    <Head_Card codigo={this.props.auxiliar.pedido.pedido.codigo} proveedor={this.props.auxiliar.pedido.proveedor} />

                    <div className="container separacion">
                      <Costos nombre={"Costos Productos"} n_costo={"Costo del Pedido Inicial"} cuenta = {this.state.costos} productos={this.props.auxiliar.pedido.productos} />
                      <Costos nombre={"Costos Acumulados"} n_costo={"Costo Total Actual"} cuenta ={this.state.costos} productos={this.props.auxiliar.pedido.productos} />
                    </div>

                    <Datos_Produccion pedido={this.props.auxiliar.pedido} pago={this.props.auxiliar.pedido.tipo_pago} fecha={this.props.auxiliar.pedido.fecha_entrega} transporte={this.props.auxiliar.pedido.tipo_transporte} pago_inicial={this.props.auxiliar.pedido.pago_inicial} cambio={"Falta conectar"} /> 

                    <Datos_Internacional pedido={this.props.auxiliar.pedido}/>

                    <Datos_Ingreso pedido={this.props.auxiliar.pedido} />

                    <Datos_Nacional pedido={this.props.auxiliar.pedido} />

                    <Observaciones observaciones={this.state.observaciones} />

                    <Gastos observaciones={this.state.observaciones}/>

                    <Crear_Observacion id ={this.props.auxiliar.pedido.pedido.id} pedido={this.props.auxiliar.pedido} cambio={this.cambio}/>

                    <Estados contenido1={"En Producción"} contenido2={"En Tránsito (Internacional)"}/>


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
                    

                  </div>
                </div> 
            </main>
        )
    }
}
