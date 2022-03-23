import React, { Component } from 'react'
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class DoughnutChartHC extends Component {
  render() {
    return (
      <div className='App'>
          <HighchartsReact
            highcharts = {Highcharts}
            options = {{
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Estado de pedidos Activos'
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f}</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'top'
                },
                series: [{
                    colorByPoint: true,
                    data: [{
                        name: 'Produccion',
                        y: this.props.data.Produccion.total
                    }, {
                        name: 'Ingreso al pais',
                        y: this.props.data.IngresoPais.total
                    }, {
                        name: 'Transporte Nacional',
                        y: this.props.data.TransNacional.total
                    }, {
                        name: 'Transporte Internacional',
                        y: this.props.data.TransInter.total
                    }]
                }]
            }}
          />
      </div>
    )
  }
}
