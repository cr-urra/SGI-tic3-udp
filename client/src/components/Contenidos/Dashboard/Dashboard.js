import React, { Component } from 'react';
import axios from 'axios';
import {barChart} from "./Component_Dashboard/BarChart"
import LineChart from "./Component_Dashboard/LineChart"

export default class Init extends Component {

    state = {
      estado_line: false,
      datasets:[],
      colors: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(75, 192, 192)' /* crear más colores */],
      bool : false
    }
    componentDidMount = async ()=>{
      const res = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io/getData/Barra",{});

      console.log('lo que viene del axio',res.data.reportsBAR);
      for (let i=0; i< res.data.reportsBAR.length; i++){
        let aux = {
          label: res.data.reportsBAR[i].name,
          data: res.data.reportsBAR[i].dataImport,
          backgroundColor: this.state.colors[i],
          borderColor: this.state.colors[i],
        }
        this.setState({
          datasets: [...this.state.datasets, aux]
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
    

    render() {
      if(this.state.bool){
        return (
          <main className="content">

              <div className="container bienvenida">
                <h1 className="display-4">DASHBOARD</h1>

                <LineChart data = {this.state.datasets} estado= {this.state.estado_line} funcion ={this.cambio_line} />
              </div>
     
          </main>
      )
      }else{
        return <div></div>
      }
        
    }
}
