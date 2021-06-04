import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Observacion from './Observacion'

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
                      {/*Crear componente que realize un map */}
                      <Observacion fecha={"Fecha A"} descripcion={"Descripcion A"} pago={null}/>
                      <Observacion fecha={"Fecha B"} descripcion={"Descripcion B"} pago={"Pago B"}/>
                      <Observacion fecha={"Fecha C"} descripcion={"Descripcion C"} pago={null}/>
                      <Observacion fecha={"Fecha D"} descripcion={"Descripcion D"} pago={"Pago D"}/>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        )
    }
}
