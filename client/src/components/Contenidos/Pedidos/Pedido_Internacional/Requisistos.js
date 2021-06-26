import React, { Component } from 'react'
import axios from 'axios'


export default class Init extends Component {

    state = {
      archivos: null,
      pago: null,
      cambio: null,
      agente: null,
      abono: null,
      din: null
    }

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = async e => {
      e.preventDefault();
      const Requisitos = {
        pago: this.state.pago,
        cambio: this.state.pago,
        agente: this.state.agente,
        abono: this.state.abono,
        din: this.state.din,
        archivos: this.state.archivos
      }
      console.log(Requisitos)
      const res = await axios.post("/sacate-la-url/", Requisitos)           
      alert(res.data.message) 
    }
    render() {
        return (
          <div>
            <form onSubmit={this.state.onSubmit}>
              <div className="container separacion">
                <h5 className="container ml-3">Requisitos</h5>

                  <div className="container">
                    <div className="row">                          
                      <div className="col-1"/>
                      <div className="col-10 card mt-4">
                        <div className="row separacion mt-5">
                          <div className="col-2 mt">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Pago Final</span>
                            </div>
                          </div>
                          <div className="col-4">
                            <input 
                            type="number" 
                            name="pago"
                            className="form-control" 
                            placeholder="$"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.pago} 
                            />
                          </div>   
                          <div className="col-2">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Cambio</span>
                            </div>
                          </div>
                          <div className="col-4">
                            <input 
                            type="number" 
                            name="cambio"
                            className="form-control" 
                            placeholder="$"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.cambio} 
                            />
                          </div>           
                        </div>   
                        <div className="row separacion">
                          <div className="col-2 mt">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Agente de Aduana</span>
                            </div>
                          </div>
                          <div className="col-4">
                              <select className="form-select ancho alto"   id="inputGroupSelect01" name={"agente"} value = {this.state.agente} onChange={this.onChange} >
                                <option defaultValue value="null">Escoger Agente</option>
                                <option value="1">Agente A</option>
                                <option value="2">Agente B</option>
                              </select>
                          </div>  
                          <div className="col-2">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Abono</span>
                            </div>
                          </div>
                          <div className="col-4">
                            <input 
                            type="number" 
                            name="abono"
                            className="form-control" 
                            placeholder="$"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.abono} 
                            />
                          </div>                             
                        </div> 
                        <div className="row separacion">
                          <div className="col-2">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">DIN</span>
                            </div>
                          </div>
                          <div className="col-4">
                            <input 
                            type="text" 
                            name="din"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.din} 
                            />
                          </div>                             
                        </div>   
                        <div className="input-group separacion">
                          <div className="col-1"/>
                          <div className="col-3 ">
                            <label for="formFileMultiple" class="form-label">Documentos Originales</label>
                          </div>
                          <div className="col-8">                    
                            <input className="ancho ml-4" type="file" id="formFileMultiple" onChange={this.onChange} name="archivos" value={this.state.archivos} multiple />
                          </div>
                        </div>
                      </div>
                      <div className="col-1"/>
                    </div>
                  </div>                            
              </div>

              <button className="btn color_sitio2 ancho" onClick={this.onSubmit}>
                Cambiar Estado
              </button>                    
            </form>           
          </div>
        )
    }
}
