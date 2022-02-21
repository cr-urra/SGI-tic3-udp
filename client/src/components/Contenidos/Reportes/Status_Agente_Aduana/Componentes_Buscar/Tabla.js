import React, { Component } from 'react'
import DatosTabla from './DatosTabla';

export default class Tabla extends Component {
    render() {
        
        return (       
            <div className="container mt-4">
                <table className="table text-center table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Id Pedido</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Debe</th>
                      <th scope="col">Haber</th>
                      <th scope="col">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <DatosTabla AgenteAduana={this.props.AgenteAduana} f_inicio={this.props.f_inicio} f_termino={this.props.f_termino}/> 
                  </tbody>
                </table>
            </div>
        )
    }
}