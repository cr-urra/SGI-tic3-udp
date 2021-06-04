import React, { Component } from 'react'
import Head_Card from './Componentes_Pedido_Nacional/Head_Card'
import Costos from './Componentes_Pedido_Nacional/Costos'
import Datos_Produccion from './Componentes_Pedido_Nacional/Datos_Produccion'
import Datos_Internacional from './Componentes_Pedido_Nacional/Datos_Internacional'
import Datos_Ingreso from './Componentes_Pedido_Nacional/Datos_Ingreso'
import Datos_Nacional from './Componentes_Pedido_Nacional/Datos_Nacional'
import Observaciones from './Componentes_Pedido_Nacional/Observaciones'
import Crear_Observacion from './Componentes_Pedido_Nacional/Crear_Observacion'
import Estados from './Componentes_Pedido_Nacional/Estados'
import Requisitos from './Componentes_Pedido_Nacional/Requisistos'

export default class Init extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Pedido en Proceso de Ingresar a Aduana</h1>             
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
