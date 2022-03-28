import React, { Component } from 'react';
import Listado from './Componentes_Buscar_Proveedor/Listado';
import Tabla from './Componentes_Buscar_Proveedor/Tabla';
import Editar_proveedor from './Componentes_Buscar_Proveedor/Editar_Proveedor'
import axios from 'axios'
import Carga from './Carga'


export default class Init extends Component {

    state= {
      proveedores: [],
      proveedor : "",
      editar: "false",
      carga: false
    }

    onRechargeData = async () => {
      this.setState({
        proveedores: [],
        proveedor : "",
        editar: "false",
        carga: false
      })
      const res = await axios.get("/proveedores/",{})
      for (let i= 0; i < res.data.proveedores.length ; i++){
          const moneda = await axios.get("/monedas/"+res.data.proveedores[i].monedas_id,{})
          const Banco = await axios.get("/cuentasBancos/"+res.data.proveedores[i].cuentas_bancos_id,{}) 
          const Telefono = await axios.get("/telefonosProveedores/proveedores/"+res.data.proveedores[i].id,{})
          const proveedor = {
            id: res.data.proveedores[i].id,
            nombre:  res.data.proveedores[i].nombre,
            pais:  res.data.proveedores[i].pais,
            banco:  Banco.data.cuentas_bancos.nombre_banco,
            id_banco: Banco.data.cuentas_bancos.id,
            direccion:  res.data.proveedores[i].direccion,
            correo:  res.data.proveedores[i].correo,
            moneda: moneda.data.monedas.pais + "-" +moneda.data.monedas.moneda,
            telefono:  Telefono.data.telefono.telefono
          }
          this.setState({
            proveedores: [...this.state.proveedores, proveedor]
          })
      }
      await this.setState({
        carga: true
      })
    }

    componentDidMount = async () => {
      const res = await axios.get("/proveedores/",{})
      for (let i= 0; i < res.data.proveedores.length ; i++){
          const moneda = await axios.get("/monedas/"+res.data.proveedores[i].monedas_id,{})
          const Banco = await axios.get("/cuentasBancos/"+res.data.proveedores[i].cuentas_bancos_id,{}) 
          const Telefono = await axios.get("/telefonosProveedores/proveedores/"+res.data.proveedores[i].id,{})
          const proveedor = {
            id: res.data.proveedores[i].id,
            nombre:  res.data.proveedores[i].nombre,
            pais:  res.data.proveedores[i].pais,
            banco:  Banco.data.cuentas_bancos.nombre_banco,
            id_banco: Banco.data.cuentas_bancos.id,
            direccion:  res.data.proveedores[i].direccion,
            correo:  res.data.proveedores[i].correo,
            moneda: moneda.data.monedas.pais + "-" +moneda.data.monedas.moneda,
            telefono:  Telefono.data.telefono.telefono
          }
          this.setState({
            proveedores: [...this.state.proveedores, proveedor]
          })
      }
      await this.setState({
        carga: true
      })
    }

    change = (event) => {
      this.setState({
        editar : event.target.value
      })
    }

    onChangeProveedor = (event) => {
      this.setState({
        proveedor : event.target.value
      })
    }

    onResetProveedor = (event) => {
      this.setState({
        proveedor : ""
      })
    }

    render() {
      if(this.state.carga==true){
        if(this.state.editar === "true"){
          return (
            <main className="content">
                <h1 className="display-5 titulo">Editar Proveedor {this.state.banco}</h1>
                <Editar_proveedor proveedores={this.state.proveedores} proveedor = {this.state.proveedor} change = {this.change} onRechargeData = {this.onRechargeData} />
            </main>
          )
        }else{
          return (
            <main className="content">
                <h1 className="display-5 titulo">Buscar Proveedor</h1>
                <Listado proveedoresData={this.state.proveedores} proveedor={this.state.proveedor} onChangeProveedor={this.onChangeProveedor}/>
                <Tabla proveedoresData={this.state.proveedores} proveedor={this.state.proveedor} change={this.change} onResetProveedor = {this.onResetProveedor} onRechargeData = {this.onRechargeData}/>
            </main>
          )
        }
      }else{
        return(
          <Carga/>
        )
      }
    }
}
