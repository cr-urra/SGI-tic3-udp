import React, { Component } from 'react'
import Pedidos from './Pedidos'



export default class Init extends Component {


    render() {
      if(this.props.filtro==="0"){  
        {console.log(this.props,"estado")}      
        return <Pedidos Pedidos = {this.props.Pedidos} />       
      } else if(this.props.filtro==="produccion"){
        return (
          <div>            
            <Pedidos Pedidos = {this.props.Pedidos.filter((pedido) => pedido.estado === "produccion")} />
          </div>
        )
      }else if(this.props.filtro==="internacional"){
        return (
          <div>
            <Pedidos Pedidos = {this.props.Pedidos.filter((pedido) => pedido.estado === "internacional")} />
          </div>
        )
      }else if(this.props.filtro==="ingreso"){
        return (
          <div>
            <Pedidos Pedidos = {this.props.Pedidos.filter((pedido) => pedido.estado === "ingreso")} />
          </div>
        )
      }else if(this.props.filtro==="nacional"){
        return (
          <div>
            <Pedidos Pedidos = {this.props.Pedidos.filter((pedido) => pedido.estado === "nacional")} />
          </div>
        )
      }else if(this.props.filtro==="finalizado"){
        return (
          <div>
            <Pedidos Pedidos = {this.props.Pedidos.filter((pedido) => pedido.estado === "finalizado")} />
          </div>
        )
      }        
    }
}
