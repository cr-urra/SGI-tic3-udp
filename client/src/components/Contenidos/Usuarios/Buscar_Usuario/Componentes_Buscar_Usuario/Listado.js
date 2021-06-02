import React, { Component } from 'react'
import Opciones from './opciones'



export default class Listado extends Component {


    render() {
        return (
            <div className="container" >
                <div className="input-group no_flex">
                  <label className="input-group-text " for="inputGroupSelect2">Buscar un Usuario</label>
                  <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..."  value = {this.props.Usuario} onChange={this.props.onChangeUsuario} ></input>
                  <datalist id="datalistOptions">
                    <Opciones Usuarios={this.props.Usuarios}/>
                  </datalist>
                </div>
            </div>

        )
    }
}
