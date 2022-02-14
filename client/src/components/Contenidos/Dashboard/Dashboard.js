import React, { Component } from 'react';
import axios from 'axios';
import {barChart} from "./Component_Dashboard/BarChart"
import LineChart from "./Component_Dashboard/LineChart"

export default class Init extends Component {

    state = {
      labels:['Ene', 'Feb', 'Marzo', 'Abr', 'May', 'Jun'],
      datasets:[{}]
    }
    componentDidMount = async ()=>{
      const res = await axios.get("https://00667823-85a6-4c7d-bdcb-6260eb99f8ac.mock.pstmn.io/getData/Barra",{});
      this.setState({
        LineChart: res.data.reportsBAR
      })
      console.log('lo que viene del axio',res.data.reportsBAR);
      let aux =[]
      let aux2 =[]
      let backgroundColor = 'rgb(255, 99, 132)'
      res.data.reportsBAR.forEach((element)=>{
        aux.push(element.name)
        aux2.push(element.dataImport)
      })

      console.log('Aux',aux)
      console.log('aux2',aux2)
      
    }
    

    render() {
        return (
            <main className="content">
            <div className="jumbotron jumbotron-fluid">
                <div className="container bienvenida">
                  <h1 className="display-4">BIENVENIDO A SGI</h1>
                  <p className="lead">DASHBOARD</p>
                  <LineChart data = {this.state} />
                  <barChart/>
                </div>
            </div>
            </main>
        )
    }
}
