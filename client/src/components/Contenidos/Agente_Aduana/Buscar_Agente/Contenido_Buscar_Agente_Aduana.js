import React, { Component } from 'react'
import Listado from './Componentes_Buscar_Agente/Listado'
import Tabla from './Componentes_Buscar_Agente/Tabla'
import Editar_Agente from './Componentes_Buscar_Agente/Editar_AgenteAduana'
import axios from 'axios'

export default class Init extends Component {

    state = {
        AgentesAduana: [],
        AgenteAduana: "",
        editar: "false",
    }

    componentDidMount = async () => {
        const res = await axios.get("/agentesAduana/",{}) 
        console.log(res,"agentes");
        for (let i= 0; i < res.data.agentes_aduana.length ; i++){
            const aux = await axios.get("/bancosAgentesAduana/"+res.data.agentes_aduana[i].bancos_agentes_aduana_id,{}) 
            const aux2 = await axios.get("/telefonosAgentesAduana/agentes/"+res.data.agentes_aduana[i].id,{})       
            console.log( await axios.get("/telefonosAgentesAduana/agentes/"+res.data.agentes_aduana[i].id,{}) )
            const agente = {
                nombre: res.data.agentes_aduana[i].nombre,
                apellido: res.data.agentes_aduana[i].apellido,
                telefono: aux2.data.telefono[0].telefono,
                banco: aux.data.bancosAgentesAduana.nombre_banco,
                n_cuenta: res.data.agentes_aduana[i].numero_cuenta,
                correo: res.data.agentes_aduana[i].correo,
                tipo_cuenta: aux.data.bancosAgentesAduana.tipo_cuenta,
                saldo: "falta conectar dato",
                cuenta_corriente: [
                    {
                        debe: "400.000",
                        haber: "0",
                        fecha: "20-02-2021",
                        id_pedido:"1",
                        descripcion: "descripcion 1"
                    },
                    {
                        debe: "0",
                        haber: "400.000",
                        fecha: "22-02-2021",
                        id_pedido:"2",
                        descripcion: "descripcion 2"
                    },
                    {
                        debe: "500.000",
                        haber: "0",
                        fecha: "23-02-2021",
                        id_pedido:"3",
                        descripcion: "descripcion 3"
                    }
                ]
                
            }
            this.setState({
                AgentesAduana: [...this.state.AgentesAduana, agente]
            })
        }
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
