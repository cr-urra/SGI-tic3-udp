import React, { Component } from 'react'


export default class Tabla extends Component {
    render() {
        return (      
            <tr>
              {console.log(this.props.AgentesAduana[0].cuenta_corriente)}
              <td>15678</td>
              <td>24/05/2021</td>
              <td>{this.props.AgentesAduana[0].cuenta_corriente[0].debe}</td>
              <td>$0</td>
              <td>Pago de Aduana</td>
            </tr>
        )
    }
}