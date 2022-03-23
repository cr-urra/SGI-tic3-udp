import React, { Component } from 'react'
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class BarChartHC extends Component {

  state = {
    DataSem1HC: [],
    DataSem2HC: []
  }
  componentDidMount = async () =>{
    console.log("este es el props de mi HC", this.props.data)
    let auxHC, aux2HC;
    for(let i=0 ; i < this.props.data.length; i++){
      auxHC = {
        name: this.props.data[i].name,
        data: this.props.data[i].data.slice(0,6),
      }

      aux2HC = {
        name: this.props.data[i].name,
        data: this.props.data[i].data.slice(6,12),
      }
      await this.setState({
        DataSem1HC: [...this.state.DataSem1HC, auxHC],
        DataSem2HC: [...this.state.DataSem2HC, aux2HC]
      })
    }
  }

  render() {
    if(this.props.estado == false ){
      return (
        <div className="App">        
          <HighchartsReact
              highcharts={Highcharts}
              options= {{
                chart: {
                  type: 'column'
                },
                title: {
                    text: 'Cantidad de importacion por proveedor en KG'
                },
                xAxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad (KG)'
                    }
                },
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'top'
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} KG</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: this.state.DataSem1HC
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
              options= {{
                chart: {
                  type: 'column'
                },
                title: {
                    text: 'Cantidad de importacion por proveedor en KG'
                },
                xAxis: {
                    categories: [
                        'Jul',
                        'Ago',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dic',
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad (KG)'
                    }
                },
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'top'
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} KG</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: this.state.DataSem2HC
              }}
          />
          {console.log("este es el la data de ssem2",this.state.DataSem2HC)}
          <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.props.function}>Cambio de Semestre</button>
            
        </div>
      )
    }  
  }
}
