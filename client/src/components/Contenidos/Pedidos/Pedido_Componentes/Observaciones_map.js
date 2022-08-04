import React, { Component } from 'react'
import Observacion from './Observacion'

//<Observacion fecha={"Fecha D"} descripcion={"Descripcion D"}/>


export default class Observaciones extends Component {
    componentDidMount = () => {
      console.log(this.props.observaciones);
    }

    render() {
      if(this.props.observaciones!==null){
        return this.props.observaciones.filter(observacion =>  observacion.gasto === 0).map(observacion => <Observacion gasto ={observacion.gasto} fecha={observacion.fecha} descripcion={observacion.observacion} key={observacion.id}/>)
      }else{
        return <div/>
      }
        
    }
}
