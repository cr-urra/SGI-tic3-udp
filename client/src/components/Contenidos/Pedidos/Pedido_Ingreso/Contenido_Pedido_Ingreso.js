import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Agente de Aduana</h1>
                <div className="container separacion">
                    <div>
                        <div className="container separacion">
                            <div className="card shadow-lg">
                              <div className="card-header ">
                                Elegir Forma de Busqueda
                              </div>
                                <ul className="list-group list-group-flush"> 
                                  <li className="list-group-item">
                                    <div className="row ml-3 mr-3 mt-4 mb-4">
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioBanco"/>                                             
                                              <label class="form-check-label form-label" for="flexRadioBanco">
                                                Busqueda por Estado                                               
                                              </label>                                             
                                            </div> 
                                        </div>
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioBanco"/>                                             
                                              <label class="form-check-label form-label" for="flexRadioBanco">
                                                Busqueda por Fecha                                               
                                              </label>                                             
                                            </div> 
                                        </div>
                                        <div className="col-4">
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioBanco"/>                                             
                                              <label class="form-check-label form-label" for="flexRadioBanco">
                                                Busqueda por Producto                                          
                                              </label>                                             
                                            </div> 
                                        </div>
                                    </div>
                                  </li> 
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
                                          <Link to={"#"}>
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
                                          <Link to={"#"}>
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
                                          <Link to={"#"}>
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
                                          <Link to={"#"}>
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
                                          <Link to={"#"}>
                                            <button className="btn color_sitio2 mt-2">
                                              Editar Pedido
                                            </button>
                                          </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </li>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
