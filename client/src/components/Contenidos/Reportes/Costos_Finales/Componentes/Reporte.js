import React, { Component } from 'react'


export default class Opcion extends Component {
    render() {
        
        return (       
            <div>
                        <div className="container separacion">
                            <div className="card border-primary  shadow-lg">
                                
                              <div className="card-header text-primary">
                                Proveedor JJPlastalloy
                              </div>
                              <div className="container mt-4" >
                              <h1 className="text-center" style={{fontSize:"25px"}}>Productos</h1>
                                <table className="table text-center table-striped table-bordered" style={{marginTop:"20px"}}>
                                  <thead>
                                    <tr>
                                      <th scope="col">Id Producto</th>
                                      <th scope="col">Nombre</th>
                                      <th scope="col">Fecha</th>
                                      <th scope="col">Precio USD</th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                        <td>15678</td>
                                        <td>Producto 1</td>
                                        <td>02/10/2019</td>
                                        <td>$0,9</td>
                                    </tr>
                                    <tr>
                                        <td>1532</td>
                                        <td>Producto 2</td>
                                        <td>02/12/2019</td>
                                        <td>$0,96</td>
                                    </tr>
                                    <tr>
                                        <td>15328</td>
                                        <td>Producto 3</td>
                                        <td>10/03/2020</td>
                                        <td>$0,93</td>
                                    </tr>
                                    <tr>
                                        <td>1234</td>
                                        <td>Producto 4</td>
                                        <td>02/05/2020</td>
                                        <td>$1</td>
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