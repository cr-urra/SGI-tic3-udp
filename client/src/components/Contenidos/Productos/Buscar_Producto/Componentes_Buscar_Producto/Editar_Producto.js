import React, { Component } from 'react'
import Datos from './EditDatos'
import {Link} from 'react-router-dom';

export default class EditProduct extends Component {

    state = {
        nombre: null,
        codigo:null,
        descripcion:null,
        precio : null,
        proveedor: null,
        tipo: null,
    }
    
    onSubmit = () => {

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    render() {

        if(this.props.product !== ""){
            let j;
            for(let i = 0 ; i < this.props.productsData.length ; i++){
                
                if(this.props.product=== this.props.productsData[i].nombre){
                    j = i;
                }
            }
            if(this.props.productsData[j]!=null){
                return (
                    <div>
                        
                        <div className="container separacion">

                            <div className="card border-primary  shadow-lg">
                                <form onSubmit={this.onSubmit}>
                                    <div className="card-header text-primary">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>{this.props.productsData[j].nombre}</h4>
                                            </div>
                                            <div className="col-7"/>
                                            <div className="col-1">
                                                <Link to = '/users/Buscar_Producto'> 
                                                    <button className="btn btn-primary ancho btn-sm" onClick={this.props.change} value ={false}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <Datos nombre={"Nombre"} contenido={this.props.productsData[j].nombre} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    <Datos nombre={"Codigo"} contenido={this.props.productsData[j].codigo} name={"codigo"} name2={this.state.codigo} onChange={this.onChange}/>
                                    <Datos nombre={"Descripción"} contenido={this.props.productsData[j].descripcion} name={"descripcion"} name2={this.state.descripcion} onChange={this.onChange}/>
                                    <Datos nombre={"Precio"} contenido={this.props.productsData[j].precio} name={"precio"} name2={this.state.precio} onChange={this.onChange}/>
                                    <Datos nombre={"Proveedor"} contenido={this.props.productsData[j].proveedor} name={"proveedor"} name2={this.state.proveedor} onChange={this.onChange}/>
                                    <Datos nombre={"Tipo"} contenido={this.props.productsData[j].tipo} name={"tipo"} name2={this.state.tipo} onChange={this.onChange}/>
                                </form>
                            </div>
                            
                            <button className="btn color_sitio2 separacion" >
                                Guardar Producto
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