import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';


export default class Init extends Component {
    render() {
        return (
          <li className="list-group-item">
              Busqueda por Fecha
              <div className="row mt-4" >
                <div className="col-4">
                  <div className="input-group ">
                    <div className="col-3">
                        <div className="input-group-prepend ancho2">
                            <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                        </div>
                    </div>
                    <div className="col-8">
                        <input 
                        type="date" 
                        name="r_contraseña"
                        className="form-control" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="input-group mb-3">
                      <div className="col-3">
                          <div className="input-group-prepend ancho2">
                              <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                          </div>
                      </div>
                      <div className="col-8">
                          <input 
                          type="date" 
                          name="r_contraseña"
                          className="form-control" 
                          aria-label="Default" 
                          aria-describedby="inputGroup-sizing-default"
                          />
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
