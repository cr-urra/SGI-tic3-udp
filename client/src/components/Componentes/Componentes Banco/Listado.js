import React, { Component } from 'react'
import Opciones from './opciones'



export default class Listado extends Component {
    render() {
        
        return (
            <div className="container" >
                <div className="input-group no_flex">
                  <label className="input-group-text " for="inputGroupSelect01">Buscar un Banco</label>
                  <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco} ></input>
                  <datalist id="datalistOptions">
                    <Opciones bancos = {this.props.bancos}/>
                  </datalist>
                </div>
            </div>
        )
        
    }
}