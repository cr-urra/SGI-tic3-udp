import React, { Component } from 'react'
import Pedido from './Pedido'


export default class Pedidos extends Component {
    render() {     
            return this.props.Pedidos.map(pedido => <Pedido pedido={pedido} key={pedido.n_pedido}/>)
    }
}