import React, { Component } from 'react'
import Datos from './Datos'

export default class Datos_Nacional extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-6 mb-4">
                <Datos nombre={'Cobro de IVA'} contenido={this.props.iva}/>
              </div>
              <div className="col-6 mb-4">
                <Datos nombre={'Valor Dólar Aduana'} contenido={this.props.dolar_aduana}/>
              </div>              
            </div>
          </div>
        )
    }
}
