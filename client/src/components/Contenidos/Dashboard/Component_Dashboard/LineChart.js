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

  componentDidMount = ()=>{
    console.log("este es el props de line chart", this.props.data[1])

    for(let i=0; i<this.props.data.length; i++){
      let aux = {
        label: this.props.data[i].label,
        data: this.props.data[i].data.slice(0,5),
        backgroundColor: this.props.data[i].backgroundColor,
        borderColor: this.props.data[i].borderColor
      }
      let aux2 = {
        label: this.props.data[i].label,
        data: this.props.data[i].data.slice(6,11),
        backgroundColor: this.props.data[i].backgroundColor,
        borderColor: this.props.data[i].borderColor
      }
      this.setState({
        DataSem1: [...this.state.DataSem1, aux]
      })
      this.setState({
        DataSem2: [...this.state.DataSem2, aux2]
      })
    }   
    console.log("data sem1",this.state.DataSem1)
    console.log("data sem2",this.state.DataSem2)

  }

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
  
              datasets: this.state.DataSem1
            }}/>
            {console.log("data de prosp sem1",this.state.DataSem1)}
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
  
              datasets: this.state.DataSem2
            }}/>
        </div>
      )
    }    
  }
}
