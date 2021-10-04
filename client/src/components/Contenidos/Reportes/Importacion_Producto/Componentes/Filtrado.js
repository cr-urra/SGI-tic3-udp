import React, { Component } from 'react'
import Reporte from './Reporte'
import { Accordion, Card, Button } from 'react-bootstrap';
import Productos from './Productos'
import productos from '../../../../JasonDePruebas/Productos.json'


export default class Opcion extends Component {

    state = {
        fecha1: null,
        fecha2: null,
        filtro: false,
        productos: productos,
    }

    d_filtrar = () =>{
        this.setState({
          fecha1: null,
          fecha2: null
        })
        
    }

    n_filtrar = () =>{
        this.setState({
          fecha1: null,
          fecha2: null
        })
        
    }

    filtro = () =>{
        this.setState(prevState =>({
            filtro: !prevState.filtro
          }))
    }

    render() {
        if(this.props.Proveedor !== ""){
            let j;
            for(let i = 0 ; i < this.props.Proveedores.length ; i++){
                
                if(this.props.Proveedor === this.props.Proveedores[i].nombre){
                    j = i;
                }
            }
            if(this.props.Proveedores[j]!=null){
                return (      
                    <div >                    
                        <div className="container separacion">
                            <div className="card border-primary  shadow-lg">
                                <div className="card-header text-primary">
                                    Proveedor: {this.props.Proveedores[j].nombre}
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
                                          <div className="input-group mb-3 aling-end">
                                            <div className="col-7"/>
                                            <div className="col-2">
                                              <button className="btn btn-primary" onClick={this.n_filtrar}>Filtrar</button>
                                            </div>   
                                            <div className="col-3">
                                              <button className="btn btn-danger" onClick={this.d_filtrar}> Borrar Filtro</button>
                                            </div>                      
                                          </div>
                                      </div>
                                    </div>                                        
                                </div>

                                <Accordion >
                                  <Card className="separacion">
                                    <Card.Header>
                                      
                                        <div className="row">
                                            <div className="col-2 ">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    Productos
                                                </Accordion.Toggle>
                                            </div>
                                            <div className="col-8">
                                                <div class="form-check mt-2">
                                                  <input class="form-check-input" type="checkbox" onChange={this.filtro} id="flexCheckChecked" />
                                                  <label class="form-check-label" for="flexCheckChecked">
                                                    Filtrar Productos
                                                  </label>
                                                </div>
                                            </div>
                                        </div>                                                                            
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                      <Card.Body>                                                                           
                                        <div class="container">
                                            <div class="row g-2">

                                            <Productos Productos={this.state.productos} filtro ={this.state.filtro}/>
                                                                                      
                                            </div>
                                        </div>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                            </div>
                        </div>

                        <h2 className="text-center separacion">Reporte</h2>

                        <Reporte Proveedor = {this.props.Proveedores[j]}/>

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