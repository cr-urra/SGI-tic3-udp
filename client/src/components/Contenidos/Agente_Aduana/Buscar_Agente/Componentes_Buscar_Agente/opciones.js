import React, { Component } from 'react'
import Opcion from './opcion'


export default class Opciones extends Component {
    render() {     
            return this.props.AgentesAduana.slice(0,5).map(AgenteAduana => <Opcion AgenteAduana={AgenteAduana} key={AgenteAduana.nombre}/>) 
    }
}