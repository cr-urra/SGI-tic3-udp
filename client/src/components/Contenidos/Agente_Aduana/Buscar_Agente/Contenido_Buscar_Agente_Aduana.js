import React, { Component } from 'react'
import AgentesAduana from '../../../JasonDePruebas/AgenteAduana.json'
import Listado from './Componentes_Buscar_Agente/Listado'
import Tabla from './Componentes_Buscar_Agente/Tabla'
import Editar_Agente from './Componentes_Buscar_Agente/Editar_AgenteAduana'

export default class Init extends Component {

    state = {
        AgentesAduana: AgentesAduana,
        AgenteAduana: "",
        editar: "false",
    }

    onChangeAgente = (event) => {
        this.setState({
            AgenteAduana: event.target.value
        })
    }

    change = (event) => {
        this.setState({
            editar: event.target.value
        })
     }


    render() {

        if (this.state.editar ==="true"){
            return (
                <main className="content">
                    <h1 className="display-5 titulo">Editar Agente Aduana {this.state.AgenteAduana}</h1>
                    <Editar_Agente AgentesAduana={this.state.AgentesAduana} AgenteAduana = {this.state.AgenteAduana} change = {this.change}/>
                </main>
            )

        }else{
            return (
                <main className="content">
                    <h1 className="display-5 titulo">Buscar Agente de Aduana</h1>
    
                    <Listado AgentesAduana= {this.state.AgentesAduana} onChangeAgente={this.onChangeAgente} AgenteAduana={this.state.AgenteAduana}/>
    
                    <Tabla AgenteAduana={this.state.AgenteAduana} AgentesAduana = {this.state.AgentesAduana} change={this.change}/>
    
                </main>
            )
            }
       
    }
}
