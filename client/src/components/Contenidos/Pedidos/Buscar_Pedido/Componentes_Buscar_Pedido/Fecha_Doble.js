import React, { Component } from 'react'
import Pedidos from './Pedidos'



export default class Init extends Component {

  state = {
   Pedidos: [...this.props.Pedido1,...this.props.Pedido2,...this.props.Pedido3] 
  }



  render() {
    return(
      <div>            
        <Pedidos Pedidos = {this.state.Pedidos.filter(pedido => pedido.fecha_entrega.año == this.props.fecha.año && pedido.fecha_entrega.mes == this.props.fecha.mes && pedido.fecha_entrega.dia >= this.props.fecha.dia)}/>
        <Pedidos Pedidos = {this.state.Pedidos.filter(pedido => pedido.fecha_entrega.año == this.props.fecha.año && pedido.fecha_entrega.mes > this.props.fecha.mes)}/>                
        <Pedidos Pedidos = {this.state.Pedidos.filter(pedido => pedido.fecha_entrega.año > this.props.fecha.año)}/>
      </div>
    )
  }       
}

