import React, { Component } from 'react'
import Datos from './Datos'

export default class Tipo_Pago extends Component {
    render() {
      if(this.props.pedido.tipo_transporte==="1"){
        return(     
          <div className="container row padding">
            <div className="col-6 mb-4 ">                                      
                <Datos tipo = "text" onChange={this.props.onChange} name={"tipo_transporte"} name2={this.props.state.tipo_transporte} nombre={'Tipo de Transporte'} contenido={"CIF"}/>          
            </div>
            <div className="col-6 mb-4 ">               
                <Datos tipo = "number" onChange={this.props.onChange} name={"pago_transporte"} name2={this.props.state.pago_transporte} nombre={'Pago Transporte'} contenido={this.props.pedido.pago_transporte}/>              
            </div>
          </div>             
        )
      }else if(this.props.datos.tipo_transporte==="2"){
        return(
          <div className="container row padding">
            <div className="col-6 mb-4">
            <Datos tipo = "text" onChange={this.props.onChange} name={"tipo_transporte"} name2={this.props.state.tipo_transporte} nombre={'Tipo de Transporte'} contenido={"FOB"}/>          
            </div>
            <div className="col-6 mb-4 "/>
            <div className="col-6 mb-4 ">
            <Datos tipo = "number" onChange={this.props.onChange} name={"pago_transporte"} name2={this.props.state.pago_transporte} nombre={'Pago Transporte'} contenido={this.props.pedido.pago_transporte}/>              
            </div>
            <div className="col-6 mb-4 ">
              <Datos tipo = "number" onChange={this.props.onChange} name={"pago_transporte"} name2={this.props.state.pago_transporte} nombre={'Pago Seguro'} contenido={this.props.pedido.pedido.seguro}/>              
            </div>
          </div>
        )
      }else{
        return <div/>
      }
    }
}
