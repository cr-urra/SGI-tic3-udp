import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Pedido en Producción</h1>                  
                <div className="container separacion">
                  <div className="card border-primary  shadow-lg">
                    <div className="card-header text-primary">

                    </div> 
                  </div>
                </div> 

            </main>
        )
    }
}
