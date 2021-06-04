import React, { Component } from 'react'

export default class Producto extends Component {
    render() {
        return (
          <tr>
            <td scope="col">{this.props.codigo}</td>
            <td scope="col">{this.props.peso}</td>
            <td scope="col">{this.props.costo}</td>
            <td scope="col">{this.props.total}</td>
          </tr>  
        )
    }
}
