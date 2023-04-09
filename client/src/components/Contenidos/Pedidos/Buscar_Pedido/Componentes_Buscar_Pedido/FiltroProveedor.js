import React, { Component } from 'react'
import Pedidos from './Pedidos'

export default class Init extends Component {
    render() {
      if (this.props.filtro === "0"){        
        return <Pedidos Pedidos = {this.props.Pedidos} />
      } else {
        return (
          <div>            
            <Pedidos Pedidos = {this.props.Pedidos.filter((pedido) => pedido.proveedor === this.props.filtro )} />
          </div>
        )
      }       
    }
}
