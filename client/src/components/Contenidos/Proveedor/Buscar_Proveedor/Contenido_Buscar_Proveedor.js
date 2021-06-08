import React, { Component } from 'react';
import Listado from './Componentes_Buscar_Proveedor/Listado';
import ProveedoresData from '../../../JasonDePruebas/Proveedores.json';
import Tabla from './Componentes_Buscar_Proveedor/Tabla';
import Editar_proveedor from './Componentes_Buscar_Proveedor/Editar_Proveedor'


export default class Init extends Component {

    state= {
      proveedores: ProveedoresData,
      proveedor : "",
      editar: "false",
    }

    change = (event) =>{
      this.setState({
        editar : event.target.value
      })

    }

    onChangeProveedor=(event)=>{
      this.setState({
        proveedor : event.target.value
      })
    }

    render() {

      if(this.state.editar === "true"){
        return (
          <main className="content">
              <h1 className="display-5 titulo">Editar Proveedor {this.state.banco}</h1>
              <Editar_proveedor proveedores={this.state.proveedores} proveedor = {this.state.proveedor} change = {this.change}/>
          </main>
        )
      }else{
        return (
          <main className="content">
              <h1 className="display-5 titulo">Buscar Proveedor</h1>
              
              <Listado proveedoresData={this.state.proveedores} proveedor={this.state.proveedor} onChangeProveedor={this.onChangeProveedor}></Listado>

              <Tabla proveedoresData={this.state.proveedores} proveedor={this.state.proveedor} change={this.change}></Tabla>

          </main>
      )

      }
        
    }
}
