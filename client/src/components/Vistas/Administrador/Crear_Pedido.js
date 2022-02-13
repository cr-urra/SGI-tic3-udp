import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../layout/navbarAdmin.js'
import Sidebar from '../../layout/sidebarAdmin.js'
import Contenido from '../../Contenidos/Pedidos/Crear_Pedido/Contenido_Crear_Pedido'
import {Redirect,Link} from 'react-router-dom';



export default class Buscar_Producto extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: null,
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

    logOut = async () => {
        const res = await axios.get("/auth/logout");
        this.setState({
            verify: res.data.logout,
            message: res.data.message
        });
    };
    
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
                  <aside className='sidebarFixed'>
                    <Sidebar/>
                    <div className="overlay"></div>
                    </aside>                 
                  <div className="layout contentWithNavFixed">
                    <header className="header navbarFixed"><Navbar logOut={this.logOut}/></header>
                    <div className='contentFixed'>
                        <Contenido/>
                    </div>
                    <div className="overlay"></div>
                  </div>
                </div>             
        )
    };
}
