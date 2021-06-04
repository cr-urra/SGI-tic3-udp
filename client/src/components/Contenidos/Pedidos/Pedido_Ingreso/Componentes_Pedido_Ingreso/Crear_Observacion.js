import React, { Component } from 'react'


export default class Crear_Observacion extends Component {
    state ={
      check: false
    }

    onChangeCheck = () =>{
      this.setState(prevState =>({
        check: !prevState.show
      }))
    }

    render() {
      return (

        <div className="container ">  
          <h5 className="ml-3"> Ingresar Observación </h5>
          <div className="container mt-3 mb-4">
            <div class="input-group">
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>  
            <div className="row">
              <div className="col-1"/>
              <div className="col-4 mt-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value={this.state.check} onChange = {this.onChangeCheck} id="flexCheckDefault"/>
                  <label class="form-check-label" for="flexCheckDefault">
                    Conlleva un Gasto la Observación
                  </label>
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className="input-group">
                  <div className="input-group-prepend ">
                      <span className="input-group-text " id="inputGroup-sizing-default">Costo</span>
                  </div>
                  <input 
                  type="text" 
                  name="cuenta_corriente"
                  className="form-control text-right" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"
                  disabled={this.state.check}
                  
                  value={""}
                  />
                </div> 
              </div>
              <div className="col-3">
                <button className="btn color_sitio2 mt-3">
                  Guardar Prioridad
                </button>
              </div>
            </div>
            
          </div>
        </div>
        
      )
    }
}
