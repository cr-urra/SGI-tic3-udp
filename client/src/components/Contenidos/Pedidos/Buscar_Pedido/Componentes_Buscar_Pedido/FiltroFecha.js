import React, { Component } from 'react'
import Pedidos from './Pedidos'
import Fecha from './Fecha_Doble'
/*
  filtro 22-04-2022

   20-02-2020

   20-02-2021

   28-02-2022
   21-03-2022
   22-04-2022 -- corte
   18-05-2022

*/


export default class Init extends Component {

    state = {
      Pedidos: []
    }

    changeState = (e) =>{
      let aux = this.state.Pedidos      
      this.setState({
        Pedidos: [...aux,e]
      })
    }

    change = () =>{
      this.changeState(this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año < this.props.fecha2.año))
      this.changeState(this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha2.año && pedido.fecha_entrega.mes < this.props.fecha2.mes))
      this.changeState(this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha2.año && pedido.fecha_entrega.mes === this.props.fecha2.mes && pedido.fecha_entrega.dia <= this.props.fecha2.dia))
    }

    render() {
      if(this.props.fecha1.dia===null){
        {console.log(this.state.Pedidos)}
        
        if(this.props.fecha2.dia===null){
          return <Pedidos Pedidos = {this.props.Pedidos}/>
        }else{
          return <div>
                {this.change()}
                <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año < this.props.fecha2.año)}/>
                <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha2.año && pedido.fecha_entrega.mes < this.props.fecha2.mes)}/>
                <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha2.año && pedido.fecha_entrega.mes === this.props.fecha2.mes && pedido.fecha_entrega.dia <= this.props.fecha2.dia)}/>
                
                </div> 
                
        }        
      }else{
        if(this.props.fecha2.dia===null){
          return <div>
                <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha1.año && pedido.fecha_entrega.mes === this.props.fecha1.mes && pedido.fecha_entrega.dia >= this.props.fecha1.dia)}/>
                <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha1.año && pedido.fecha_entrega.mes > this.props.fecha1.mes)}/>                
                <Pedidos Pedidos = {this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año > this.props.fecha1.año)}/>
              </div>           
        }else{
         return <div>
           
        <Fecha 
          Pedido1={this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año < this.props.fecha2.año)} 
          Pedido2={this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha2.año && pedido.fecha_entrega.mes < this.props.fecha2.mes)}
          Pedido3={this.props.Pedidos.filter(pedido => pedido.fecha_entrega.año === this.props.fecha2.año && pedido.fecha_entrega.mes === this.props.fecha2.mes && pedido.fecha_entrega.dia <= this.props.fecha2.dia)}
          fecha={this.props.fecha1}
        />    
          
       </div>    
        }
      }                            
    }
}
