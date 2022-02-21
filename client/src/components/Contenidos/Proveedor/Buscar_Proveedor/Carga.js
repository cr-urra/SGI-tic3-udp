import React, { Component } from 'react'

export default class Datos extends Component {
    render() {
        return (
          <div className="text-center margen">
            <h1 className='color_escritura' >Cargando Datos, Espere un Momento</h1>
            <br/>
            <div className="spinner-grow color_escritura2 separacion2" role="status"/>
            <div className="spinner-grow color_escritura separacion2" role="status"/>
            <div className="spinner-border color_escritura2 separacion2" role="status"/>
            <div className="spinner-grow color_escritura separacion2" role="status"/>
            <div className="spinner-grow color_escritura2 separacion2" role="status"/>
          </div>
        )
    }
}
