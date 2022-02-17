import React, { Component } from 'react';
import axios from 'axios';
import {barChart} from "./Component_Dashboard/BarChart"
import LineChart from "./Component_Dashboard/LineChart"
import LineChart2 from "./Component_Dashboard/LineChart2"
import BarChart from "./Component_Dashboard/BarChart"
import DoughnutChart from './Component_Dashboard/DoughnutChart';

export default class Init extends Component {

    state = {
      estado_line: false,
      estado_bar : false,
      datasets:[],
      datasetsBarra: [],
      dataDonuts : null,
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
      const resBar = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io/getData/Barras",{});
      console.log(resBar)

      const resDough = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io//getData/Donuts",{});
      console.log("RespDough",resDough)
      await this.setState({
        dataDonuts: resDough.data.reportsDonuts
      })
      for (let i=0; i< resBar.data.reportsBAR.length; i++){
        let aux = {
          label: resBar.data.reportsBAR[i].name,
          data: resBar.data.reportsBAR[i].buyActualYear,
          backgroundColor: this.state.colors[i],
          borderColor: this.state.colors[i],
        }
        let auxBarra = {
          label: resBar.data.reportsBAR[i].name,
          data: resBar.data.reportsBAR[i].dataImport,
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

              </div>
          </main>
      )
      }else{
        return <div></div>
      }
        
    }
}
