import React, { Component } from 'react'

export default class Lista extends Component {
    render() {
        
        return (
            <li className="list-group-item">
                <div className="row g-2 mt-2 mb-2">
                    <div className="col-4">
                      <div >{this.props.nombre}</div>
                    </div>
                    <div className="col-8">
                      <div >{this.props.contenido}</div>
                    </div>
                </div>
            </li>
        )
        
    }
}