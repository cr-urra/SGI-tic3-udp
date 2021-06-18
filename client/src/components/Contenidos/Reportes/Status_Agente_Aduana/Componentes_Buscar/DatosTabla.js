import React, { Component } from 'react'
import DatoTabla from './DatoTabla'


export default class Tabla extends Component {
    render() {
        return  this.props.AgenteAduana.cuenta_corriente.map(cuenta_corriente => <DatoTabla f_inicio= {this.props.f_inicio} f_termino={this.props.f_termino}cuenta_corriente={cuenta_corriente} key={cuenta_corriente.id_pedido}/>) 
    }
}