import React, { Component } from 'react'
import Opcion from './opcion'


export default class Opciones extends Component {
    render() {     
            return this.props.bancos.slice(0,5).map(banco => <Opcion banco={banco} key={banco.nombre}/>) 
    }
}