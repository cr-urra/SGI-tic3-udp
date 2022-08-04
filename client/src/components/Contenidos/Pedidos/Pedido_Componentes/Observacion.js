import React, { Component } from 'react'

export default class Observacion extends Component {
    render() {
      if(this.props.gasto===0){
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
              <div className="col-3">Fecha: {this.props.fecha}</div>
              <div className="col-4">{this.props.descripcion}</div>
              <div className="col-3">RUT: {this.props.rut}</div>
              <div className="col-2">Gasto(CLP): {this.props.gasto}</div>
            </div>
          </li>     
        )
      }
    }
}
