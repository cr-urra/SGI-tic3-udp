import React, { Component } from 'react'
import Logo from '../../imagenes/logoNavbar.png'
import axios from 'axios'
import collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Menus from './menus'


export default class Navbar extends Component {

    state = {
        UF: "",
        Dolar: "",
        UTM: "",
        nombre: "",
        menu: true
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
            <nav className="navbar navbar-expand-lg color_sitio navbar-dark row">
                    <div className="col-xs-4 col-md-3 col-lg-3 width-78">
                        <img src={Logo} alt="logo" />
                        <p className="ml-2 navbar-brand" to="#">Hola, {this.state.nombre}</p> 
                    </div>
                    <div className="container col-xs-6 col-md-9 col-lg-9 desktop">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                    <span className="navbar-brand"> UF: ${this.state.UF}</span> 
                                </div>
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                    <span className="navbar-brand"> Dolar: ${this.state.Dolar}</span> 
                                </div>
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                    <span className="navbar-brand">UTM: ${this.state.UTM}</span>
                                </div>
                            </div>
                            <ul className="navbar-nav ml-auto pr-5 mr-4">
                                <li className="nav-item activ">
                                    <button type="button" className="btn color_sitio2 desktop" onClick={this.props.logOut}>
                                        Cerrar sesión  
                                    </button>
                                </li>
                            </ul>
                        </div> 
                    </div>
                    <Button variant="navbar-toggler mr-3 mt-2 btn color_sitio2 mobile" onClick={() => {this.setState({menu: !this.state.menu})}} aria-expanded={this.state.menu}>
                        <span class="navbar-toggler-icon"></span>
                    </Button>
                    <div className="navbar-nav mobile col-md-12 text-center" id={this.state.menu ? "dp-none" : ""}>
                        <a className='row text-white values-mobile'>
                            <p className="col-xs-12 col-md-12 text-center">UF: ${this.state.UF}</p>
                            <p className="col-xs-12 col-md-12 text-center">Dolar: ${this.state.Dolar}</p>
                            <p className="col-xs-12 col-md-12 text-center">UTM: ${this.state.UTM}</p>
                        </a>  
                        <Menus logOut={this.props.logOut}/>
                    </div>
            </nav>
            
            
        )
    }
}
