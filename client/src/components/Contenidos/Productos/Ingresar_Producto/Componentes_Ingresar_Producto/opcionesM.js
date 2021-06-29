import React, { Component } from 'react'
import Opcion from './opcionM'


export default class Opciones extends Component {
    render() {     
            return this.props.medidas.map(medida => <Opcion medida={medida} key={medida.id}/>)
    }
}