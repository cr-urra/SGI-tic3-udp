import React, { Component } from 'react'
import Head_Card from '../Pedido_Componentes/Head_Card'
import Costos from '../Pedido_Componentes/Costos'
import Datos_Produccion from '../Pedido_Componentes/Datos_Produccion'
import Observaciones from '../Pedido_Componentes/Observaciones'
import Gastos from '../Pedido_Componentes/Gastos'
import Crear_Observacion from '../Pedido_Componentes/Crear_Observacion'
import Estados from '../Pedido_Componentes/Estados'
import Requisitos from './Requisistos'
import Datos_Internacional from '../Pedido_Componentes/Datos_Internacional'
import Datos_Ingreso from '../Pedido_Componentes/Datos_Ingreso'


export default class Init extends Component {

    state = {
      costos: 0,
      observaciones: null
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
                <h1 className="display-5 titulo">Pedido en Proceso de Ingresar a Aduana</h1>             
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
