import React, { Component } from 'react'

export default class Precio extends Component {
    componentDidMount = () => console.log(this.props);
  render() {
    return <>
                <tr>
                    <td>{this.props.producto.codigo}</td>
                    <td>{this.props.producto.nombre}</td>
                    <td>{this.props.precio.precio}</td>
                    <td>{this.props.precio.fecha.substring(0,10)}</td>
                </tr>    
    </>
  }
}
