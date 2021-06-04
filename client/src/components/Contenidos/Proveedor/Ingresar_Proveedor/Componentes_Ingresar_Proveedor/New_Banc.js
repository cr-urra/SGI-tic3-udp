import React, { Component } from 'react'
import Dato from './Dato'


export default class New_Banc extends Component {
    state ={
      check: false
    }

    onChangeCheck = () =>{
      this.setState(prevState =>({
        check: !prevState.show
      }))
    }

    render() {
      return (
        <div>
          <div className="row separacion">
              <Dato nombre={"Cuenta Corriente / IBAN"} />
              <Dato nombre={"País"} />
              <Dato nombre={"N° ABA"} />
              <Dato nombre={"Referencia"} />
              <Dato nombre={"Banco Beneficiario"} />
              <Dato nombre={"Referencia"} />
              <Dato nombre={"Código SWIFT"} />
              <Dato nombre={"Código IFCS"} />
              <Dato nombre={"Cuenta Interbancaria"} />
              <Dato nombre={"Banco Intermediario"} />
              
          </div>
          <button className="btn color_sitio2 separacion">
              Agregar Proveedor
          </button>   
        </div> 
      )
    }
}
