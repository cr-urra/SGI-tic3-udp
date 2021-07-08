import React, { Component } from 'react'
import Datos from './Datos'

export default class Datos_Produccion extends Component {
    render() {
      if(this.props.datos.tipo_pago==="1"){
        return(     
          <div className="container row padding">
            <div className="col-6 mb-4 ">                      
                <Datos nombre={'Tipo de Pago'} contenido={"Credito"}/>
            </div>
            <div className="col-6 mb-4 "> 
                <Datos nombre={'Fecha de Vencimiento'} contenido={this.props.datos.pedido.fecha_vencimiento}/>          
            </div>
            <div className="col-6 mb-4">
                <Datos nombre={'Fecha Estimada de Entrega'} contenido={this.props.datos.fecha_entrega}/>
              </div>
          </div>             
        )
      }else if(this.props.datos.tipo_pago==="2"){
        return(
          <div className="container row padding">
            <div className="col-6 mb-4 ">                      
                <Datos nombre={'Tipo de Pago'} contenido={"Transferencia"}/>
            </div>
            <div className="col-6 mb-4">
                <Datos nombre={'Fecha Estimada de Entrega'} contenido={this.props.datos.fecha_entrega}/>
              </div>
          </div>    
        )
      }else{
        return <div/>
      }
    }
}
