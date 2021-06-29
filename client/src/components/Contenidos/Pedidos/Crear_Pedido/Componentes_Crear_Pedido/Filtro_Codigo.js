import React, { Component } from 'react'
import Codigos from './Codigos'


export default class Listado extends Component {

    
    //this.props.productos.filter((producto)=> producto.proveedores_id === this.props.filtro)
   

    render() {
        if(this.props.filtro !== null && this.props.filtro !=="null"){
            return (       
                <div className="input-group  mt-2 ">
                    <div className="col-6" >
                        {console.log(this.state,"hola")}
                        <div className="container mb-4" >
                            <div className="input-group no_flex">
                              <label className="input-group-text" for="inputGroupSelect01">Buscar Producto</label>
                              <input className="form-control ancho" list="datalistOptions2"  placeholder="Escribe Aquí para Buscar..." name={"codigo_p"} value ={this.props.codigo_p} onChange={this.props.onChange} />
                              <datalist id="datalistOptions2" >
                                  {console.log(this.props)}
                                <Codigos codigos={this.props.productos.filter((producto)=> producto.proveedores_id == this.props.filtro)} />
                              </datalist>
                            </div>
                        </div>
                    </div>   
                    <div className="col-5">
                        <div className="form-check mb-3">
                          <input type="checkbox" className="form-check-input" id="hola" onClick={this.props.new}/>
                          <label className="form-check-label" for="hola">Agregar Nuevo Producto</label>                                          
                        </div>
                    </div>                                                                         
                </div> 
            )
        }else{
            return <div />
        }        
    }
}