import React, { Component } from 'react'
import Datos from './Datos'

export default class Datos_Produccion extends Component {
    render() {
      if(this.props.pedido.tipo_pago==="1"){
        return(     
          <div className="container row padding">
            <div className="col-6 mb-4 ">                      
                <Datos tipo="text" onChange={this.props.onChange} name={"tipo_pago"} name2={this.props.state.tipo_pago} nombre={'Tipo de Pago'} contenido={"Credito"} />
            </div>
            <div className="col-6 mb-4 "> 
                <Datos tipo = "date" onChange={this.props.onChange} name={"fecha_vencimiento"} name2={this.props.state.fecha_vencimiento} nombre={'Fecha de Vencimiento'} contenido={this.props.pedido.pedido.fecha_vencimiento}/>          
            </div>
            <div className="col-6 mb-4">
                <Datos tipo = "date" onChange={this.props.onChange} name={"fecha_entrega"} name2={this.props.state.fecha_entrega} nombre={'Fecha Estimada de Entrega'} contenido={this.props.pedido.pedido.fecha_inicial}/>
              </div>
          </div>             
        )
      }else if(this.props.tipo_pago==="2"){
        return(
          <div className="container row padding">
            <div className="col-6 mb-4 ">                      
              <Datos tipo="text" onChange={this.props.onChange} name={"tipo_pago"} name2={this.props.state.tipo_pago} nombre={'Tipo de Pago'} contenido={"Transferencia"}/>
            </div>
            <div className="col-6 mb-4">
              <Datos tipo = "date" onChange={this.props.onChange} name={"fecha_entrega"} name2={this.props.state.fecha_entrega} nombre={'Fecha Estimada de Entrega'} contenido={this.props.pedido.pedido.fecha_inicial}/>
              </div>
          </div>    
        )
      }else{
        return <div/>
      }
    }
}
