import React, { Component } from 'react'


export default class Forma_Pago extends Component {
    render() {
      if(this.props.filtro==="1"){
        return (
          <div className="row">
            <div className="col-4">
              <div className="input-group-prepend ancho2">
                  <span className="input-group-text ancho" id="inputGroup-sizing-default">Fecha de Vencimiento</span>
              </div>
            </div>
            <div className="col-8">
              <input 
              type="date" 
              name="fecha_vencimiento"
              className="form-control" 
              aria-label="Default" 
              aria-describedby="inputGroup-sizing-default"
              onChange={this.props.onChange}
              value={this.props.fecha_vencimiento} 
              />
            </div>              
          </div>
        )
      }else{
        return <div />
      }
        
    }
}
