import React, { Component } from 'react'
import Tabla from './Tabla'


export default class Card extends Component {

    state= {
        f_inicio: null,
        f_termino: null,
    }

    onChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if(this.props.AgenteAduana !== ""){
            let j;
            for(let i = 0 ; i < this.props.AgentesAduana.length ; i++){
                
                if(this.props.AgenteAduana === this.props.AgentesAduana[i].nombre){
                    j = i;
                }
            }
            if(this.props.AgentesAduana[j]!=null){
                return (       
                    <div >
                        <div className="card shadow-lg">
                            <div className="card-header">
                                <h5 className="mt-2 ml-3 text-primary">Saldo Actual: {this.props.AgentesAduana[j].saldo}     </h5>
                            </div>                                        
                            <div className="container separacion">
                                <div className="row">
                                    <div className="col-xs-8 col-md-4 col-lg-4 text-center mb-4">
                                        <h5>Busqueda por Fecha </h5>
                                    </div>
                                    <div className="col-xs-10 col-md-8 col-lg-8">
                                        <div className="input-group mb-3">
                                            <div className="col-1"/>
                                            <div className="col-2">
                                                <div className="input-group-prepend ancho2">
                                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <input 
                                                type="date" 
                                                name="f_inicio"
                                                className="form-control" 
                                                aria-label="Default" 
                                                aria-describedby="inputGroup-sizing-default"
                                                onChange={this.onChange}
                                                value={this.state.f_inicio}
                                                />
                                            </div> 
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="col-1"/>
                                            <div className="col-2">
                                                <div className="input-group-prepend ancho2">
                                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <input 
                                                type="date" 
                                                name="f_termino"
                                                className="form-control" 
                                                aria-label="Default" 
                                                aria-describedby="inputGroup-sizing-default"
                                                onChange={this.onChange}
                                                value={this.state.f_termino}
                                                />                                               
                                            </div>   
                                        </div>                                      
                                    </div>
                                </div>
                                <Tabla  AgenteAduana={this.props.AgentesAduana[j]} f_inicio={this.state.f_inicio} f_termino={this.state.f_termino}/>
                            </div>                     
                        </div> 
                        <div className="container separacion">
                            <div className="row g-2 mb-4">
                                <div className="col-12 text-center">
                                    <button type="button" className="btn btn-success rounded-pill" style={{width:"20%"}} >
                                        Exportar 
                                    </button>
                                </div>
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