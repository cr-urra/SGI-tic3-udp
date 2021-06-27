import React, { Component } from 'react'
import axios from 'axios'


export default class Requisitos extends Component {

    state = {
      dia1: null,
      dia2: null,
      mes1: null,
      mes2: null,
      año1: null,
      año2: null,
      archivos: null
    }

    onChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })      
    }

    onSubmit = async e => {
      e.preventDefault();
      const Requisitos = {
        fecha1: this.state.dia1 + "-" + this.state.mes1 + "-" + this.state.año1,
        fecha2: this.state.dia2 + "-" + this.state.mes2 + "-" + this.state.año2,
        archivos: this.state.archivos
      }
      console.log(Requisitos)
      const res = await axios.post("/sacate-la-url/", Requisitos)           
      alert(res.data.message) 
    }

    render() {
        return (
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="container separacion">
                <h5 className="container ml-3">Requisitos</h5>
                <div className="container">
                  <div className="row">                          
                    <div className="col-1"/>
                    <div className="col-10 card mt-4">
                      <div className="row separacion">
                        <div className="input-group  separacion">                   
                          <div className="col-3">
                              <div className="input-group-prepend ancho2">
                                  <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Fecha Salida</span>
                              </div>
                          </div>
                          <div className="col-3">
                              <input 
                              type="number" 
                              name="dia1"
                              className="form-control" 
                              placeholder="DD"
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.dia1}
                              />
                          </div>
                          <div className="col-3">
                              <input 
                              type="number" 
                              name="mes1"
                              className="form-control" 
                              placeholder="MM"
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.mes1}
                              />
                          </div>
                          <div className="col-3">
                              <input 
                              type="number" 
                              name="año1"
                              className="form-control" 
                              placeholder="AAAA"
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.año1}
                              />
                          </div>
                        </div>  
                        <div className="input-group separacion">
                          <div className="col-3">
                              <div className="input-group-prepend ancho2">
                                  <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Fecha Estimada de Arribo</span>
                              </div>
                          </div>
                          <div className="col-3">
                              <input 
                              type="number" 
                              name="dia2"
                              className="form-control" 
                              placeholder="DD"
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.dia2}
                              />
                          </div>
                          <div className="col-3">
                              <input 
                              type="number" 
                              name="mes2"
                              className="form-control" 
                              placeholder="MM"
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.mes2}
                              />
                          </div>
                          <div className="col-3">
                              <input 
                              type="number" 
                              name="año2"
                              className="form-control" 
                              placeholder="AAAA"
                              aria-label="Default" 
                              aria-describedby="inputGroup-sizing-default"
                              onChange={this.onChange}
                              value={this.state.año2}
                              />
                          </div>
                        </div>  
                        <div className="input-group separacion ">    
                          <div className="col-4">
                            <label for="formFileMultiple" class="form-label">Documentos</label>
                          </div>
                          <div className="col-8">
                            <input className="ancho ml-4" type="file" id="formFileMultiple" onChange={this.onChange} name="archivos" value={this.state.archivos} multiple />
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="col-1"/>
                  </div>
                </div>
              </div>
              <button className="btn color_sitio2 ancho" onSubmit={this.onSubmit}>
                Cambiar Estado
              </button>
            </form>
          </div>
        )
    }
}
