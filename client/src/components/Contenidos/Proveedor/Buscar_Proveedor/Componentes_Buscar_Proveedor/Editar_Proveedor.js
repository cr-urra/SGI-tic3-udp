import React, { Component } from 'react'
import Datos from './EditDatos'
import {Link} from 'react-router-dom';

export default class Banco extends Component {
    
    state ={
        nombre: null,
        pais: null,
        direccion: null,
        correo: null,
        telefono: null,
        moneda: null,
        banco: null,
    }
    
    onSubmit = () => {
        
    }
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    render() {

        if(this.props.proveedor !== ""){
            let j;
            for(let i = 0 ; i < this.props.proveedores.length ; i++){
                
                if(this.props.proveedor=== this.props.proveedores[i].nombre){
                    j = i;
                }
            }
            if(this.props.proveedores[j]!=null){
                return (
                    <div>
                        
                        <div className="container separacion">

                            <div className="card border-primary  shadow-lg">
                                <form onSubmit={this.onSubmit}>
                                    <div className="card-header text-primary">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>{this.props.proveedores[j].nombre}</h4>
                                            </div>
                                            <div className="col-7"/>
                                            <div className="col-1">
                                                <Link to = '/users/Buscar_Proveedor'> 
                                                    <button className="btn btn-primary ancho btn-sm" onClick={this.props.change} value ={false}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <Datos nombre={"Nombre"} contenido={this.props.proveedores[j].nombre} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    <Datos nombre={"Pais"} contenido={this.props.proveedores[j].pais} name={"pais"} name2={this.state.pais} onChange={this.onChange}/>
                                    <Datos nombre={"Direccion"} contenido={this.props.proveedores[j].direccion} name={"direccion"} name2={this.state.direccion} onChange={this.onChange}/>
                                    <Datos nombre={"Correo"} contenido={this.props.proveedores[j].correo} name={"correo"} name2={this.state.correo} onChange={this.onChange}/>
                                    <Datos nombre={"Telefono"} contenido={this.props.proveedores[j].telefono} name={"telefono"} name2={this.state.telefono} onChange={this.onChange}/>
                                    <Datos nombre={"Moneda"} contenido={this.props.proveedores[j].moneda} name={"moneda"} name2={this.state.moneda} onChange={this.onChange}/>
                                    <Datos nombre={"Banco"} contenido={this.props.proveedores[j].banco} name={"banco"} name2={this.state.banco} onChange={this.onChange}/>
                                </form>
                            </div>
                            
                            <button className="btn color_sitio2 separacion" >
                                Guardar Proveedor
                            </button>
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