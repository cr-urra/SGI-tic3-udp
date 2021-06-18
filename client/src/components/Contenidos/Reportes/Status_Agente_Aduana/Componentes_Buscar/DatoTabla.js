import React, { Component } from 'react'



export default class Tabla extends Component {
    
    render() {

            return (                  
                <tr>                       
                  <td>{this.props.cuenta_corriente.id_pedido}</td>
                  <td>{this.props.cuenta_corriente.fecha}</td>
                  <td>{this.props.cuenta_corriente.debe}</td>
                  <td>{this.props.cuenta_corriente.haber}</td>
                  <td>{this.props.cuenta_corriente.descripcion}</td>
                </tr>
            )        
    }
}