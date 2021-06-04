import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';


export default class Init extends Component {
    render() {
        return (
          <li className="list-group-item">
            Busqueda por Producto
            <div className="row mt-4" >
              <div className="col-5">
                <div className="container" >
                    <div className="input-group no_flex">
                      <label className="input-group-text" for="inputGroupSelect01">Proveedor</label>
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
              <div className="col-5">
                <div className="container" >
                    <div className="input-group no_flex">
                      <label className="input-group-text" for="inputGroupSelect01">Producto</label>
                      <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco} disabled ></input>
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
            </div>
          <div className="container separacion">
            <div className="row">
              <div className="input-group no_flex">
                <div className="col-9">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <div className="row">
                          <div className="col-4">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              Pedido 1
                            </Accordion.Toggle>
                          </div>
                          <div className="col-4 text.center mt-2">
                            Fecha: 27-05-2021
                          </div>
                          <div className="col-4 text.center mt-2">
                            Estado: En Producción
                          </div>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                          <h5 className="mb-4 ml-4 text-primary">Crystal Master</h5>                                                      
                          <table className="table text-center table-striped table-bordered">
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
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="col-3 text-center">
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container separacion">
            <div className="row">
              <div className="input-group no_flex">
                <div className="col-9">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <div className="row">
                          <div className="col-4">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              Pedido 2
                            </Accordion.Toggle>
                          </div>
                          <div className="col-4 text.center mt-2">
                            Fecha: 27-05-2021
                          </div>
                          <div className="col-4 text.center mt-2">
                            Estado: En Producción
                          </div>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                          <h5 className="mb-4 ml-4 text-primary">Crystal Master</h5>                                                      
                          <table className="table text-center table-striped table-bordered">
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
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="col-3 text-center">
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container separacion">
            <div className="row">
              <div className="input-group no_flex">
                <div className="col-9">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <div className="row">
                          <div className="col-4">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              Pedido 3
                            </Accordion.Toggle>
                          </div>
                          <div className="col-4 text.center mt-2">
                            Fecha: 27-05-2021
                          </div>
                          <div className="col-4 text.center mt-2">
                            Estado: En Producción
                          </div>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                          <h5 className="mb-4 ml-4 text-primary">Crystal Master</h5>                                                      
                          <table className="table text-center table-striped table-bordered">
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
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="col-3 text-center">
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        )
    }
}
