import React, { Component } from 'react'
import Opcion from './opcion'

export default class Opciones extends Component {
    render() {     
            return this.props.bancos.slice(0,this.props.bancos.length).map(banco => <Opcion banco={banco} key={banco.id}/>) 
    }
}