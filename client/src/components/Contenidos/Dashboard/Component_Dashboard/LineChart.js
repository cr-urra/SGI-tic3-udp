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
    DataSem1: [],
    DataSem2: []
  }

  componentDidMount = async ()=>{
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
          <Chart type='line' 
            data= {{
              labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
              datasets: this.state.DataSem1
            }}/>
          <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.props.funcion}>Cambio de Semestre</button>
        </div>
      )
    }else{
      return (
        <div className="App">
          <Chart type='line' 
            data= {{
              labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov','Dic'],
              datasets: this.state.DataSem2
            }}/>
          <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.props.funcion}>Cambio de Semestre</button>

        </div>
      )
    }    
  }
}
