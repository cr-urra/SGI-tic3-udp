import React, { Component } from 'react'
import Precio from './Precio'

export default class Precios extends Component {
  render() {
    return this.props.precios.map(precio => <Precio precio={precio} producto={this.props.producto}key={precio.id}/> )
  }
}
