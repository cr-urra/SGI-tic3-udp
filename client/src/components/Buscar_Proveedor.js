import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './layout/navbarAdmin.js'
import Sidebar from './layout/sidebarAdmin.js'
import Contenido from './Contenidos/Contenido_Buscar_Proveedor.js'
import {Redirect,Link} from 'react-router-dom';



export default class Buscar_Producto extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: "",
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
        if(this.state.verify)
        return (
            

    
                <div class="layout has-sidebar">
                  <aside >
                    <Sidebar/>
                    </aside>                 
                  <div class="layout">
                    <header class="header"><Navbar logOut={this.logOut}/></header>
                    <Contenido/>
                    <div class="overlay"></div>
                  </div>
                </div>            
 
        )
        else 
        return <div/>
    };
}
