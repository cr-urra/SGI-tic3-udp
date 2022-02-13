import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../layout/navbarAdmin.js'
import Sidebar from '../../layout/sidebarAdmin.js'
import Contenido from '../../Contenidos/Usuarios/Buscar_Usuario/Contenido_Buscar_Usuario'
import {Redirect,Link} from 'react-router-dom';

export default class Buscar_Producto extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: null,
        out: false
    };

    componentDidMount = async () => {
        const res = await axios.get('/auth/adm/');
        this.setState({
            verify: res.data.resul,
            cod_rol: res.data.cod_rol,
            message: res.data.message
        });
    };

    componentWillUnmount = () => {
        if(this.state.message)
            alert(this.state.message);
    };

    logOut = async (e) => {
        const res = await axios.get("/auth/logout");
        this.setState({
            verify: res.data.logout,
            message: this.state.out ? "Su usuario se ha actualizado correctamente, para terminar de aplicar los cambios, se cerrará la sesión" : res.data.message
        });
    };

    onChangeOut = () => {
        this.setState({
            out: true
        })
    }

    render() {
        switch(this.state.verify) {
            case false:
                return <Redirect to={{ pathname: '/users/'+this.state.cod_rol}}/>;
            case null:
                return <Redirect to={{ pathname: '/'}}/>; 
            default:
                break;
        };
        return (
                <div className="layout has-sidebar">
                  <aside >
                    <Sidebar/>
                    </aside>                 
                  <div className="layout">
                    <header className="header"><Navbar logOut={this.logOut}/></header>
                    <Contenido logOut={this.logOut} onChangeOut={this.onChangeOut}/>
                    <div className="overlay"></div>
                  </div>
                </div>            
        )
    };
}
