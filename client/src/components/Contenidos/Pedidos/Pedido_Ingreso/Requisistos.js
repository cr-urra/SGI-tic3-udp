import React, { Component } from 'react'
import axios from 'axios'


export default class Init extends Component {

    state = {
      iva: null,
      dolar: null
    }

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })      
    }

    onSubmit = async e => {
      e.preventDefault();
      const Requisitos = {
        iva: this.state.iva,
        dolar: this.state.dolar
      }
      console.log(Requisitos)
      const res = await axios.post("/sacate-la-url/", Requisitos)           
      alert(res.data.message) 
    }

    render() {    
        return (
          <div>.
            <form onSubmit={this.onSubmit}>
              <div className="container separacion">
                <h5 className="container ml-3">Requisitos</h5>
                <div className="container">
                  <div className="row">                          
                    <div className="col-1"/>
                    <div className="col-10 card mt-4">
                      <div className="row">
                        <div className="col-12 separacion"/>
                        <div className="col-1"/>
                        <div className="col-3">
                            <span className="input-group-text ancho2 " id="inputGroup-sizing-default">Cobro IVA</span>
                        </div>
                        <input 
                        type="text" 
                        name="iva"
                        className="form-control text-right col-6" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        value={this.state.iva}
                        onChange={this.onChange}
                        />
                        <div className="col-2"/>
                        <div className="col-12 separacion"/>
                        <div className="col-1"/>
                        <div className="col-3">
                            <span className="input-group-text ancho2 " id="inputGroup-sizing-default">Valor Dolar Aduana</span>
                        </div>
                        <input 
                        type="text" 
                        name="dolar"
                        className="form-control text-right col-6" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        value={this.state.dolar}
                        />
                        <div className="col-2"/>
                        <div className="col-12 separacion"/>
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
