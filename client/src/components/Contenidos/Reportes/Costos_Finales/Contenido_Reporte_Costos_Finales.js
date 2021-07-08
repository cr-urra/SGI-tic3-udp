import React, { Component } from 'react'
import Listado from './Componentes/Listado'
import Filtrado from './Componentes/Filtrado'
import axios from 'axios'


export default class Init extends Component {

    state = {
      proveedores: [],
      proveedor: null,
      id: null
    }

    componentDidMount = async () => {
      const res = await axios.get("/proveedores/",{})        
      for (let i= 0; i < res.data.proveedores.length ; i++){
          const proveedor = {
            nombre:  res.data.proveedores[i].nombre,
            id: res.data.proveedores[i].id
          }
          this.setState({
            proveedores: [...this.state.proveedores, proveedor]
          })
      }
    }

    onChangeProveedor = async (event) => {
      for (let i= 0; i < this.state.proveedores.length ; i++){
        if(this.state.proveedores[i].nombre===event.target.value){
          console.log(this.state.proveedores[i].id,"revisa aquiiiii")
          this.setState({            
            id: this.state.proveedores[i].id
          })
        }        
      }
      this.setState({
        proveedor : event.target.value
      })
      
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Reporte de Costos Por Proveedor</h1>
                <Listado Proveedores={this.state.proveedores} Proveedor={this.state.proveedor} onChangeProveedor={this.onChangeProveedor}/>

                <Filtrado Proveedores={this.state.proveedores} Proveedor={this.state.proveedor} id={this.state.id}/>
                    
            </main>
        )
    }
}
