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

export default class BarChartVolum extends Component {

  state = {
    DataSem1: [],
    DataSem2: []
  }

  componentDidMount = async () => {
    
  }

  render() {
    return (
      <div className="App">        
        <Chart type='bar' 
          data= {{
            labels: this.props.labels,
            //labels : [2020,2021,2022]
            datasets: [
              {
                label: 'Cristal Master',
                data: [110000, 140000, 200000],
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.5)',
              },
              {
                label: 'JJplastaloy',
                data: [80000, 160000, 240000],
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.5)',
              },
              {
                label: 'Karina',
                data: [120000, 174020, 270000],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.5)',
              },
            ]
          }}/>
      </div>
    )
  }
}
