import React, { Component } from 'react'
import Opciones from './opciones'



export default class Listado extends Component {


    render() {
        return (
            <div className="container" >
                <div className="input-group no_flex mt-3 ml-3">
                  <label className="input-group-text " for="inputGroupSelect2">Agente de Aduana</label>
                  <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..."  value = {this.props.AgenteAduana} onChange={this.props.onChangeAgente} ></input>
                  <datalist id="datalistOptions">
                    <Opciones AgentesAduana={this.props.AgentesAduana}/>
                  </datalist>
                </div>
            </div>

        )
    }
}
