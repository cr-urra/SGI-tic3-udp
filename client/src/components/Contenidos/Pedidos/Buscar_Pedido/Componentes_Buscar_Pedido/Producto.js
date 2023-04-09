import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

export default class Init extends Component {
    render() {
        return (            
          <tr>            
            {console.log(this.props,"este es el otro importante ojo")}
            <td scope="col">{this.props.producto.producto.producto.codigo}</td>
            <td scope="col">{this.props.producto.producto.cantidad}</td>
            <td scope="col">{this.props.producto.precio}</td>
            <td scope="col">{this.props.producto.producto.cantidad*this.props.producto.precio}</td>
          </tr>                             
        )
    }
}
