import React, { Component } from 'react'


export default class Lista extends Component {
    render() {
        
        return (
            <li class="list-group-item">
                <div class="row g-2 mt-2 mb-2">
                    <div class="col-4">
                      <div >{this.props.nombre}</div>
                    </div>
                    <div class="col-8">
                      <div >{this.props.contenido}</div>
                    </div>
                </div>
            </li>
        )
        
    }
}