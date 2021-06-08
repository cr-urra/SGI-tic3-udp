import React, { Component } from 'react'
import axios from 'axios';
import Dato from './Componentes_Ingresar_Proveedor/Dato'



export default class Ingresar_Usuario extends Component {
    state ={
        nombre: null,
        pais: null,
        direccion: null,        
        correo: null,
        telefono: null,
        moneda: null,

        nombre_b: null,
        cuenta_corriente: null,
        iban: null,
        pais_b: null,
        n_aba: null,
        referencia: null,
        banco_beneficiario: null,
        codigo_swift: null,
        codigo_ifcs: null,
        cuenta_interbancaria: null,
        banco_intermediario: null
        
    }

    addProveedor = async () =>{
        const Proveedor ={

        }
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await axios.get()

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onChangeFiltro = (event) => {
        this.setState({
            filtro: event.target.value
        })
      }


    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Crear Proveedor</h1>
                <div className = "container separacion" >
                    <div className = "card shadow-lg">
                        <div className="card-header">
                            <h5> Formulario de creación de Usuario</h5>
                        </div>
                        <form onSubmit = {this.onSubmit}>
                            <div className = "container separacion" >
                            
                                <div className="row mt-2 mb-2">         
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Nombre"} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"País"} name={"pais"} name2={this.state.pais} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Dirección"} name={"direccion"} name2={this.state.direccion} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Correo"} name={"correo"} name2={this.state.correo} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Teléfono"} name={"telefono"} name2={this.state.telefono} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Moneda"} name={"moneda"} name2={this.state.moneda} onChange={this.onChange}/>
                                    </div>
                                </div>    
                                <h5 className="separacion"> Datos Bancarios</h5>                                                    

                                <div className="row ">
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Nombre"} name={"nombre_b"} name2={this.state.nombre_b} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Cuenta Corriente"}  name={"cuenta_corriente"} name2={this.state.cuenta_corriente} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"IBAN"}  name={"iban"} name2={this.state.iban} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"País"}  name={"pais_b"} name2={this.state.pais_b} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Número ABA"}  name={"n_aba"} name2={this.state.n_aba} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Referencia"}  name={"referencia"} name2={this.state.referencia} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Banco Beneficiario"}  name={"banco_beneficiario"} name2={this.state.banco_beneficiario} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Código SWIFT"}  name={"codigo_swift"} name2={this.state.codigo_swift} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Código IFCS"}  name={"codigo_ifcs"} name2={this.state.codigo_ifcs} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">                                    
                                        <Dato nombre={"Cuenta Interbancaria"}  name={"cuenta_interbancaria"} name2={this.state.cuenta_interbancaria} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Banco Intermediario"}  name={"banco_intermediario"} name2={this.state.banco_intermediario} onChange={this.onChange}/>
                                    </div>
                                </div>
                            </div>
                        </form>                        
                    </div>
                    <button className="btn color_sitio2 separacion">
                        Guardar Proveedor
                    </button>
                </div>
            </main>
        )
    }
}
