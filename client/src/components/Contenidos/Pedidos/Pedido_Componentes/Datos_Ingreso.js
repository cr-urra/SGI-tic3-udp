import React, { Component } from 'react'
import Datos from './Datos'

export default class Datos_Ingreso extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-6 mb-4">
                <Datos nombre={'Pago Final'} contenido={this.props.pedido.pedido.pago_final}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Valor del Cambio'} contenido={this.props.pedido.pedido.historial_dolars[1].detalles_dolar.precio_compra}/>
              </div>
                
              <div className="col-6 mb-4">
                <Datos nombre={'Agente de Aduana'} contenido={this.props.pedido.pedido.agentes_aduana.nombre + " " + this.props.pedido.pedido.agentes_aduana.apellido}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Abono'} contenido={"Falta Conectar"}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'DIN'} contenido={this.props.pedido.pedido.numero_din}/>
              </div>
              <div className="col-6 mb-4"/>
            </div>
          </div>
        )
    }
}
