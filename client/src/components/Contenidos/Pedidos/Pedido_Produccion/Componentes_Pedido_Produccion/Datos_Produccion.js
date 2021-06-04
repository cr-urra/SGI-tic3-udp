import React, { Component } from 'react'
import Datos from './Datos'

export default class Datos_Produccion extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-6 mb-4">
                <Datos nombre={'Forma de Pago'} contenido={this.props.pago}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Fecha Estimada de Entrega'} contenido={this.props.fecha}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Tipo de Transporte'} contenido={this.props.transporte}/>
              </div>
              <div className="col-6 mb-4"/>
              <div className="col-6 mb-4">
                <Datos nombre={'Pago Inicial'} contenido={this.props.pago_inicial}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Valor del Cambio'} contenido={this.props.cambio}/>
              </div>
            </div>
          </div>
        )
    }
}
