import React, { Component } from 'react'
import Head_Card from '../Pedido_Componentes/Head_Card'
import Costos from '../Pedido_Componentes/Costos'
import Datos_Produccion from '../Pedido_Componentes/Datos_Produccion'
import Observaciones from '../Pedido_Componentes/Observaciones'
import Gastos from '../Pedido_Componentes/Gastos'
import Crear_Observacion from '../Pedido_Componentes/Crear_Observacion'
import Estados from '../Pedido_Componentes/Estados'
import Requisitos from './Requisistos'
import Tipo_Pago from '../Editar_Pedidos/Tipo_pago'
import Transporte from '../Editar_Pedidos/Transporte'
import Datos from '../Editar_Pedidos/Datos'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-bootstrap/Modal'


export default class Init extends Component {

    state = {
      costos: 0,
      observaciones: null,
      editar: false,
      
      tipo_pago: null,
      fecha_vencimiento: null,   
      fecha_entrega: null,
      pago_inicial: null,
      cambio_pago_inicial: null,
      tipo_transporte: null,
      pago_transporte: null,
      pago_seguro: null,

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

    editar = () =>{
      this.setState({
        editar: !this.state.editar
      })
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
      if(this.state.editar===true){
        return (
          <main className="content">
              <h1 className="display-5 titulo">Editar Pedido en Producción</h1>             
              <div className="container separacion">           
                <div className="card border-primary mb-5 shadow-lg">
      
                  <Head_Card codigo={this.props.auxiliar.pedido.pedido.codigo} proveedor={this.props.auxiliar.pedido.proveedor} editar = {this.editar}/>
                  
                  <div className="container separacion">
                    <Tipo_Pago pedido = {this.props.auxiliar.pedido} onChange={this.onChange} state = {this.state}/>   

                    <Transporte pedido = {this.props.auxiliar.pedido} onChange={this.onChange} state = {this.state} />

                    <div className="row padding">
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"pago_inicial"} name2={this.state.pago_inicial} nombre={'Pago Inicial'} contenido={this.props.auxiliar.pedido.pago_inicial}/>          
                      </div>
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"cambio_pago_inicial"} name2={this.state.cambio_pago_inicial} nombre={'Valor del Cambio'}  contenido={this.props.auxiliar.pedido.pedido.historial_dolars[0].detalles_dolar.precio_compra}/>          
                      </div>
                    </div>                                    
                  </div> 
                  <button className="btn color_sitio2 ancho" type ="button"onClick={this.handleShow}>
                    Editar Pedido
                  </button>
                  <Modal show={this.state.show} onHide={this.handleClose} >
                      <Modal.Header closeButton>
                        <Modal.Title className="text-primary">Editar Pedido</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <div className="mb-3 text-center"> Estas apunto de editar el pedido de código: </div>  
                            <h5 className="mb-3 text-center text-danger" >{this.props.auxiliar.pedido.pedido.codigo}</h5>  
                          <div className="mb-3 text-center"> ¿Estas Seguro que los datos ingresados son correctos? </div>  
                      </Modal.Body>
                      <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                        <button type="button" className="btn color_sitio2" onClick={this.onSubmit} >Guardar Pedido</button>
                      </Modal.Footer>
                  </Modal> 
                </div>
              </div> 
          </main>
        )
      }else{
        return (
          <main className="content">
              <h1 className="display-5 titulo">Pedido en Producción</h1>             
              <div className="container separacion">           
                <div className="card border-primary mb-5 shadow-lg">
      
                  <Head_Card codigo={this.props.auxiliar.pedido.pedido.codigo} proveedor={this.props.auxiliar.pedido.proveedor} editar = {this.editar}/>
      
                  <div className="container separacion">
                    <Costos nombre={"Costos Productos"} n_costo={"Costo del Pedido Inicial"} cuenta = {this.state.costos} productos={this.props.auxiliar.pedido.productos} />
                    <Costos nombre={"Costos Acumulados"} n_costo={"Costo Total Actual"} cuenta ={this.state.costos} productos={this.props.auxiliar.pedido.productos} />
                  </div>
      
                  <Datos_Produccion pedido={this.props.auxiliar.pedido} pago={this.props.auxiliar.pedido.tipo_pago} fecha={this.props.auxiliar.pedido.fecha_entrega} transporte={this.props.auxiliar.pedido.tipo_transporte} pago_inicial={this.props.auxiliar.pedido.pago_inicial} cambio={"Falta conectar"} /> 
      
                  <Observaciones observaciones={this.state.observaciones} />
      
                  <Gastos observaciones={this.state.observaciones}/>
      
                  <Crear_Observacion id ={this.props.auxiliar.pedido.pedido.id} pedido={this.props.auxiliar.pedido} cambio={this.cambio}/>
      
                  <Estados contenido1={"En Producción"} contenido2={"En Tránsito (Internacional)"}/>
                  
                  <Requisitos id= {this.props.auxiliar.pedido.pedido.id} codigo={this.props.auxiliar.pedido.pedido.codigo}/>                    
      
                </div>
              </div> 
          </main>
        )
      }  
    }
}
