import React, { Component } from 'react';
import Listado from './Componentes_Buscar_Proveedor/Listado';
import Tabla from './Componentes_Buscar_Proveedor/Tabla';
import Editar_proveedor from './Componentes_Buscar_Proveedor/Editar_Proveedor'
import axios from 'axios'


export default class Init extends Component {

    state= {
      proveedores: [],
      proveedor : "",
      editar: "false",
    }

    componentDidMount = async () => {
      const res = await axios.get("/proveedores/",{})
      console.log(res,"proveedores");
      for (let i= 0; i < res.data.proveedores.length ; i++){
          const moneda = await axios.get("/monedas/"+res.data.proveedores[i].monedas_id,{})
          const Banco = await axios.get("/cuentasBancos/proveedores/"+res.data.proveedores[i].id,{}) 
          const Telefono = await axios.get("/telefonosProveedores/proveedores/"+res.data.proveedores[i].id,{})
          console.log(Banco,"banco")
          console.log(Telefono,"telefono")
          const proveedor = {
            nombre:  res.data.proveedores[i].nombre,
            pais:  res.data.proveedores[i].pais,
            banco:  Banco.data.cuentas_bancos.nombre_banco,
            direccion:  res.data.proveedores[i].direccion,
            correo:  res.data.proveedores[i].correo,
            moneda: moneda.data.monedas.pais + "-" +moneda.data.monedas.moneda,
            telefono:  Telefono.data.telefono.telefono
          }
          this.setState({
            proveedores: [...this.state.proveedores, proveedor]
          })
      }
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
