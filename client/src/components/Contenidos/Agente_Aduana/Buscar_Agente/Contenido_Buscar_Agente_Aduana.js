import React, { Component } from 'react'
import AgentesAduana from '../../../JasonDePruebas/AgenteAduana.json'
import Listado from './Componentes_Buscar_Agente/Listado'
import Tabla from './Componentes_Buscar_Agente/Tabla'

export default class Init extends Component {

    state = {
        AgentesAduana: AgentesAduana,
        AgenteAduana: "",
    }

    onChangeAgente = (event) => {
        this.setState({
            AgenteAduana: event.target.value
        })
    }


    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Agente de Aduana</h1>

                <Listado AgentesAduana= {this.state.AgentesAduana} onChangeAgente={this.onChangeAgente} AgenteAduana={this.state.AgenteAduana}/>

                <Tabla AgenteAduana={this.state.AgenteAduana} AgentesAduana = {this.state.AgentesAduana}/>

            </main>
        )
    }
}
