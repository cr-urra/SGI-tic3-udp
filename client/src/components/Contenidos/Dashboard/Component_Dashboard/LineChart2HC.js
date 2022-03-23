import React, { Component } from 'react'
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class LineChart2HC extends Component {
  render() {
    return (
      <div className='App'>
          <HighchartsReact
            highcharts = {Highcharts}
            options = {{
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Cantidad de $USD por estado '
                },
                xAxis: {
                    min: 0,
                    categories: [
                        'Produccion',
                        'Transporte Internacional',
                        'Ingreso Pais',
                        'Transporte Nacional',
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad $USD'
                    }
                },
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'top'
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Compras $USD Por estado',
                    data: [
                        this.props.data.Produccion.amount,
                        this.props.data.TransInter.amount,
                        this.props.data.IngresoPais.amount,
                        this.props.data.TransNacional.amount
                    ]
            
                }]
                
            }}
          />

      </div>
    )
  }
}
