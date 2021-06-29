import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Productos from './Productos'
import Button2 from './Button'


export default class Init extends Component {
    render() {
        return (            
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
                                N° de Pedido: {this.props.pedido.n_pedido}
                              </Accordion.Toggle>
                            </div>
                            <div className="col-3 text.center mt-2">
                              Fecha: {this.props.pedido.fecha_entrega.dia + "-" + this.props.pedido.fecha_entrega.mes + "-" + this.props.pedido.fecha_entrega.año } 
                            </div>
                            <div className="col-5 text.center mt-2">
                              Estado: {this.props.pedido.estado}
                            </div>
                          </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>                        
                            <h5 className="mb-4 ml-4 text-primary">{this.props.pedido.proveedor}</h5>                                                      
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
                              <Productos Productos={this.props.pedido.productos} />
                              </tbody>
                            </table>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <Button2 estado = {this.props.pedido.estado} n_pedido={this.props.pedido.n_pedido} />
                </div>
              </div>
            </div>            
        )
    }
}
