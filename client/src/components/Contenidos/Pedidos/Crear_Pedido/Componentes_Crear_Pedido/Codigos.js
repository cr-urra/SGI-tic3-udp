import React, { Component } from 'react'
import Codigo from './Codigo'


export default class Codigos extends Component {
    render() {     
            return this.props.codigos.slice(0,5).map(codigo => <Codigo codigo={codigo} key={codigo.codigo}/>) 
    }
}