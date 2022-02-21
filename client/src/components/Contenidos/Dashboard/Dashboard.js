import React, { Component } from 'react';
import axios from 'axios';
import {barChart} from "./Component_Dashboard/BarChart"
import LineChart from "./Component_Dashboard/LineChart"
import LineChart2 from "./Component_Dashboard/LineChart2"
import BarChart from "./Component_Dashboard/BarChart"
import DoughnutChart from './Component_Dashboard/DoughnutChart';
import BarChartVolum from './Component_Dashboard/BarChartVolum';
import BarChartProduct from './Component_Dashboard/BarChartProduct';
import databar from '../../JasonDePruebas/reportbar.json'
import datadonuts from '../../JasonDePruebas/reportdonuts.json'
import datavolum from '../../JasonDePruebas/reportbarVol.json'
import dataproductt from '../../JasonDePruebas/reportbarProduc.json'

export default class Init extends Component {

    state = {
      estado_line: false,
      estado_bar : false,
      datasets:[],
      datasetsBarra: [],
      dataDonuts : null,
      datasetsBarraVolum: [],
      ProveedoresVolumen: [],
      labelsBarraVol : [],
      datasetsBarraProduc: [],
      colors: [
        'rgba(255, 99, 132)', 
        'rgba(54, 162, 235)', 
        'rgba(75, 192, 192)',
        'rgba(255, 206, 86)',
        'rgba(255, 159, 64)',
        'rgba(153, 102, 255)'
         /* crear más colores */],
      bool : false
    }
    componentDidMount = async ()=>{
      //const resBar = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io/getData/barritas",{});
      const resBar = databar
      console.log("ResBAr",resBar)

      //const resDough = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io//getData/Donuts",{});
      const resDough = datadonuts
      console.log("RespDough",resDough)

      //const resBarVol = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io//getData/Volumenes",{});
      const resBarVol = datavolum
      console.log("RespBarVol",resBarVol)

      //const resBarProdu = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io//getData/Product",{});
      const resBarProdu = dataproductt
      console.log("RespBarProdu", resBarProdu)

      const DataPedidos = await axios.get("http://localhost:4000/pedidos/dashboards",{});
      console.log("Data de pedidos",DataPedidos)

      
      let arrayAux2 = []
      let dataPedidos = []
      let arrayMeses = new Array(12)
      for(let i =0 ; i<12;i++){
        arrayMeses[i] = []
      }
      let arrayProveedores = []
      let cantidad =0;

      for(let x=0; x<DataPedidos.data.pedidos.length;x++){
        console.log("Pedidos",DataPedidos.data.pedidos[x])
        console.log("Fecha llegada real",DataPedidos.data.pedidos[x].fecha_llegada_real)
        const fecha = new Date(DataPedidos.data.pedidos[x].fecha_llegada_real)
        let Mes = fecha.getMonth()+1
        console.log("Meses de las fechas",Mes)
        let Proveeedor = DataPedidos.data.pedidos[x].proveedore.nombre
        console.log("Proveedoor", Proveeedor)

        for(let i = 0; i<DataPedidos.data.pedidos[x].tienes.length; i++){
          cantidad = DataPedidos.data.pedidos[x].tienes[i].cantidad
          console.log("Cantidad Por pedido KG", cantidad)
        }

        let aux ={
          mes : Mes,
          Proveeedor: Proveeedor,
          cantidadd: cantidad 
        }
        //arrayMeses[Mes] = []
        arrayMeses[Mes].push(aux)
        console.log("ESTA SADSAF",arrayMeses)
        //arrayMeses.splice(Mes,0,aux)
      }
      console.log("ESTE ES EL ARRAY AUX", arrayMeses)

      for (let i = 0; i<resBarVol.reportsBarVol.length; i++){
        let aux3 = resBarVol.reportsBarVol[i].año
        for(let x = 0; x<resBarVol.reportsBarVol[i].Proveedor.length; x++){
          //console.log(resBarVol.data.reportsBarVol[i].Proveedor[x])
          
          let auxData = {
            label: resBarVol.reportsBarVol[i].Proveedor[x].name,
            data: resBarVol.reportsBarVol[i].Proveedor[x].total
          }
          await this.setState({
            datasetsBarraVolum: [...this.state.datasetsBarraVolum,auxData]
          })
        }
        
        await this.setState({
          labelsBarraVol: [...this.state.labelsBarraVol, aux3]
        })
      }
      
      for(let i = 0; i<resBarProdu.reportProduct.length; i++){
        let auxProd = {
          label: resBarProdu.reportProduct[i].name,
          data: resBarProdu.reportProduct[i].total,
          backgroundColor: this.state.colors[i]
        }

        await this.setState({
          datasetsBarraProduc: [...this.state.datasetsBarraProduc,auxProd]
        })
      }
      await this.setState({
        dataDonuts: resDough.reportsDonuts
      })
      for (let i=0; i< resBar.reportsBAR.length; i++){
        let aux = {
          label: resBar.reportsBAR[i].name,
          data: resBar.reportsBAR[i].buyActualYear,
          backgroundColor: this.state.colors[i],
          borderColor: this.state.colors[i],
        }
        let auxBarra = {
          label: resBar.reportsBAR[i].name,
          data: resBar.reportsBAR[i].dataImport,
          backgroundColor: this.state.colors[i],
          borderColor: this.state.colors[i],
        }
        
        await this.setState({
          datasets: [...this.state.datasets, aux],
          datasetsBarra: [...this.state.datasetsBarra, auxBarra]
        })
      }

      
      this.setState({
        bool: true
      })
    }

    cambio_line  = (e) => {    
      this.setState(prevState =>({
          estado_line: !this.state.estado_line
      }))
    }

    cambio_bar  = (e) => {    
      this.setState(prevState =>({
          estado_bar: !this.state.estado_bar
      }))
    }
    

    render() {
      if(this.state.bool){
        return (
          <main className="content">
              <div className="container bienvenida">
                <h1 className="display-4">DASHBOARD</h1>
                <div className ="container">
                  <div className="card-header" style={{textAlign:'center'}}>
                      Cantidad de importacion por proveedor en KG
                  </div>
                  <BarChart data = {this.state.datasetsBarra} estado= {this.state.estado_bar} function = {this.cambio_bar}></BarChart>
                </div>
                <div className = "container">
                  <div className="card-header" style={{textAlign:'center'}}>
                    Compras $USD Año Actual
                  </div>
                  <LineChart data = {this.state.datasets} estado= {this.state.estado_line} funcion ={this.cambio_line} />
                </div>
                <div className = "container">
                  <div className="card-header" style={{textAlign:'center'}}>
                    Estados de los pedidos Activos actuales
                  </div>
                  <DoughnutChart data = {this.state.dataDonuts}/>
                </div>
                <div className = "container">
                  <div className="card-header" style={{textAlign:'center'}}>
                    Pedidos activos en Dolares
                  </div>
                  <LineChart2 data = {this.state.dataDonuts}/>
                </div>
                <div className ="container">
                  <div className="card-header" style={{textAlign:'center'}}>
                    Volumen de importacion KG
                  </div>
                  <BarChartVolum labels = {this.state.labelsBarraVol}/>
                </div>
                <div className ="container">
                  <div className="card-header" style={{textAlign:'center'}}>
                    Importado por productos 2022
                  </div>
                  <BarChartProduct data = {this.state.datasetsBarraProduc}></BarChartProduct>
                </div>

              </div>
          </main>
      )
      }else{
        return <div></div>
      }
        
    }
}
