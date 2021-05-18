import React, { Component } from 'react'
import Listado from '../Componentes/Componentes Banco/Listado'
import Banco from '../Componentes/Componentes Banco/Banco'
import Botones from '../Componentes/Componentes Banco/Botones'
import bancos from '../JasonDePruebas/Banco.json'





export default class Init extends Component {

    state = {
        bancos: bancos
    }

    change = () => {
        /*  Funcion del boton editar banco  */
    }

    delete = () => {
        /*  Funcion del boton eliminar banco   */
    }


    render() {
        return (
            <main className="content">

                <h1 className="display-5 titulo">Bancos</h1>

                <Listado />

                <Banco />
                      
                <Botones change = {this.change} delete = {this.delete} /> 
                           
            </main>
        )
    }
}
