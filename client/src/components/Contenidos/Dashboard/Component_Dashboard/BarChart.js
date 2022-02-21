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

  state = {
    DataSem1: [],
    DataSem2: []
  }

  componentDidMount = async () => {
    let aux, aux2;
    for(let i=0 ; i < this.props.data.length; i++){
      aux = {
        label: this.props.data[i].label,
        data: this.props.data[i].data.slice(0,6),
        backgroundColor: this.props.data[i].backgroundColor,
        borderColor: this.props.data[i].borderColor
      }
      aux2 = {
        label: this.props.data[i].label,
        data: this.props.data[i].data.slice(6,12),
        backgroundColor: this.props.data[i].backgroundColor,
        borderColor: this.props.data[i].borderColor
      }
      await this.setState({
        DataSem1: [...this.state.DataSem1, aux],
        DataSem2: [...this.state.DataSem2, aux2]
      })
    }
  }

  render() {
    if(this.props.estado == true ){
      return (
        <div className="App">        
          <Chart type='bar' 
            data= {{
              labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
              datasets: this.state.DataSem1
            }}/>
          <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.props.function}>Cambio de Semestre</button>
        </div>
      )
    }else{
      return (
        <div className="App">
          <Chart type='bar' 
            data= {{
              labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov','Dic'],
              datasets: this.state.DataSem2
            }}/>
          <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.props.function}>Cambio de Semestre</button>

        </div>
      )
    }    
  }
}
