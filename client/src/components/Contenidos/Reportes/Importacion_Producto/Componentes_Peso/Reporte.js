import React, { Component } from 'react'
import Lineas from './Lineas'
import { Accordion, Card, Button } from 'react-bootstrap';
import axios from 'axios'


export default class Opcion extends Component {

    componentDidMount = async () => {
      console.log(1)
      for (let j=0; j< this.props.Productos.length ; j++){
          let auxiliar = {
            Producto: this.props.Productos[j],
            Fecha1: this.props.fecha1,
            Fecha2: this.props.fecha2
          }
          const res = await axios.put("/historialPrecios/betweenDate", auxiliar, {
              "headers": {
                  "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
              }
          })                  
          this.props.Productos[j].max_price = res.data.historialPrecios[0].precio

      }
      this.forceUpdate()
  }

    render() {

        return (             
            <div> 
                <Accordion >
                <div className="row">
                    <div className='col-2'/>
                    <div className="col-3">
                        <Accordion.Toggle as={Button} className="btn btn-success ancho rounded-pill"  eventKey="0">
                            Generar Reporte
                        </Accordion.Toggle>
                    </div>
                </div>
                  <Accordion.Collapse eventKey="0">
                    <div>
                    <h2 className="text-center separacion">Reporte</h2>

                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">

                          <div className="card-header text-primary">
                            Proveedor {this.props.Proveedor.nombre}
                          </div>
                          <div className="container mt-4" >
                          <h4 className="text-center" >Productos (Peso)</h4>
                          <h5 className="text-center"> Importado desde {this.props.fecha1} hasta {this.props.fecha2} </h5>
                            <table className="table text-center table-striped table-bordered" style={{marginTop:"20px"}}>
                              <thead>
                                <tr>
                                  <th scope="col">Id Producto</th>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Total</th>                              
                                </tr>
                              </thead>
                              <tbody>
                              <Lineas Productos={this.props.Productos.filter(producto => producto.proveedores_id === this.props.id)} />                            
                              </tbody>
                            </table>
                        </div>

                        </div>
                    </div>
                    
                    <div className="container separacion_final">
                        <div className="row g-2  mb-4">
                            <div className="col-12 text-center">
                            <button type="button" className="btn btn-success rounded-pill" style={{width:"20%"}} >
                                Exportar 
                            </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </Accordion.Collapse>  

                    <div className='margen2'/>
                  
                </Accordion>                
            </div>
        )
      
    }
}