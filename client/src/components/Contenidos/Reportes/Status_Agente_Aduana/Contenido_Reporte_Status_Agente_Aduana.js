import React, { Component } from 'react'
import Listado from './Componentes_Buscar/Listado';
import Filtrado from './Componentes_Buscar/Filtrado'
import axios from 'axios'


export default class Init extends Component {

    state = {
        AgentesAduana: [],
        AgenteAduana: "",
    }

    componentDidMount = async () => {
        const res = await axios.get("/agentesAduana/",{}) 
        console.log(res,"agentes");
        for (let i= 0; i < res.data.agentes_aduana.length ; i++){
            const aux = await axios.get("/bancosAgentesAduana/"+res.data.agentes_aduana[i].id,{}) 
            const aux2 = await axios.get("/telefonosAgentesAduana/agentes/"+res.data.agentes_aduana[i].id,{})       
            const agente = {
                id: res.data.agentes_aduana[i].id,
                nombre: res.data.agentes_aduana[i].nombre,
                apellido: res.data.agentes_aduana[i].apellido,
                telefono: aux2.data.telefono[0].telefono,
                banco: aux.data.bancosAgentesAduana.nombre_banco,
                id_banco: aux.data.bancosAgentesAduana.id,
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
    
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Historial de Saldo: Agente A</h1>

                <div className="container separacion">                    
                    <Listado AgentesAduana= {this.state.AgentesAduana} onChangeAgente={this.onChangeAgente} AgenteAduana={this.state.AgenteAduana}/>

                    <Filtrado AgentesAduana={this.state.AgentesAduana} AgenteAduana={this.state.AgenteAduana}/>            
                                        
                </div>
            </main>
        )
    }
}
