import React, { Component } from 'react'
import Opciones from './opciones'

export default class Listado extends Component {
    render() {
        return (
            <div className="container separacion" >
                <div className="input-group ">
                  <label className="input-group-text " for="inputGroupSelect2">Proveedores</label>
                  <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..."  value = {this.props.Proveedor} onChange={this.props.onChangeProveedor} ></input>
                  <datalist id="datalistOptions">
                    <Opciones Proveedores={this.props.Proveedores}/>
                  </datalist>
                </div>
            </div>
        )
    }
}
