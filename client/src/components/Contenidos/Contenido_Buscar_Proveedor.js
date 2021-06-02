import React, { Component } from 'react';
import Listado from '../Componentes/Componentes_Proveedor/Listado';
import ProveedoresData from '../JasonDePruebas/Proveedores.json';
import Tabla from '../Componentes/Componentes_Proveedor/Tabla';





export default class Init extends Component {

    state= {
      proveedores: ProveedoresData,
      proveedor : "",
    }

    onChangeProveedor=(event)=>{
      this.setState({
        proveedor : event.target.value
      })
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Proveedor</h1>
                
                <Listado proveedoresData={this.state.proveedores} proveedor={this.state.proveedor} onChangeProveedor={this.onChangeProveedor}></Listado>

                <Tabla proveedoresData={this.state.proveedores} proveedor={this.state.proveedor}></Tabla>

            </main>
        )
    }
}
