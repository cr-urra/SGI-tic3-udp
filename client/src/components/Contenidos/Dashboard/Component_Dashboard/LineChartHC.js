import React, { Component } from 'react'
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class LineChartHC extends Component {

    state = {
        dataSem1 : [],
        datasem2 : []
    }

    componentDidMount = async () =>{
      console.log("data props", this.props)
      let aux1, aux2;
      console.log('this is large prps',this.props.data.length)
      for (let i = 0; i<this.props.data.length;i++){
        aux1 = {
            name : this.props.data[i].name,
            data : this.props.data[i].data.slice(0,6)
        }
        aux2 = {
            name : this.props.data[i].name,
            data : this.props.data[i].data.slice(6,12)
        }
        await this.setState({
            dataSem1 : [...this.state.dataSem1, aux1],
            datasem2 : [...this.state.datasem2, aux2]
        })
      }
        console.log("este es la data de sem1", this.state.dataSem1)
        console.log("este es la data de sem2", this.state.datasem2)
    }

    render() {
      if(this.props.estado == true ){
        return (
          <div className="App">        
           <HighchartsReact
              highcharts={Highcharts}
              options = {{
                  title: {
                      text: 'Compras $USD Año Actual'
                    },
                    yAxis: {
                      title: {
                        text :'Texto de y'
                      }
                    },
                    xAxis:{
                      categories: [
                          'ene',
                          'Feb',
                          'Mar',
                          'Abr',
                          'May',
                          'Jun',
                      ]
                    },
                    legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'top'
                    },
                    series: this.state.dataSem1
              }}

           />
            <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.props.function}>Cambio de Semestre</button>
          </div>
        )
      }else{
        return (
          <div className="App">
            <HighchartsReact
            highcharts={Highcharts}
            options = {{
                title: {
                    text: 'Compras $USD Año Actual'
                  },
                  yAxis: {
                    title: {
                      text :'Texto de y'
                    }
                  },
                  xAxis:{
                    categories: [
                        'Jul',
                        'Ago',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dic',                          
                    ]
                  },
                  legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'top'
                  },
                  series: this.state.datasem2
            }}
            />
            <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.props.function}>Cambio de Semestre</button>
          </div>
        )
      }    
      }
}
