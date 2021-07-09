import React, { Component } from 'react'
import Datos from './Datos'

export default class Datos_Internacional extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-6 mb-4">
                <Datos nombre={'Fecha de Salida'} contenido={this.props.pedido.pedido.fecha_salida}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Fecha Estimada Arribo'} contenido={this.props.pedido.pedido.fecha_llegada_estimada}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Archivos Adjuntos'} contenido={this.props.adjuntos}/>
              </div>
              
            </div>
          </div>
        )
    }
}
