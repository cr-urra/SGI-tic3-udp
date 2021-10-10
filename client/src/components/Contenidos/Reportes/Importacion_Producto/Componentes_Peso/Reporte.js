import React, { Component } from 'react'
import Lineas from './Lineas'

export default class Opcion extends Component {
    render() {
        
        return (       
            <div>
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
        )
    }
}