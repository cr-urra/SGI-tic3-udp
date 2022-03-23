import React, { Component } from 'react';
import axios from 'axios';
import databar from '../../JasonDePruebas/reportbar.json'
import datadonuts from '../../JasonDePruebas/reportdonuts.json'
import datavolum from '../../JasonDePruebas/reportbarVol.json'
import dataproductt from '../../JasonDePruebas/reportbarProduc.json'
import BarChartHC from './Component_Dashboard/BarChartHC';
import LineChartHC from './Component_Dashboard/LineChartHC';
import DoughnutChartHC from './Component_Dashboard/DoughnutChartHC';
import LineChart2HC from './Component_Dashboard/LineChart2HC';
import BarChartProductHC from './Component_Dashboard/BarChartProductHC';
import BarChartVolumHC from './Component_Dashboard/BarChartVolumHC';

export default class Init extends Component {

    state = {
      estado_barHC: false,
      estado_lineHC : true,
      datasetsBarra: [],
      dataBarraHC : [],
      dataLineHC : [],
      dataDonuts : null,
      datasetsBarraVolum: [],
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
      const resBar = databar
      console.log("ResBAr",resBar)

      const resDough = datadonuts
      console.log("RespDough",resDough)

      const resBarVol = datavolum
      console.log("RespBarVol",resBarVol)

      const resBarProdu = dataproductt
      console.log("RespBarProdu", resBarProdu)

      const DataPedidos = await axios.get("http://localhost:4000/pedidos/dashboards",{});
      console.log("Data de pedidos",DataPedidos)
      
      for(let i = 0; i<resBarProdu.reportProduct.length; i++){
        let auxProd = {
          name: resBarProdu.reportProduct[i].name,
          data: resBarProdu.reportProduct[i].total
        }
        await this.setState({
          datasetsBarraProduc: [...this.state.datasetsBarraProduc,auxProd]
        })
      }
      await this.setState({
        dataDonuts: resDough.reportsDonuts
      })
      await this.setState({
        datasetsBarraVolum: resBarVol.reportsBarVol
      })
      for (let i =0; i<resBar.reportsBAR.length;i++){
        let auxxx = {
          name:resBar.reportsBAR[i].name,
          data:resBar.reportsBAR[i].dataImport
        }
        let auxdataHC = {
          name: resBar.reportsBAR[i].name,
          data : resBar.reportsBAR[i].buyActualYear
        }
        await this.setState({
          dataBarraHC: [...this.state.dataBarraHC,auxxx],
          dataLineHC : [...this.state.dataLineHC,auxdataHC]
        })
      }
      console.log('esta es la data para grafico barra HC',this.state.dataBarraHC)
      console.log('esta es la data para grafico lineal HC',this.state.dataLineHC)
      this.setState({
        bool: true
      })
    }

    cambio_barHC  = (e) => {    
      this.setState(prevState =>({
          estado_barHC: !this.state.estado_barHC
      }))
    }
    cambio_lineHC  = (e) => {    
      this.setState(prevState =>({
          estado_lineHC: !this.state.estado_lineHC
      }))
    }
    render() {
      if(this.state.bool){
        return (
          <main className="content">
              <div className="container bienvenida">
                <h1 className="display-4 mb-2" style={{textAlign:'center'}}>DASHBOARD</h1>
                <div className ="container">
                  <BarChartHC data = {this.state.dataBarraHC} estado= {this.state.estado_barHC} function = {this.cambio_barHC}></BarChartHC>
                </div>
                <div className ="container">
                  <LineChartHC data = {this.state.dataLineHC} estado= {this.state.estado_lineHC} function = {this.cambio_lineHC}></LineChartHC>
                </div>
                <div className ="container">
                  <DoughnutChartHC data={this.state.dataDonuts}></DoughnutChartHC>
                </div>
                <div className ="container">
                  <LineChart2HC data = {this.state.dataDonuts}></LineChart2HC>
                </div>
                <div className ="container">
                  <BarChartVolumHC data = {this.state.datasetsBarraVolum}></BarChartVolumHC>
                </div>
                <div className ="container">
                  <BarChartProductHC data = {this.state.datasetsBarraProduc}></BarChartProductHC>
                </div>
              </div>
          </main>
      )
      }else{
        return <div></div>
      }
    }
}
