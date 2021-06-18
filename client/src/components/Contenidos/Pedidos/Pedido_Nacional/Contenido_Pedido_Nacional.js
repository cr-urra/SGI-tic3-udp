import React, { Component } from 'react'
import Head_Card from '../Pedido_Componentes/Head_Card'
import Costos from '../Pedido_Componentes/Costos'
import Datos_Produccion from '../Pedido_Componentes/Datos_Produccion'
import Datos_Internacional from '../Pedido_Componentes/Datos_Internacional'
import Datos_Ingreso from '../Pedido_Componentes/Datos_Ingreso'
import Datos_Nacional from '../Pedido_Componentes/Datos_Nacional'
import Observaciones from '../Pedido_Componentes/Observaciones'
import Gastos from '../Pedido_Componentes/Gastos'
import Crear_Observacion from '../Pedido_Componentes/Crear_Observacion'
import Estados from '../Pedido_Componentes/Estados'

export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Pedido en Tránsito Nacional</h1>             
                <div className="container separacion">           
                  <div className="card border-primary mb-5 shadow-lg">

                    <Head_Card codigo={"Codigo A"} proveedor={"Proveedor A"} />

                    <div className="container separacion">
                      <Costos nombre={"Costos Productos"} n_costo={"Costo del Pedido Inicial"}/>
                      <Costos nombre={"Costos Acumulados"} n_costo={"Costo Total Actual"} />
                    </div>

                    <Datos_Produccion pago={"Pago A"} fecha={"Fecha A"} transporte={"Tipo A"} pago_inicial={"Pago A"} cambio={"Cambio A"} /> 

                    <Datos_Internacional salida={"00-00-0000"} arribo={"00-00-0000"} adjuntos={"Archivos Adjuntos"}/>

                    <Datos_Ingreso pago={"Pago A"} cambio={"Cambio A"} agente={"Agente A"} abono={"Abono A"} din={"DIN A"} />

                    <Datos_Nacional iva={"IVA A"} dolar_aduana={"Valor Dolar A"} />

                    <Observaciones />

                    <Gastos />

                    <Crear_Observacion />

                    <Estados contenido1={"En Tránsito (Nacional)"} contenido2={"Finalizado"}/>


                    <button className="btn color_sitio2">
                      Finalizar Pedido
                    </button>

                    

                  </div>
                </div> 
            </main>
        )
    }
}
