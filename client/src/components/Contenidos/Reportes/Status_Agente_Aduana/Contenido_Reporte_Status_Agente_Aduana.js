import React, { Component } from 'react'
import AgentesAduana from '../../../JasonDePruebas/AgenteAduana.json';
import Listado from './Componentes_Buscar/Listado';
import Card from './Componentes_Buscar/Card'


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
                <h1 className="display-5 titulo">Historial de Saldo: Agente A</h1>

                <div className="container separacion">                    
                    <Listado AgentesAduana= {this.state.AgentesAduana} onChangeAgente={this.onChangeAgente} AgenteAduana={this.state.AgenteAduana}/>

                    <Card AgentesAduana={this.state.AgentesAduana} AgenteAduana={this.state.AgenteAduana} />                    
                                        
                </div>
            </main>
        )
    }
}
