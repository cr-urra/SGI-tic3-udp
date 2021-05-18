import React, { Component } from 'react'


export default class Listado extends Component {
    render() {
        
        return (
            <div className="container " >
                <div class="input-group no_flex">
                  <label class="input-group-text" for="inputGroupSelect01">Buscar un Banco</label>
                  <select class="form-select ancho" id="inputGroupSelect01">
                    <option selected>Elegir un Banco Aquí...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
            </div>
        )
        
    }
}