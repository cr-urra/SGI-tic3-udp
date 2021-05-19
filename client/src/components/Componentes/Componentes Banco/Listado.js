import React, { Component } from 'react'
import Opciones from './opciones'



export default class Listado extends Component {
    render() {
        
        return (
            <div className="container" >
                <div className="input-group no_flex">
                  <label className="input-group-text " for="inputGroupSelect01">Buscar un Banco</label>
                  <select className="form-select ancho" id="inputGroupSelect01" value = {this.props.banco} onChange={this.props.onChangeBanco} >
                    <option defaultValue>Elegir un Banco Aquí...</option>
                    <Opciones bancos = {this.props.bancos}/>
                  </select>
                </div>
            </div>
        )
        
    }
}