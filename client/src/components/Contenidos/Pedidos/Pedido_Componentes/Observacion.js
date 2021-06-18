import React, { Component } from 'react'

export default class Observacion extends Component {
    render() {
      if(this.props.pago==null){
        return (
          <li class="list-group-item">
            <div className="row">
              <div className="col-4">Fecha: {this.props.fecha}</div>
              <div className="col-8">{this.props.descripcion}</div>
            </div>
          </li>     
        )
      }else{
        return (
          <li class="list-group-item">
            <div className="row">
              <div className="col-2">Fecha: {this.props.fecha}</div>
              <div className="col-5">{this.props.descripcion}</div>
              <div className="col-3">RUT: {this.props.agente}</div>
              <div className="col-2">Pago: {this.props.pago}</div>
            </div>
          </li>     
        )
      }
    }
}
