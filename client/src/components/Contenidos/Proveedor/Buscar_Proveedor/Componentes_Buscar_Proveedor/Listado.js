import React, { Component } from 'react'
import Opciones from './opciones'

export default class Listado extends Component {
    render() {
        return (
            <div className="container" >
                <div className="input-group no_flex">
                  <label className="input-group-text " for="inputGroupSelect2">Buscar un Proveedor</label>
                  <input 
                    class="form-control ancho" 
                    list="datalistOptions" 
                    id="exampleDataList" 
                    placeholder="Escribe Aquí para Buscar..."  
                    value = {this.props.proveedor} 
                    onChange={this.props.onChangeProveedor} >
                  </input>
                  <datalist id="datalistOptions">
                    <Opciones proveedoresData={this.props.proveedoresData}/>
                  </datalist>
                </div>
            </div>
        )
    }
}
