import React, { Component } from 'react'

export default class Datos extends Component {
    render() {
      if(this.props.Filtro===true){
        return (
          <div className="input-group">
            <div className="input-group col-7">
              <div className="input-group-prepend ">
                  <span className="input-group-text " id="inputGroup-sizing-default">Gasto</span>
              </div>
              <input 
              type="number" 
              name="gasto"
              className="form-control text-right" 
              aria-label="Default" 
              placeholder="$ CLP"
              aria-describedby="inputGroup-sizing-default"             
              value={this.props.contenido1}
              onChange={this.props.onChange}
              />
            </div> 
            <div className="input-group col-5">
              <div className="input-group-prepend ">
                  <span className="input-group-text " id="inputGroup-sizing-default">Rut</span>
              </div>
              <input 
              type="text" 
              name="rut"
              placeholder="12345678-1"
              className="form-control text-right" 
              aria-label="Default" 
              aria-describedby="inputGroup-sizing-default"           
              value={this.props.contenido2}
              onChange={this.props.onChange}
              />
            </div>             
          </div>          
        )
      }else{
        return <div/>
      }
    }
}
