import React, { Component } from 'react';
import axios from 'axios';
import {barChart} from "./Component_Dashboard/BarChart"
import LineChart from "./Component_Dashboard/LineChart"

export default class Init extends Component {

    state = {
      estado_line: false,
      datasets:[],
      colors: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(75, 192, 192)' /* crear más colores */]
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
    }

    cambio_line  = (e) => {    
      this.setState(prevState =>({
          estado_line: !this.state.estado_line
      }))
    }
    

    render() {
        return (
            <main className="content">
            <div className="jumbotron jumbotron-fluid">
                <div className="container bienvenida">
                  <h1 className="display-4">BIENVENIDO A SGI</h1>
                  <p className="lead">DASHBOARD</p>
                  <LineChart data = {this.state.datasets} estado= {this.state.estado_line} funcion ={this.cambio_line} />
              
                </div>
            </div>
            </main>
        )
    }
}
