import React, { Component } from 'react'


export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Crear un Pedido</h1>
                <div className = "container separacion" >
                    <div className = "card shadow-lg">
                        <div className="card-header">
                            Formulario para la creacion de un Pedido
                        </div>
                        <form onSubmit={this.onSubmit} >
                            <div className = "container separacion" >
                                <div className="container mb-5 mt-5" >
                                    <div className="input-group no_flex">
                                      <label className="input-group-text " for="inputGroupSelect01">Buscar un Proveedor </label>
                                      <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco} ></input>
                                      <datalist id="datalistOptions">
                                        <option value="San Francisco"/>
                                        <option value="New York"/>
                                        <option value="Seattle"/>
                                        <option value="Los Angeles"/>
                                        <option value="Chicago"/>
                                      </datalist>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-group mb-3 mt-2 ml-3">
                                        <div className="col-1">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Código</span>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <input 
                                            type="text" 
                                            name="cuenta_corriente"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                           /* onChange={this.onChange}
                                            value={this.state.cuenta_corriente} */
                                            />
                                        </div>   
                                    </div> 

                                    <div className="input-group  mt-2 ">
                                        <div className="col-6" >
                                            <div className="container mb-4" >
                                                <div className="input-group no_flex">
                                                  <label className="input-group-text" for="inputGroupSelect01">Buscar Producto</label>
                                                  <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco} ></input>
                                                  <datalist id="datalistOptions">
                                                    <option value="San Francisco"/>
                                                    <option value="New York"/>
                                                    <option value="Seattle"/>
                                                    <option value="Los Angeles"/>
                                                    <option value="Chicago"/>
                                                  </datalist>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="input-group mb-3">
                                                <div className="col-4">
                                                    <div className="input-group-prepend ancho2">
                                                        <span className="input-group-text ancho " id="inputGroup-sizing-default">Kg</span>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <input 
                                                    type="text" 
                                                    name="cuenta_corriente"
                                                    className="form-control" 
                                                    aria-label="Default" 
                                                    aria-describedby="inputGroup-sizing-default"
                                                    /*onChange={this.onChange}
                                                    value={this.state.cuenta_corriente}*/
                                                    />
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="input-group mb-3">
                                                <div className="col-3">
                                                    <div className="input-group-prepend ancho2">
                                                        <span className="input-group-text ancho" id="inputGroup-sizing-default">$/kg</span>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <input 
                                                    type="text" 
                                                    name="cuenta_corriente"
                                                    className="form-control text-center" 
                                                    aria-label="Default" 
                                                    aria-describedby="inputGroup-sizing-default"
                                                    readOnly
                                                    /*onChange={this.onChange}*/
                                                    value={555}
                                                    />
                                                </div>   
                                            </div>
                                        </div>
                                    </div> 

                                    <div className="input-group mb-3">
                                        <div className="col-9 mr-5"/>
                                        <div className="col-2">
                                            <button className=" btn color_sitio2">
                                                Agregar Producto
                                            </button>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3">
                                        <table className="table separacion text-center table-striped table-bordered">
                                          <thead>
                                            <tr>
                                              <th scope="col">Código</th>
                                              <th scope="col">Kg</th>
                                              <th scope="col">$/Kg (Dolar)</th>
                                              <th scope="col">Total</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>Producto 1</td>
                                              <td>300</td>
                                              <td>50.0</td>
                                              <td>15000</td>
                                            </tr>
                                            <tr>
                                              <td>Producto 2</td>
                                              <td>300</td>
                                              <td>50.0</td>
                                              <td>15000</td>
                                            </tr>
                                            <tr>
                                              <td>Producto 3</td>
                                              <td>300</td>
                                              <td>50.0</td>
                                              <td>15000</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                    </div>

                                    <div className="input-group no_flex ml-3">
                                        <div className="col-2">
                                            <label className="input-group-text ancho2 " for="inputGroupSelect01">Forma de Pago</label>
                                        </div>
                                        <div className="col-4">
                                            <select className="form-select ancho alto"  id="inputGroupSelect01" /* value = {this.state.rol} onChange={this.onChangeRol} */>
                                              <option defaultValue>Escoger Forma de Pago</option>
                                              <option value="1">Credito</option>
                                              <option value="2">Transferencia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3 mt-4 ml-3">
                                        <div className="col-3">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Fecha Estimada de Entrega</span>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <input 
                                            type="date" 
                                            name="cuenta_corriente"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                           /* onChange={this.onChange}
                                            value={this.state.cuenta_corriente} */
                                            />
                                        </div>   
                                    </div> 

                                    <div className="input-group no_flex ml-3">
                                        <div className="col-2">
                                            <label className="input-group-text ancho2 " for="inputGroupSelect01">Tipo de Transporte</label>
                                        </div>
                                        <div className="col-4">
                                            <select className="form-select ancho alto"  id="inputGroupSelect01" /* value = {this.state.rol} onChange={this.onChangeRol} */>
                                              <option defaultValue>Escoger Tipo de Transporte</option>
                                              <option value="1">CIF</option>
                                              <option value="2">FOB</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3 mt-4 ml-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Pago Inicial</span>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <input 
                                            type="text" 
                                            name="cuenta_corriente"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                           /* onChange={this.onChange}
                                            value={this.state.cuenta_corriente} */
                                            />
                                        </div>   
                                    </div> 

                                    <div className="container ml-3 mr-3 mt-3">
                                      <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>                                   
                                </div>                               
                            </div>
                            <button className="btn separacion color_sitio2">
                                Guardar Pedido
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}
