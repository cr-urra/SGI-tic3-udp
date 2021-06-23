import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Head_Card extends Component {
    render() {
        return (
          <div className="card-header">
            <div className="row mt-2">
              <div className="col-4 text-primary mt-2"> <h5 className="ml-2">Pedido: {this.props.codigo}</h5></div>
              <div className="col-4 mt-2">Proveedor: {this.props.proveedor}</div>
              <div className="col-3">
                <Link to = '/users/Buscar_Pedido'> 
                    <button className="btn color_sitio2  ">
                        Editar Pedido
                    </button>
                </Link>
              </div>
              <div className="col-1">
                <Link to = '/users/Buscar_Pedido'> 
                    <button className="btn btn-primary ancho btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                        </svg>
                    </button>
                </Link>
              </div>
            </div>
          </div> 
        )
    }
}