import React, { Component } from 'react'
import Opcion from './opcion'


export default class Opciones extends Component {
    render() {     
            return this.props.monedas.map(moneda => <Opcion moneda={moneda} key={moneda.id}/>)
    }
}