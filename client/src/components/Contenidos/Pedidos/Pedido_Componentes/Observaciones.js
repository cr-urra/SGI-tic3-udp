import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Observaciones_map from './Observaciones_map'

export default class Observaciones extends Component {
    render() {
        return (
          <div className="container">
            <Accordion className="separacion">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Observaciones
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>                                                                           
                    <ul class="list-group list-group-flush">
                      <Observaciones_map  observaciones={this.props.observaciones}/>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        )
    }
}
