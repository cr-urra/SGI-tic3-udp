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
import Tipo_Pago from '../Editar_Pedidos/Tipo_pago'
import Transporte from '../Editar_Pedidos/Transporte'
import Datos from '../Editar_Pedidos/Datos'

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
      show: false,
      editar: false,

      tipo_pago: null,
      fecha_vencimiento: null,   
      fecha_entrega: null,
      pago_inicial: null,
      cambio_pago_inicial: null,
      tipo_transporte: null,
      pago_transporte: null,
      pago_seguro: null,
      fecha_salida: null,
      fecha_estimada_arribo: null,
      pago_final: null,
      cambio_pago_final: null,
      abono: null,
      din: null,
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
              <h1 className="display-5 titulo">Editar Pedido en Tránsito Nacional</h1>               
              <div className="container separacion">           
                <div className="card border-primary mb-5 shadow-lg">
      
                  <Head_Card codigo={this.props.auxiliar.pedido.pedido.codigo} proveedor={this.props.auxiliar.pedido.proveedor} editar = {this.editar}/>
                  
                  <div className="container separacion">
                    <Tipo_Pago pedido = {this.props.auxiliar.pedido} onChange={this.onChange} state = {this.state}/>   

                    <Transporte pedido = {this.props.auxiliar.pedido} onChange={this.onChange} state = {this.state} />
                    {console.log(this.props.auxiliar,"gola guapo")}
                    <div className="row padding">
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"pago_inicial"} name2={this.state.pago_inicial} nombre={'Pago Inicial'} contenido={this.props.auxiliar.pedido.pago_inicial}/>          
                      </div>
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"cambio_pago_inicial"} name2={this.state.cambio_pago_inicial} nombre={'Valor del Cambio'}  contenido={this.props.auxiliar.pedido.pedido.historial_dolars[0].detalles_dolar.precio_compra}/>          
                      </div>
                      {/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/}
                      <div className="col-6 mb-4">
                        <Datos tipo = "date" onChange={this.onChange} name={"fecha_salida"} name2={this.state.fecha_salida} nombre={'Fecha de Salida'} contenido={this.props.auxiliar.pedido.pedido.fecha_salida}/>          
                      </div>
                      <div className="col-6 mb-4">
                        <Datos tipo = "date" onChange={this.onChange} name={"fecha_estimada_arribo"} name2={this.state.fecha_estimada_arribo} nombre={'Fecha Estimada Arribo'}  contenido={this.props.auxiliar.pedido.pedido.fecha_llegada_estimada}/>          
                      </div>
                      {/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5*/}
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"pago_final"} name2={this.state.pago_final} nombre={'Pago Final'} contenido={this.props.auxiliar.pedido.pedido.pago_final}/>          
                      </div>
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"cambio_pago_final"} name2={this.state.cambio_pago_final} nombre={'Valor del Cambio'}  contenido={this.props.auxiliar.pedido.pedido.historial_dolars[1].detalles_dolar.precio_compra}/>          
                      </div>
                      <div className="col-6 mb-4">
                      <div className="input-group">
                        <div className="input-group-prepend ">
                            <span className="input-group-text " id="inputGroup-sizing-default">{"Agente de Aduana"}</span>
                        </div>
                        <input 
                        type="text" 
                        className="form-control text-right" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        readOnly                        
                        defaultValue={this.props.auxiliar.pedido.pedido.agentes_aduana.nombre + " " + this.props.auxiliar.pedido.pedido.agentes_aduana.apellido}
                        />
                      </div>   
                      </div>
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"abono"} name2={this.state.abono} nombre={'Abono'}  contenido={"0000000"}/>          
                      </div>
                      <div className="col-6 mb-4">
                        <Datos tipo = "number" onChange={this.onChange} name={"din"} name2={this.state.din} nombre={'DIN'}  contenido={this.props.auxiliar.pedido.pedido.numero_din}/>          
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
                <h1 className="display-5 titulo">Pedido en Tránsito Nacional</h1>             
                <div className="container separacion">           
                  <div className="card border-primary mb-5 shadow-lg">

                  <Head_Card codigo={this.props.auxiliar.pedido.pedido.codigo} proveedor={this.props.auxiliar.pedido.proveedor} editar = {this.editar}/>

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

                    <Estados contenido1={"En Tránsito (Nacional)"} contenido2={"Finalizado"}/>


                    <button className="btn color_sitio2 ancho" type ="button"onClick={this.handleShow}>
                      Cambiar Estado
                    </button>
                    <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                          <Modal.Title className="text-danger">Cambio de estado</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="text-center">Estas apunto de cambiar el estado del pedido: <span className="text-primary">{this.props.codigo} </span>  </div>   
                            <Estado nombre="Estado Actual" contenido={"En Tránsito (Nacional)"} />
                            <Estado nombre="Proximo Estado" contenido={"Finalizado"} />
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
}
