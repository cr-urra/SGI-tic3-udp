import React, { Component } from 'react'
import Gasto from './Gasto'
import axios from 'axios'



export default class Crear_Observacion extends Component {
    state ={
      check: false,
      observacion: null,
      gasto: null,
      rut: null
    }

    onChangeCheck = () =>{
      this.setState(prevState =>({
        check: !prevState.check
      }))
    }

    onChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = async e => {
      e.preventDefault();
      const Observacion = {
        check: this.state.check,
        observacion: this.state.observacion,
        gasto: this.state.gasto,
        rut: this.state.rut
      }

      console.log(Observacion)
      const res = await axios.post("/sacate-la-url/", Observacion)           
      alert(res.data.message) 
    }

    render() {
        return (
          <div className="container ">  
            <h5 className="ml-3"> Ingresar Observación </h5>
            <form onSubmit={this.onSubmit}>
              <div className="container mt-3 mb-4">
                <div class="input-group">
                  <textarea class="form-control" name="observacion" value = {this.state.observacion} onChange={this.onChange} aria-label="With textarea"/>
                </div>  
                <div className="row">
                  <div className="col-1"/>
                  <div className="col-2  mt-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value={this.state.check} onChange = {this.onChangeCheck} id="flexCheckDefault"/>
                      <label class="form-check-label" for="flexCheckDefault">
                        Conlleva un Gasto la Observación
                      </label>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                  <Gasto Filtro = {this.state.check} onChange = {this.onChange} contenido1={this.state.gasto} contenido2={this.state.rut}/>
                  </div>
                  <div className="col-3">
                    <button className="btn color_sitio2 mt-3" onClick={this.onSubmit} type="submit">
                      Guardar Observación
                    </button>
                  </div>                
                </div>            
              </div>
            </form>
          </div>        
        )
    }
}
