import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DatoTabla from './DatoTabla'


export default class Tabla extends Component {

    render() {
        if(this.props.Usuario !== ""){
            let j;
            for(let i = 0 ; i < this.props.Usuarios.length ; i++){
                
                if(this.props.Usuario=== this.props.Usuarios[i].nombre){
                    j = i;
                }
            }
            if(this.props.Usuarios[j]!=null){
                return (       
                    <div className="container separacion">
                        <div className="card border-primary  shadow-lg">
                          <div className="card-header text-primary">
                            Usuario {this.props.Usuarios[j].nombre}
                          </div>
                            <ul className="list-group list-group-flush">
                                <DatoTabla contenido = {"Nombre"} contenido2={this.props.Usuarios[j].nombre}/>
                                <DatoTabla contenido = {"Apellido"} contenido2={this.props.Usuarios[j].apellido}/>
                                <DatoTabla contenido = {"Rut"} contenido2={this.props.Usuarios[j].rut}/>
                                <DatoTabla contenido = {"Telefono"} contenido2={this.props.Usuarios[j].telefono}/>
                                <DatoTabla contenido = {"Correo"} contenido2={this.props.Usuarios[j].correo}/>
                                <DatoTabla contenido = {"Rol"} contenido2={this.props.Usuarios[j].rol}/>
                            </ul>
                        </div>
                        <div className="row g-2 mt-5 mb-4">
                            <div className="col-6 text-center">
                            <button type="button" className="btn btn-primary rounded-pill ancho3" >
                                Editar Usuario 
                            </button>
                            </div>
                            <div className="col-6 text-center">
                            <button type="button" className="btn btn-danger rounded-pill ancho3" >
                                Eliminar Usuario
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