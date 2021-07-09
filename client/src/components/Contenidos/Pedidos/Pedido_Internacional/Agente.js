import React, { Component } from 'react'



export default class Codigo extends Component {
    render() {     
            return <option value={this.props.agente.id}>{this.props.agente.nombre} {this.props.agente.apellido}{console.log(this.props,"revisa aki")}</option>
    }
}