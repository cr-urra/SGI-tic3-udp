import React, { Component } from 'react'


export default class Init extends Component {
    render() {
        return (
            <main className="content">
            <h1 className="display-5 titulo">Monto Importacion Proveedor</h1>
                <div className="container" >
                    <div className="input-group no_flex">
                      <label className="input-group-text " for="inputGroupSelect01">Buscar un Proveedor</label>
                      <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco} ></input>
                      <datalist id="datalistOptions">
                        <option value="JJPlastalloy"/>
                        <option value="Karina"/>
                        <option value="Crystal Master"/>
                      </datalist>
                    </div>
                </div>

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
                                        <th colSpan="2" className="text-center"></th>
                                        <th colSpan="4" className="text-center">Pesos Chile</th>
                                        <th colSpan="4" className="text-center">Dolares Chile</th>

                                    </tr>
                                    <tr>
                                    <th scope="col">Id Producto</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">2019</th>
                                    <th scope="col">2020</th>
                                    <th scope="col">2021</th>
                                    <th scope="col">Total</th>
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
                                        <td>45.000Kg</td>
                                        <td>46.000Kg</td>
                                        <td>47.000Kg</td>
                                        <td>138.000Kg</td>
                                    </tr>
                                    <tr>
                                        <th colSpan="2" className="text-right">Total</th>
                                        <td>180.000Kg</td>
                                        <td>184.000Kg</td>
                                        <td>188.000Kg</td>
                                        <td>552.000Kg</td>
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
        </main>
        )
    }
}
