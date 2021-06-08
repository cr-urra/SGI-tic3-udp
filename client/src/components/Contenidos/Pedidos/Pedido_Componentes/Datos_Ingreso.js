import React, { Component } from 'react'
import Datos from './Datos'

export default class Datos_Ingreso extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-6 mb-4">
                <Datos nombre={'Pago Final'} contenido={this.props.pago}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Cambio'} contenido={this.props.cambio}/>
              </div>
              
              <div className="col-6 mb-4">
                <Datos nombre={'Agente de Aduana'} contenido={this.props.agente}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Abono'} contenido={this.props.abono}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'DIN'} contenido={this.props.din}/>
              </div>
              <div className="col-6 mb-4"/>
            </div>
          </div>
        )
    }
}
