import React, { Component } from 'react'
import Head_Card from './Componentes_Pedido_Produccion/Head_Card'
import Costos from './Componentes_Pedido_Produccion/Costos'
import Datos_Produccion from './Componentes_Pedido_Produccion/Datos_Produccion'
import Observaciones from './Componentes_Pedido_Produccion/Observaciones'
import Crear_Observacion from './Componentes_Pedido_Produccion/Crear_Observacion'
import Estados from './Componentes_Pedido_Produccion/Estados'
import Requisitos from './Componentes_Pedido_Produccion/Requisistos'

export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Pedido en Producción</h1>             
                <div className="container separacion">           
                  <div className="card border-primary mb-5 shadow-lg">

                    <Head_Card codigo={"Codigo A"} proveedor={"Proveedor A"} />

                    <div className="container separacion">
                      <Costos nombre={"Costos Productos"} n_costo={"Costo del Pedido Inicial"}/>
                      <Costos nombre={"Costos Acumulados"} n_costo={"Costo Total Actual"} />
                    </div>

                    <Datos_Produccion pago={"Pago A"} fecha={"Fecha A"} transporte={"Tipo A"} pago_inicial={"Pago A"} cambio={"Cambio A"} /> 

                    <Observaciones />

                    <Crear_Observacion />

                    <Estados contenido1={"En Producción"} contenido2={"En Tránsito (Internacional)"}/>

                    <Requisitos />

                    <button className="btn color_sitio2">
                      Cambiar Estado
                    </button>

                    

                  </div>
                </div> 
            </main>
        )
    }
}
