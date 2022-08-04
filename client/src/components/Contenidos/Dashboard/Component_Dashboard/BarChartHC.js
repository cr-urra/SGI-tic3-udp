import React, { Component } from 'react'
import Highcharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class BarChartHC extends Component {

  state = {
    DataSem: [],
    Sem1: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun'
    ],
    Sem2: [
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic'
    ],
    semActual: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun'
    ],
    años: [],
    año: 0,
    sem: "1"
  }

  componentDidMount = async () =>{
    const fechaActual = new Date()
    let data = []
    const arr = this.props.años;
    this.props.data.forEach(elementProveedores => {
      data.push({
        name: elementProveedores.nombre,
        data: []
      })
      elementProveedores.cantidad.forEach(elementYears => {
        if (elementYears.año == Math.max(...arr)) {
          fechaActual.getMonth() <= 5 ? data[data.length - 1].data = elementYears.cantidadMes.slice(0,6) : data[data.length - 1].data = elementYears.cantidadMes.slice(6,elementYears.cantidadMes.length)
        }
      })
    })
    console.log("data", data)
    this.setState({
      semActual: fechaActual.getMonth() <= 5 ? this.state.Sem1 : this.state.Sem2,
      DataSem: data,
      años: this.props.años,
      año: Math.max(...arr),
      sem: fechaActual.getMonth() <= 5 ? "1" : "2"
    })
  }

  onChangeY = (event) => {
    this.setState({
      año: event.target.value
    })
  }

  onChangeS = (event) => {
    this.setState({
      sem: event.target.value
    })
    console.log(this.state.sem);
  }

  onChangeData = () => {
    this.setState({
      semActual: this.state.semActual == this.state.Sem1 ? this.state.Sem2 : this.state.Sem1
    })
    const fechaActual = new Date()
    let data = []
    const arr = this.props.años;
    this.props.data.forEach(elementProveedores => {
      data.push({
        name: elementProveedores.nombre,
        data: []
      })
      elementProveedores.cantidad.forEach(elementYears => {
        if (elementYears.año == this.state.año) {
          this.state.sem <= "1" ? data[data.length - 1].data = elementYears.cantidadMes.slice(0,6) : data[data.length - 1].data = elementYears.cantidadMes.slice(6,elementYears.cantidadMes.length)
        }
      })
    })
    this.setState({
      semActual: this.state.sem == "1" ? this.state.Sem1 : this.state.Sem2,
      DataSem: data
    })
  }

  render() {
      return (
        <div className="App">        
          <HighchartsReact
              highcharts={Highcharts}
              options= {{
                chart: {
                  type: 'column'
                },
                title: {
                    text: 'Cantidad de importación por proveedor en KG anual'
                },
                xAxis: {
                    categories: this.state.semActual,
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
                series: this.state.DataSem
              }}
            />
            <select className="form-select ml-5" value={this.state.año} onChange = {this.onChangeY}>
                {this.state.años != [] && <option value={this.state.años[0]} defaultValue>{this.state.años[0]}</option>}
                {
                  this.state.años.length > 1 && this.state.años.slice(1, this.state.años.length).map(element => {
                    return <option value={element} key={element}>{element}</option>
                  })
                }
            </select>
            <select className="form-select ml-5" value={this.state.sem} onChange={this.onChangeS}>
              <option value={this.state.sem == "1" ? "1" : "2"}>{this.state.sem == "1" ? "Primer Semestre" : "Segundo Semestre"}</option>
              <option value={this.state.sem == "2" ? "1" : "2"}>{this.state.sem == "2" ? "Primer Semestre" : "Segundo Semestre"}</option>
            </select>
          <button type="button" className="btn btn-outline-secondary ml-5" onClick={this.onChangeData}>Actualizar</button>
        </div>
      )
  }
}
