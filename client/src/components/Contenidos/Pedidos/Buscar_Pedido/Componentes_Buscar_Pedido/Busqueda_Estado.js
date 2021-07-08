import React, { Component } from 'react'
import pedidos from '../../../../JasonDePruebas/Pedidos.json'
import Filtro from './FiltroEstado'
import axios from 'axios'

export default class Init extends Component {

  state = {
    pedidos: pedidos,
    filtro: "0",
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

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })        
  }

    render() {
        return (
          <li className="list-group-item">
              Busqueda por Estado
            <div className="container separacion">
              <div className="row">
                <div className="input-group no_flex">
                  <div className="col-2">
                    <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Estado</label>
                  </div>                  
                  <div className="col-4">
                    <select className="form-select ancho alto"  id="inputGroupSelect01" name="filtro" value={this.state.filtro} onChange={this.onChange}>
                      <option defaultValue value="0">Estado del Pedido</option>
                      <option value="produccion">En Producción</option>
                      <option value="internacional">En Transito (Internacional)</option>
                      <option value="ingreso">Ingreso al País</option>
                      <option value="nacional">En Transito (Nacional)</option>
                      <option value="finalizado">Finalizado</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Filtro Pedidos ={this.state.Pedidos} filtro = {this.state.filtro}/>                                           
          </li>
        )
    }
}
