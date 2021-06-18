import React, { Component } from 'react'


export default class Forma_Pago extends Component {
    render() {
      if(this.props.filtro==="1"){
        return (
          <div className="row">
            <div className="col-4">
              <div className="input-group-prepend ancho2">
                  <span className="input-group-text ancho" id="inputGroup-sizing-default">Pago Transporte</span>
              </div>
            </div>
            <div className="col-8">
              <input 
              type="text" 
              name="pago_transporte"
              className="form-control" 
              aria-label="Default" 
              aria-describedby="inputGroup-sizing-default"
              onChange={this.props.onChange}
              value={this.props.pago_transporte} 
              />
            </div>              
          </div>
        )
      }else{
        return <div />
      }
        
    }
}
