import React, { Component } from 'react'


export default class Listado extends Component {
    render() {
        
        return (       
            <option value={this.props.AgenteAduana.nombre}>{this.props.AgenteAduana.nombre}</option>
        )
    }
}