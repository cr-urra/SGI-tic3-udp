import React, { Component } from 'react'
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class BarChartProductHC extends Component {

  render() {
    return (
        <div className='App'>
            <HighchartsReact
                highcharts = {Highcharts}
                options = {{
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Importado por Producto'
                    },
                    xAxis: {
                        categories: [
                            'Ene',
                            'Feb',
                            'Mar',
                            'Abr',
                            'May',
                            'Jun',
                            'Jul',
                            'Ago',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dic'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Cantidad $UDS'
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
                            '<td style="padding:0"><b>{point.y:.1f} $USD</b></td></tr>',
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
                    series: this.props.data

                }}
            />

        </div>
    )
  }
}
