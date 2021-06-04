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
                      <DatosTabla AgentesAduana={this.props.AgentesAduana}>
                         
                      </DatosTabla>
                      
                    <tr>
                        <td>15678</td>
                        <td>23/05/2021</td>                                        
                        <td>$0</td>
                        <td>$400.000</td>
                        <td>Pago de Aduana</td>
                    </tr>
                    <tr>
                        <td>15678</td>
                        <td>15/05/2021</td>
                        <td>$200.000</td>
                        <td>$0</td>
                        <td>Pago de Aduana</td>
                    </tr>
                    <tr>
                        <td>15678</td>
                        <td>01/05/2021</td>
                        <td>$0</td>
                        <td>$200.000</td>
                        <td>Pago de Aduana</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        )
    }
}