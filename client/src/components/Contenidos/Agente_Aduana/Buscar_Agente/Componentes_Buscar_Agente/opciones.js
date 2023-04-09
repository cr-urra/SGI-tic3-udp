import React, { Component } from 'react'
import Opcion from './opcion'

export default class Opciones extends Component {
    render() {     
            return this.props.AgentesAduana.map(AgenteAduana => <Opcion AgenteAduana={AgenteAduana} key={AgenteAduana.nombre}/>) 
    }
}