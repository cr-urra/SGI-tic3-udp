import React, { Component } from 'react'
import NewProduct from '../../../Productos/Ingresar_Producto/Componentes_Ingresar_Producto/Card_Form'


export default class Lista extends Component {
    render() {
      if(this.props.new===true){
        return <NewProduct />
      }else{
        return <div/>
      }      
    }
}
