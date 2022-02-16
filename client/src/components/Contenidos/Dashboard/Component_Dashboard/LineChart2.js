import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export default class LineChart extends Component {

  state = {
    datasets: [],
    bool : false
  }

  componentDidMount = async ()=>{
    let aux = {
      label: "Compras en $USD",
      data: [
        this.props.data.Produccion.amount,
        this.props.data.TransInter.amount,
        this.props.data.IngresoPais.amount,
        this.props.data.TransNacional.amount
      ],
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)' 
    }
    this.setState({
      datasets: [...this.state.datasets, aux]
    })

  }

  render() {
      return (
        <div className="App">        
          <Chart type='line' 
            data= {{
              labels: ['En produccion', 'Trans. Inter', 'Ingreso Pais', 'Trans. Nacio'],
  
              datasets: this.state.datasets
            }}/>
        </div>
      ) 
  }
}
