import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DatoTabla from './DatoTabla'


export default class Tabla extends Component {

    render() {
        if(this.props.proveedor !== ""){
            let j;
            for(let i = 0 ; i < this.props.proveedoresData.length ; i++){
                
                if(this.props.proveedor=== this.props.proveedoresData[i].nombre){
                    j = i;
                }
            }
            if(this.props.proveedoresData[j]!=null){
                return (       
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Agente Aduana: {this.props.proveedoresData[j].nombre}
                          </div>
                            <ul className="list-group list-group-flush">
                                <DatoTabla contenido = {"Nombre"} contenido2={this.props.proveedoresData[j].nombre}/>
                                <DatoTabla contenido = {"Direccion"} contenido2={this.props.proveedoresData[j].direccion}/>
                                <DatoTabla contenido = {"Correo"} contenido2={this.props.proveedoresData[j].correo}/>
                                <DatoTabla contenido = {"Moneda"} contenido2={this.props.proveedoresData[j].moneda}/>
                                <DatoTabla contenido = {"Telefono"} contenido2={this.props.proveedoresData[j].telefono}/>
                            </ul>
                        </div>
                        <div className="row g-2 mt-4 mb-2">
                            <div className="col-4 text-center">
                                <button type="submit" className="btn rounded-pill color_sitio2 ancho3"> 
                                    Pedidos
                                </button>
                            </div>
                            <div className="col-4 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill ancho3"> 
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