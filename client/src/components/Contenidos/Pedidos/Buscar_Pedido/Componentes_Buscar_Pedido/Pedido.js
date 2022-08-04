import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Productos from './Productos'
import Button2 from './Button'
import Estado from './Estado_Card'
import axios from 'axios'

export default class Init extends Component {

    getFile = async () => {
        axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token')
        const res = await axios.get("/files/orderImport/"+this.props.pedido.pedido.id,{ 
            responseType: 'blob' 
        })
        const url = window.URL.createObjectURL(new Blob([res.data], {
            type: res.headers['content-type']
        }))
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `orden_${this.props.pedido.n_pedido}.pdf`)
        document.body.appendChild(link)
        link.click()
    };

    getDocuments = async () => {
      axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token')
      const res = await axios.get("/files/getDocumentos/"+this.props.pedido.pedido.id,{ 
          responseType: 'blob' 
      })
      const url = window.URL.createObjectURL(new Blob([res.data], {
          type: res.headers['content-type']
      }))
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `documentos_pedido_${this.props.pedido.n_pedido}.zip`)
      document.body.appendChild(link)
      link.click()
  };

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
                              Fecha: {this.props.pedido.fecha_entrega } 
                            </div>
                            <Estado estado={this.props.pedido.estado}/>                            
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
                            <button className="btn color_sitio2 mt-3" onClick={this.getDocuments}>
                              Descargar documentos
                            </button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="text-center">
                      <button className="btn color_sitio2 mt-3" onClick={this.getFile}>
                        Descargar
                      </button>
                  </div>
                  <Button2 estado = {this.props.pedido.estado} n_pedido={this.props.pedido}  />
                </div>
              </div>
            </div>            
        )
    }
}
