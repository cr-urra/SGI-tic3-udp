import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Init extends Component {
    render() {
        return (
          <li className="list-group-item">
              Busqueda por Estado
            <div className="container separacion">
              <div className="row">
                <div className="input-group no_flex">
                  <div className="col-2">
                    <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Estado</label>
                  </div>
                  <div className="col-4">
                    <select className="form-select ancho alto"  id="inputGroupSelect01" >
                      <option defaultValue>Estado del Pedido</option>
                      <option value="1">En Producción</option>
                      <option value="2">En Transito (Internacional)</option>
                      <option value="3">Ingreso al País</option>
                      <option value="4">En Transito (Nacional)</option>
                      <option value="5">Finalizado</option>
                    </select>
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
                            <div className="col-3">
                              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Pedido 1
                              </Accordion.Toggle>
                            </div>
                            <div className="col-4 text.center mt-2">
                              Fecha: 27-05-2021
                            </div>
                            <div className="col-5 text.center mt-2">
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
                  <Link to={"/users/Pedido_Produccion"}>
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                  </Link>
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
                            <div className="col-3">
                              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Pedido 2
                              </Accordion.Toggle>
                            </div>
                            <div className="col-4 text.center mt-2">
                              Fecha: 27-05-2021
                            </div>
                            <div className="col-5 text.center mt-2">
                              Estado: En Transito (Internacional)
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
                  <Link to={"/users/Pedido_Internacional"}>
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                  </Link>
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
                            <div className="col-3">
                              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Pedido 3
                              </Accordion.Toggle>
                            </div>
                            <div className="col-4 text.center mt-2">
                              Fecha: 27-05-2021
                            </div>
                            <div className="col-5 text.center mt-2">
                              Estado: Ingreso al País
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
                  <Link to={"/users/Pedido_Ingreso"}>
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                  </Link>
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
                            <div className="col-3">
                              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Pedido 4
                              </Accordion.Toggle>
                            </div>
                            <div className="col-4 text.center mt-2">
                              Fecha: 27-05-2021
                            </div>
                            <div className="col-5 text.center mt-2">
                              Estado: En Transito (Nacional)
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
                  <Link to={"/users/Pedido_Nacional"}>
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                  </Link>
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
                            <div className="col-3">
                              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Pedido 5
                              </Accordion.Toggle>
                            </div>
                            <div className="col-4 text.center mt-2">
                              Fecha: 27-05-2021
                            </div>
                            <div className="col-5 text.center mt-2">
                              Estado: Finalizado
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
                  <Link to={"/users/Pedido_Finalizado"}>
                    <button className="btn color_sitio2 mt-2">
                      Editar Pedido
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
    }
}
