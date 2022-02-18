import React, { Component } from 'react'
import Filtro from './FiltroFecha'
import axios from 'axios'


export default class Init extends Component {

    state ={
      dia1: null,
      dia2: null,
      mes1: null,
      mes2: null,
      año1: null,
      año2: null,
      fecha1: null,
      fecha2: null,
      Pedidos: []
    }
  
    componentDidMount = async () => {
      const res = await axios.get("/pedidos/",{})
      console.log(res,"Did Mount")    
      for(let i=0; i < res.data.pedidos.length; i++){
        const res2= await axios.get("/proveedores/"+res.data.pedidos[i].proveedores_id,{})
        const res3= await axios.get("/tiene/pedidos/"+res.data.pedidos[i].id,{})
        let productos = []
        let producto
        for(let j=0;  j < res3.data.tiene.length;j++){
          const precio = await axios.get("/historialPrecios/maxDate/"+res3.data.tiene[j].productos_id,{})  
          producto = { producto: res3.data.tiene[j] , precio: precio.data.historialPrecios.precio}
          productos = [...productos,producto]
        }      
        console.log(res3,"Did Mount3")      
        const pedido = {
          pedido:  res.data.pedidos[i],
          n_pedido: res.data.pedidos[i].codigo,
          proveedor: res2.data.proveedores.nombre,
          tipo_pago: res.data.pedidos[i].tipo_pago,
          fecha_entrega: res.data.pedidos[i].fecha_inicial,
          tipo_transporte: res.data.pedidos[i].tipo_de_envio,
          pago_transporte: res.data.pedidos[i].valor_cif,
          pago_inicial: res.data.pedidos[i].pago_inicial,
          cambio_inicial: "dato faltante base",
          estado: res.data.pedidos[i].estado,
          productos: productos
        }
        this.setState({
          Pedidos: [...this.state.Pedidos,pedido]
        })
      }
    }

    d_filtrar = () =>{
      this.setState({
        fecha1: null,
        fecha2: null
      })
      
    }

    onChange = e =>{
      if(e.target.name == "fecha1") alert(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
        return (
          <li className="list-group-item">            
              Busqueda por Fecha
              <div className="row mt-4" >
                <div className="col-4 text-center">
                  <span className="text-center"> Filtrar fechas</span>                  
                </div>
                <div className="col-8">
                  <div className="input-group mb-3">
                      <div className="col-3 mb-2">
                          <div className="input-group-prepend ancho2">
                              <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                          </div>
                      </div>                     
              
                      <div className="col-xs-12 col-md-9 col-lg-9">
                          <input 
                          type="date" 
                          name="fecha1"
                          className="form-control"
                          placeholder="AAAA" 
                          aria-label="Default" 
                          aria-describedby="inputGroup-sizing-default"
                          onChange={this.onChange}
                          value={this.state.fecha1}
                          />
                      </div>
                    </div>  
                    <div className="input-group mb-3">
                      <div className="col-3 mb-2">
                          <div className="input-group-prepend ancho2">
                              <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                          </div>
                      </div>
                      
                      <div className="col-xs-12 col-md-9 col-lg-9">
                          <input 
                          type="date" 
                          name="fecha2"
                          className="form-control" 
                          placeholder="AAAA"
                          aria-label="Default" 
                          aria-describedby="inputGroup-sizing-default"
                          onChange={this.onChange}
                          value={this.state.fecha2}
                          />
                      </div>
                    </div>  
                    <div className="input-group mb-3 aling-end">
                      <div className="col-8"/>
                      <div className="col-3">
                        <button className="btn btn-danger" onClick={this.d_filtrar}>Borrar Filtro</button>
                      </div>                      
                    </div>
                </div>
              </div>
              <Filtro Pedidos={this.state.Pedidos} fecha1 ={this.state.fecha1} fecha2 ={this.state.fecha2} /> 
          </li>
        )
    }
}
