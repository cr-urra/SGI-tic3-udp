import React, { Component } from 'react'
import Logo from '../../imagenes/logoNavbar.png'
import axios from 'axios'



export default class Navbar extends Component {

    state = {
        UF: "",
        Dolar: "",
        UTM: "",
        nombre: ""
    }

    componentDidMount = async () => {
        axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token')
        this.setState({
            UF: localStorage.getItem('uf'),
            Dolar: localStorage.getItem('dolar'),
            UTM: localStorage.getItem('utm'),
            nombre: localStorage.getItem('nombre')
        })
    }

    render() {
        return (     
            <nav className="navbar navbar-expand-lg color_sitio navbar-dark">
                <img src={Logo} alt="logo" />
                <span className="ml-2 navbar-brand" to="#">Hola, {this.state.nombre}</span> 
                    <div className="container">
                        <div className="container ">
                            <div className="row">
                                <div className="col-4">
                                    <span className="navbar-brand"> UF: ${this.state.UF}</span> 
                                </div>
                                <div className="col-4">
                                    <span className="navbar-brand"> Dolar: ${this.state.Dolar}</span> 
                                </div>
                                <div className="col-4">
                                    <span className="navbar-brand">UTM: ${this.state.UTM}</span>
                                </div>
                            </div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <button type="button" className="btn color_sitio2" onClick={this.props.logOut}>
                                        Cerrar sesión  
                                    </button>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </nav> 
        )
    }
}
