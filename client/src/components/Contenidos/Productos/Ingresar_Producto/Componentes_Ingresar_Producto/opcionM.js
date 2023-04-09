import React, { Component } from 'react'

export default class Listado extends Component {
    render() {
        return (       
            <option value={this.props.medida.id}>{this.props.medida.tipo}</option>
        )
    }
}