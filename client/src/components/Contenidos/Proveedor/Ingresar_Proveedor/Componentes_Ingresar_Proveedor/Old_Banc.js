import React, { Component } from 'react'


export default class Old_Banc extends Component {
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
        <button className="btn color_sitio2 separacion">
            Agregar Proveedor
        </button>     
      )
    }
}
