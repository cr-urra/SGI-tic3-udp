import React, { Component } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default class DoughnutChart extends Component {

  state ={
    datasets : []
  }
  componentDidMount = async () =>{
    console.log(this.props.data)
    let aux = {
      cutout: '40%',
      radius: '80%',
      label: 'Cantidad de importacion',
      data: [
        this.props.data.Produccion.total,
        this.props.data.TransInter.total,
        this.props.data.IngresoPais.total,
        this.props.data.TransNacional.total,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
    }
    this.setState({
      datasets: [...this.state.datasets, aux]
    })



  }
  render() {
    return <div>
      <Doughnut data={{
        labels: ['En Produccion', 'Trans. Inter', 'Ingreso Pais', 'Trans. Nacion'],
        datasets : this.state.datasets
      }    
        } />
    </div>;
  }
}
