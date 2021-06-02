import React, { Component } from 'react'
import Opcion from './opcion'


export default class Opciones extends Component {
    render() {     
            return this.props.Usuarios.slice(0,5).map(Usuario => <Opcion Usuario={Usuario} key={Usuario.nombre}/>) 
    }
}