import React, { Component } from 'react'
import Reporte from './Reporte'
import { Accordion, Card, Button } from 'react-bootstrap';

import axios from 'axios'




export default class Opcion extends Component {

     state = {
        fecha1: null,
        fecha2: null,
        estado: false
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    cambio = (e) => {
        this.setState(prevState =>({
            estado: !this.state.estado
        }))
    }

    render() {
      if(this.props.AgenteAduana !== ""){
          let j;
          for(let i = 0 ; i < this.props.AgentesAduana.length ; i++){
              
              if(this.props.AgenteAduana=== this.props.AgentesAduana[i].nombre){
                  j = i;
              }
          }
          if(this.props.AgentesAduana[j]!=null){
              return (      
                  <div >                    
                      <div className="container separacion">
                          <div className="card border-primary  shadow-lg">
                              <div className="card-header text-primary">
                                  Agente de Aduana: {this.props.AgentesAduana[j].nombre} 
                                  <br/>
                                  Saldo Actual: Falta Conectar
                              </div>
                              <h3 className="separacion text-center">Filtrar Reporte</h3>
                              <div >            
                                  <div className="row mt-4" >
                                    <div className="col-4 text-center">
                                      <h4 className="text-center"> Filtrar fechas</h4>                  
                                    </div>
                                    <div className="col-7">
                                      <div className="input-group mb-3">
                                          <div className="col-3 mb-2">
                                              <div className="input-group-prepend ancho2">
                                                  <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                                              </div>
                                          </div>                     

                                          <div className="col-xs-12 col-md-9 col-lg-9">
                                              <input 
                                              type="date" 
                                              name="fecha1"
                                              className="form-control"
                                              placeholder="AAAA" 
                                              aria-label="Default" 
                                              aria-describedby="inputGroup-sizing-default"
                                              onChange={this.onChange}
                                              value={this.state.fecha1}
                                              />
                                          </div>
                                        </div>  
                                        <div className="input-group mb-3">
                                          <div className="col-3 mb-2">
                                              <div className="input-group-prepend ancho2">
                                                  <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                                              </div>
                                          </div>

                                          <div className="col-xs-12 col-md-9 col-lg-9">
                                              <input 
                                              type="date" 
                                              name="fecha2"
                                              className="form-control" 
                                              placeholder="AAAA"
                                              aria-label="Default" 
                                              aria-describedby="inputGroup-sizing-default"
                                              onChange={this.onChange}
                                              value={this.state.fecha2}
                                              />
                                          </div>
                                        </div>  
                                        <div className="input-group mb-3 aling-end separacion">
                                          <div className="col-8"/>
                                          <div className="col-3">
                                            <button className="btn btn-danger separacion" onClick={this.d_filtrar}>Borrar Filtro</button>
                                          </div>                      
                                        </div>
                                        <div className='margen'/>
                                    </div>
                                  </div>                                        
                              </div>
                              
                          </div>
                      </div>
                        <div className="row">
                            <div className='col-2'/>
                            <div className="col-3">
                                <Accordion.Toggle as={Button} className="btn btn-success ancho rounded-pill"  eventKey="0" onClick={this.cambio}>
                                    Generar Reporte
                                </Accordion.Toggle>
                            </div>
                        </div>

                        <Reporte estado = {this.state.estado} AgenteAduana = {this.props.AgentesAduana[j]} Productos={this.state.productos} id={this.props.id} fecha1 = {this.state.fecha1} fecha2 = {this.state.fecha2}/> 
                        <div className='margen2' />
                  </div> 
              )                
          }else{
              return <div/>
          }
      }else{
          return <div/>
      } 
  }
}