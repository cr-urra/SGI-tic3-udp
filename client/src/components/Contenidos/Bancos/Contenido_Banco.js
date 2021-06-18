import React, { Component } from 'react'
import Listado from './Componentes Banco/Listado'
import Banco from './Componentes Banco/Banco'
import bancos from '../../JasonDePruebas/Banco.json'
import Editar_Banco from './Componentes Banco/Editar_Banco'



export default class Contenido_Banco extends Component {

    state = {
        bancos: bancos,
        banco: "",
        editar: "false",
 
    }

    change = (event) => {
       this.setState({
           editar: event.target.value
       })
    }

    edit = () => {
        /* funcion del boton guardar edit banco */
    }

    

    onChangeBanco = (event) => {
        this.setState({
            banco: event.target.value
        })
    }



    render() {

        if(this.state.editar==="true"){
            return (
                <main className="content">
                    <h1 className="display-5 titulo">Editar Banco {this.state.banco}</h1>
                    <Editar_Banco bancos={this.state.bancos} banco = {this.state.banco} change = {this.change}/>
                </main>
            )
        }else {
            return (
                <main className="content">
                    <h1 className="display-5 titulo">Bancos</h1>
                    <Listado bancos={this.state.bancos} banco = {this.state.banco} onChangeBanco = {this.onChangeBanco} />

                    <Banco bancos={this.state.bancos} banco = {this.state.banco} change = {this.change} delete = {this.delete}/>
                    
                </main>
            )
        }
    }
}
