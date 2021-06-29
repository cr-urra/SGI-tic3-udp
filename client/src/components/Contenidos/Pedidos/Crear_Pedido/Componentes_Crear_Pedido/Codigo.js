import React, { Component } from 'react'


export default class Codigo extends Component {
    render() {
      return (                      
        <option value={this.props.codigo.codigo}></option>   
      )
    }
}
