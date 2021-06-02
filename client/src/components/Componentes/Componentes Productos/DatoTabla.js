import React, { Component } from 'react'


export default class DatoTabla extends Component {
    render() {
        
        return (       
            <li className="list-group-item">
                <div className="row g-2 mt-2 mb-2">
                    <div className="col-4">
                      <div >{this.props.contenido}</div>
                    </div>
                    <div className="col-8">
                      <div > {this.props.contenido2}</div>
                    </div>
                </div>
            </li>
        )
    }
}