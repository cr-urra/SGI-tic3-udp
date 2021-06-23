import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';


export default class Init extends Component {
    render() {
        return (            
          <tr>            
            <td scope="col">{this.props.producto.codigo}</td>
            <td scope="col">{this.props.producto.kilo}</td>
            <td scope="col">{this.props.producto.precio}</td>
            <td scope="col">{this.props.producto.kilo*this.props.producto.precio}</td>
          </tr>                             
        )
    }
}
