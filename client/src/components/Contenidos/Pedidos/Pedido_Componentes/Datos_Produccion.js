import React, { Component } from 'react'
import Datos from './Datos'
import Transporte from './Transporte'
import Tipo_pago from './Tipo_pago'

export default class Datos_Produccion extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <Tipo_pago datos= {this.props.pedido}  />
              
              <Transporte datos = {this.props.pedido} />
              
              <div className="col-6 mb-4">
                <Datos nombre={'Pago Inicial'} contenido={this.props.pago_inicial}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Valor del Cambio'} contenido={this.props.pedido.pedido.historial_dolars[0].detalles_dolar.precio_compra}/>
              </div>
            </div>
          </div>
        )
    }
}
