import React, { Component } from 'react'
import Listado from './Componentes Banco/Listado'
import Banco from './Componentes Banco/Banco'
import bancos from '../../JasonDePruebas/Banco.json'
import { Accordion} from 'react-bootstrap';





export default class Contenido_Banco extends Component {

    state = {
        bancos: bancos,
        banco: "",
 
    }

    change = () => {
        /*  Funcion del boton editar banco  */
    }

    delete = () => {
        /*  Funcion del boton eliminar banco   */
    }

    onChangeBanco = (event) => {
        this.setState({
            banco: event.target.value
        })
    }



    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Bancos</h1>
                <Listado bancos={this.state.bancos} banco = {this.state.banco} onChangeBanco = {this.onChangeBanco} />
            
                        <Banco bancos={this.state.bancos} banco = {this.state.banco} change = {this.change} delete = {this.delete}/>

            </main>
        )
    }
}
