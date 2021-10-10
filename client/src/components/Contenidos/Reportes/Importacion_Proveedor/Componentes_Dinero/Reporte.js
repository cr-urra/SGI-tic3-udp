import React, { Component } from 'react'
import Lineas from './Lineas'


export default class Opcion extends Component {
    render() {
        
        return (       
            <div>
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                            
                          <div className="card-header text-primary" style={{fontSize:"18px"}}>
                            JJPlastalloy
                          </div>
                          <div className="container" >
                            <h1 className="text-center" style={{fontSize:"25px",marginTop:"10px"}}>Monto Importacion Proveedor JJPlastalloy</h1>
                              <div className="input-group no_flex">
                                <table className="table text-center table-striped table-bordered" style={{marginTop:"20px"}}>
                                    <thead>
                                        <tr>
                                            <th >Id Producto</th>
                                            <th >Nombre</th>
                                            <th >Pesos Chile</th>
                                            <th >Dolares Chile</th>
            
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <Lineas Productos={this.props.Productos.filter(producto => producto.proveedores_id === this.props.id)} />                            
                                    </tbody>
                                </table>
                            </div>
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