import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DatoTabla from './DatoTabla'


export default class Tabla extends Component {

    render() {
        if(this.props.AgenteAduana !== ""){
            let j;
            for(let i = 0 ; i < this.props.AgentesAduana.length ; i++){
                
                if(this.props.AgenteAduana=== this.props.AgentesAduana[i].nombre){
                    j = i;
                }
            }
            if(this.props.AgentesAduana[j]!=null){
                return (       
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Agente Aduana: {this.props.AgentesAduana[j].nombre}
                          </div>
                            <ul className="list-group list-group-flush">
                                <DatoTabla contenido = {"Nombre"} contenido2={this.props.AgentesAduana[j].nombre}/>
                                <DatoTabla contenido = {"Apellido"} contenido2={this.props.AgentesAduana[j].apellido}/>
                                <DatoTabla contenido = {"Teléfono"} contenido2={this.props.AgentesAduana[j].telefono}/>
                                <DatoTabla contenido = {"Banco"} contenido2={this.props.AgentesAduana[j].banco}/>
                                <DatoTabla contenido = {"Tipo de Cuenta"} contenido2={this.props.AgentesAduana[j].tipo_cuenta}/>
                                <DatoTabla contenido = {"Numero de Cuenta"} contenido2={this.props.AgentesAduana[j].n_cuenta}/>
                                <DatoTabla contenido = {"Saldo Actual"} contenido2={this.props.AgentesAduana[j].saldo}/>
                                <li className = "list-group-item">
                                    <div className="row">
                                        <div className="col-3"/>
                                        <div className="col-6 text-center">
                                            <Link to = '/users/Buscar_Agente_Aduana/Historial_Saldo'>
                                                <button type="button" className="btn btn-outline-success rounded-pill ancho ">                                                  
                                                    Ver Historial del Saldo
                                                </button>
                                            </Link> 
                                        </div>
                                        <div className="col-3"/>                                        
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="row g-2 mt-4 mb-2">
                            <div className="col-4 text-center">
                                <button type="submit" className="btn rounded-pill color_sitio2 ancho3"> 
                                    Pedidos
                                </button>
                            </div>
                            <div className="col-4 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill ancho3" value={true} onClick={this.props.change} > 
                                    Editar
                                </button>
                            </div>
                            <div className="col-4 text-center">
                                <button type="submit" className="btn btn-danger rounded-pill ancho3"> 
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return <div/>
            }
        }else{
           return <div/>
        }
    }
}