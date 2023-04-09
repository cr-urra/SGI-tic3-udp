import React, { Component } from 'react'
import Pedidos from './Pedidos'

export default class Init extends Component {
    render() {
      if(this.props.fecha1 === null){       
        if(this.props.fecha2 === null){
          return <Pedidos Pedidos = {this.props.Pedidos}/>
        }else{
          return <div>
              <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega <= this.props.fecha2)}/>
          </div>     
        }        
      }else{
        if(this.props.fecha2 === null){
          return <div>
              <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega >= this.props.fecha1)}/>             
          </div>           
        }else{
         return <div>
            <Pedidos Pedidos={this.props.Pedidos.filter(pedido => pedido.fecha_entrega <= this.props.fecha2).filter(pedido => pedido.fecha_entrega >= this.props.fecha1)} /> 
          </div>    
        }
      }                            
    }
}
