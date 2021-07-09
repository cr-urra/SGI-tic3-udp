import React, { Component } from 'react'
import Agente from './Agente'


export default class Codigos extends Component {
    render() {     
            return this.props.Agentes.map(agente => <Agente agente={agente} key={agente.id}/>) 
    }
}