import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Gastos_map from './Gastos_map'

export default class Observaciones extends Component {
    render() {
        return (
          <div className="container">
            <Accordion className="separacion">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Gastos
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>                                                                           
                    <ul class="list-group list-group-flush">
                      <Gastos_map  observaciones={this.props.observaciones}/>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        )
    }
}
