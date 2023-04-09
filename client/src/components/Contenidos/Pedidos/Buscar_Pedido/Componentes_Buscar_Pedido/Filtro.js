import React, { Component } from 'react'
import Busqueda_Fecha from './Busqueda_Fecha'
import Busqueda_Producto from './Busqueda_Producto'
import Busqueda_Estado from './Busqueda_Estado'

export default class Init extends Component {
    render() {
        if(this.props.eleccion==="fecha"){
          return <Busqueda_Fecha/>
        }else if(this.props.eleccion==="producto"){
          return <Busqueda_Producto />
        }else if(this.props.eleccion==="estado"){
          return <Busqueda_Estado />
        }else{
          return <div/>
        }
    }
}
