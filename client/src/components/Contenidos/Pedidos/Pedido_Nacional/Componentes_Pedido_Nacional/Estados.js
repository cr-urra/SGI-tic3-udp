import React, { Component } from 'react'
import Estado from './Estado'

export default class Estados extends Component {
    render() {
        return (
          <div className="container">
            <div className="row separacion">
              <div className="col-2"/>
              <div className="col-8">
                < div className=" card shadow-lg borde_estado">
                  <div className="col-12 mt-3 ">
                    <h5 className="mt-3 text-center"> Estado del Pedido</h5>
                  </div>
                  <Estado nombre={"Estado Actual"} contenido={this.props.contenido1}/>
                  <Estado nombre={"Proximo Estado"} contenido={this.props.contenido2}/>
                  <div className="col-12 separacion"/>
                </ div>
              </div>
              <div className="col-2"/>
            </div>
          </div>
        )
    }
}
