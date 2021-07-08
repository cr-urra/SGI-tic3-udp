import React, { Component } from 'react'
import Datos from './Datos'

export default class Tipo_Pago extends Component {
    render() {
      if(this.props.datos.tipo_transporte==="1"){
        return(     
          <div className="container row padding">
            <div className="col-6 mb-4 ">                      
                <Datos nombre={'Tipo de Transporte'} contenido={"CIF"}/>
            </div>
            <div className="col-6 mb-4 "> 
                <Datos nombre={'Pago Transporte'} contenido={this.props.datos.pago_transporte}/>          
            </div>
          </div>             
        )
      }else if(this.props.datos.tipo_transporte==="2"){
        return(
          <div className="container row padding">
            <div className="col-6 mb-4">
              <Datos nombre={'Tipo de Transporte'} contenido={"FOB"}/>
            </div>
            <div className="col-6 mb-4 "/>
            <div className="col-6 mb-4 ">
              <Datos nombre={'Pago Transporte'} contenido={this.props.datos.pago_transporte}/>
            </div>
            <div className="col-6 mb-4 ">
              <Datos nombre={'Pago Seguro'} contenido={this.props.datos.pedido.seguro}/>
            </div>
          </div>
        )
      }else{
        return <div/>
      }
    }
}
