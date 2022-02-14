import React, { Component } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

import { Chart } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default class BarChart extends Component {
  render() {
    return (
      <div className="App">
      <Chart type='bar' data= {{
      labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov','Dic'],
      
      datasets: [
        {
          label: 'Karina',
          data: [160000, 140000, 200000, 150404, 207938,104872],
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'JJplastaloy',
          data: [200000, 160000, 240000, 169040, 214892,111763],
          backgroundColor: 'rgb(54, 162, 235)',
        },
        {
          label: 'Cristal master',
          data: [230876, 180000, 210000, 159040, 234892,131763],
          backgroundColor: 'rgb(75, 192, 192)',
        }
      ],
    }}/>
    </div>
    )
  }
}
