import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Precios from './Datos'
import Productos from './Productos'

export default class Costos extends Component {
    render() {
        return (
          <Accordion className="mb-4">
            <Card>
              <Card.Header>
                <div className="row">
                  <div className="col-6">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      {this.props.nombre}
                    </Accordion.Toggle>
                  </div>
                  <div className="col-6">
                    <Precios contenido={this.props.cuenta} nombre={this.props.n_costo} />
                  </div>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>                                                                           
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
                      <Productos Productos={this.props.productos} />
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        )
    }
}
