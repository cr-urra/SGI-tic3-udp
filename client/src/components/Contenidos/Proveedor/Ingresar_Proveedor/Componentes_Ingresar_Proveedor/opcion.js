import React, { Component } from 'react'


export default class Listado extends Component {
    render() {
        
        return (       
            <option value={this.props.moneda.id}>{this.props.moneda.pais + "-" + this.props.moneda.moneda}</option>
        )
    }
}