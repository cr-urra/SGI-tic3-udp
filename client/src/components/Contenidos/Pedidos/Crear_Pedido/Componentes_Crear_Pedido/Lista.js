import React, { Component } from 'react'

/*
onClick={this.props.eliminar(this.props.producto[0])}
value ={this.props.producto[0]} onClick={this.props.eliminar}
*/

export default class Lista extends Component {
    render() {
      return (                      
        <tr>
          {console.log(this.props,"colo-colo")}
          <td>{this.props.producto.codigo}</td>
          <td>{this.props.producto.cantidad}</td>
          <td>{this.props.producto.max_price}</td>
          <td>{this.props.producto.total}</td>
          <td>
          <span >
            <svg   onClick={ this.props.eliminar(this.props.producto.codigo)} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-circle text-danger" viewBox="0 0 16 16" >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </span>
          </td>
        </tr>    
      )
    }
}
