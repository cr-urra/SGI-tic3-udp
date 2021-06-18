import React, { Component } from 'react'


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
                      <h1 className="text-center" style={{fontSize:"25px"}}>Productos</h1>
                        <table className="table text-center table-striped table-bordered" style={{marginTop:"20px"}}>
                          <thead>
                            <tr>
                              <th scope="col">Id Producto</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">2019</th>
                              <th scope="col">2020</th>
                              <th scope="col">2021</th>
                              <th scope="col">Total</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>15678</td>
                                <td>Producto 1</td>
                                <td>45.000Kg</td>
                                <td>46.000Kg</td>
                                <td>47.000Kg</td>
                                <td>138.000Kg</td>
                            </tr>
                            <tr>
                                <td>15679</td>
                                <td>Producto 2</td>
                                <td>45.000Kg</td>
                                <td>46.000Kg</td>
                                <td>47.000Kg</td>
                                <td>138.000Kg</td>
                            </tr>
                            <tr>
                                <td>15680</td>
                                <td>Producto 3</td>
                                <td>45.000Kg</td>
                                <td>46.000Kg</td>
                                <td>47.000Kg</td>
                                <td>138.000Kg</td>
                            </tr>
                            <tr>
                                <td>15681</td>
                                <td>Producto 4</td>
                                <td>45.000Kg</td>
                                <td>46.000Kg</td>
                                <td>47.000Kg</td>
                                <td>138.000Kg</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-right">Total</td>
                                <td>180.000Kg</td>
                                <td>184.000Kg</td>
                                <td>188.000Kg</td>
                                <td>552.000Kg</td>
                            </tr>
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