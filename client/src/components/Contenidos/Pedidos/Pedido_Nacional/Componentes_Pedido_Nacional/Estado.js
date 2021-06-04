import React, { Component } from 'react'


export default class Estado extends Component {
    render() {
        return (
          <div className="container separacion">
            <div className="row">
              <div className="col-4 mt-5 text-center">
                <h5 className="mt-2">{this.props.nombre} </h5>
              </div>
              <div className="col-8 mt-5">
                <input 
                  type="text" 
                  name="cuenta_corriente"
                  className="form-control text-center" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"
                  readOnly
                  value={this.props.contenido}
                  />
              </div>
            </div>
          </div>
        )
    }
}
