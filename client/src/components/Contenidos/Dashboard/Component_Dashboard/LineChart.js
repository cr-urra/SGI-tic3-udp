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
  render() {
    return (
      <div className="App">
      <Chart type='line' data= {{
      labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov','Dic'],
      
      datasets: [
        {
          label: 'Karina',
          data: [160000, 140000, 200000, 150404, 207938,104872],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          
        },
        {
          label: 'JJplastaloy',
          data: [200000, 160000, 240000, 169040, 214892,111763],
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
          label: 'Cristal master',
          data: [230876, 180000, 210000, 159040, 234892,131763],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
        }
      ],
    }}/>
    </div>
    )
  }
}
