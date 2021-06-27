import React, { Component } from 'react'
import Filtro from './FiltroFecha'
import Pedidos from '../../../../JasonDePruebas/Pedidos.json'


export default class Init extends Component {

    state ={
      pedidos: Pedidos,
      dia1: null,
      dia2: null,
      mes1: null,
      mes2: null,
      año1: null,
      año2: null,
      fecha1: {dia:null,mes:null,año:null},
      fecha2: {dia:null,mes:null,año:null}
    }

    filtrar = () =>{
      if(this.state.dia1!=null  && this.state.mes1 !=null  && this.state.año1 != null ){
        if(this.state.dia1!=""  && this.state.mes1 !=""  && this.state.año1 != "" ){
          this.setState({
            fecha1: {dia:this.state.dia1 ,mes: this.state.mes1 , año: this.state.año1}
          })
        }else{
          this.setState({
            fecha1:{dia:null,mes:null,año:null}
          })
        }
      }else{
        this.setState({
          fecha1:{dia:null,mes:null,año:null}
        })
      }
      if(this.state.dia2!=null && this.state.mes2 !=null && this.state.año2 != null){
        if(this.state.dia2!="" && this.state.mes2 !="" && this.state.año2 != ""){
        this.setState({
          fecha2: {dia:this.state.dia2 ,mes: this.state.mes2 , año: this.state.año2}          
        })
        }else{
          this.setState({
            fecha2:{dia:null,mes:null,año:null}
          })
        }
      }else{
        this.setState({
          fecha2:{dia:null,mes:null,año:null}
        })
      }
    }

    onChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
        return (
          <li className="list-group-item">            
              Busqueda por Fecha
              <div className="row mt-4" >
                <div className="col-4 text-center">
                  <span className="text-center"> Filtrar fechas</span>                  
                </div>
                <div className="col-8">
                  <div className="input-group mb-3">
                      <div className="col-2">
                          <div className="input-group-prepend ancho2">
                              <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
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
                    <div className="input-group mb-3">
                      <div className="col-2">
                          <div className="input-group-prepend ancho2">
                              <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
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
                    <div className="input-group mb-3 aling-end">
                      <div className="col-8"/>
                      <div className="col-3">
                        <button className="btn btn-primary" onClick={this.filtrar}>Filtrar Fechas</button>
                      </div>                      
                    </div>
                </div>
              </div>
              <Filtro Pedidos={this.state.pedidos} fecha1 ={this.state.fecha1} fecha2 ={this.state.fecha2} />
          </li>
        )
    }
}
