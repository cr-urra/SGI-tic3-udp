import React, { Component } from 'react'
import Logo from '../../imagenes/logoNavbar.png';



export default class Navbar extends Component {

    state = {
        UF: "29.706,87",
        Dolar: "732,25",
        UTM: "52.005,00"
    }


    render() {
        return (     
            <nav className="navbar navbar-expand-lg color_sitio navbar-dark">
                <img src={Logo} alt="logo" />
                <span className="ml-2 navbar-brand" to="#">Hola, Administrador</span> 
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
