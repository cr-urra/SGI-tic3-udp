import React, { Component } from 'react'
import Listado from '../Componentes/Componentes Banco/Listado'
import Banco from '../Componentes/Componentes Banco/Banco'
import Botones from '../Componentes/Componentes Banco/Botones'


export default class Init extends Component {
    render() {
        return (
            <main className="content">

                <h1 className="display-5 titulo">Bancos</h1>

                <Listado />

                <Banco />
                      
                <Botones /> 
                   

                   
              
            </main>
        )
    }
}
