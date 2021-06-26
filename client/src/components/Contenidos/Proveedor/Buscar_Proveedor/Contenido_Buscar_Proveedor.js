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
          const proveedor = {
            nombre:  res.data.proveedores[i].nombre,
            pais:  res.data.proveedores[i].pais,
            banco:  "falta conectar el dato",
            direccion:  res.data.proveedores[i].direccion,
            correo:  res.data.proveedores[i].correo,
            moneda: res.data.proveedores[i].monedas_id,
            telefono:  "falta conectar el dato"
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
