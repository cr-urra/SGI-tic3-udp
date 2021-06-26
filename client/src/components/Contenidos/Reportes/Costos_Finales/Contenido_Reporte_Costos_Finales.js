import React, { Component } from 'react'
import Proveedores from '../../../JasonDePruebas/Proveedores.json'
import Listado from './Componentes/Listado'
import Filtrado from './Componentes/Filtrado'


export default class Init extends Component {

    state = {
      proveedores: Proveedores,
      proveedor: null,
    }

    onChangeProveedor = (event) => {
      this.setState({
        proveedor : event.target.value
      })
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Reporte de Costos Por Proveedor</h1>
                <Listado Proveedores={this.state.proveedores} Proveedor={this.state.proveedor} onChangeProveedor={this.onChangeProveedor}/>

                <Filtrado Proveedores={this.state.proveedores} Proveedor={this.state.proveedor} />
                    
            </main>
        )
    }
}
