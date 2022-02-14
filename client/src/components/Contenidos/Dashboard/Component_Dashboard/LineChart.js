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
    if(this.props.estado == true ){
      return (
        <div className="App">        
          <button className='separacion' onClick={this.props.funcion}>
            Cambio de semestre
          </button>  
          <Chart type='line' 
            data= {{
              labels: ['Ene', 'Feb', 'Marzo', 'Abr', 'May', 'Jun'],
  
              datasets: this.props.data
            }}/>
        </div>
      )
    }else{
      return (
        <div className="App">
          <button className='separacion' onClick={this.props.funcion}>
            Cambio de semestre
          </button>  
          <Chart type='line' 
            data= {{
              labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov','Dic'],
  
              datasets: this.props.data
            }}/>
        </div>
      )
    }    
  }
}
