import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Precios from './Componentes_Producto_Precio_Historial/Precios'

toast.configure()

export default class Init extends Component {

    state = {
        fechaInicio: null,
        fechaTermino: null,
        nombre: "",
        codigo: "",
        precios: []
    }

    componentDidMount = async () => {
        if (window.sessionStorage.getItem("historialProductId") != null) {
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const id = window.sessionStorage.getItem("historialProductId")
            const res = await axios.get('/productos/'+id)
            if (res.data.resultado) {
                this.setState({
                    nombre: res.data.productos.nombre,
                    codigo: res.data.productos.codigo
                })
                const res2 = await axios.put("/historialPrecios/betweenDate", {
                    fecha1: null,
                    fecha2: null,
                    Producto: {
                        id: id
                    }
                }, {
                    "headers": {
                        "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                    }
                })
                if (res2.data.resultado) {
                    this.setState({
                        precios: res2.data.historialPrecios
                    })
                } else {
                    toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
                }
            } else {
                toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
            }
        }
    }

    onFilterData = async () => {
        if (window.sessionStorage.getItem("historialProductId") != null) {
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const id = window.sessionStorage.getItem("historialProductId")
            const res = await axios.get('/productos/'+id)
            if (res.data.resultado) {
                this.setState({
                    nombre: res.data.productos.nombre,
                    codigo: res.data.productos.codigo
                })
                const res2 = await axios.put("/historialPrecios/betweenDate", {
                    fecha1: this.state.fechaInicio,
                    fecha2: this.state.fechaTermino,
                    Producto: {
                        id: id
                    }
                }, {
                    "headers": {
                        "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                    }
                })
                if (res2.data.resultado) {
                    this.setState({
                        precios: res2.data.historialPrecios
                    })
                } else {
                    toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
                }
            } else {
                toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
            }
        }    
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Historial de precio</h1>
                <div className="container separacion">
                    <div className="card shadow-lg">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-3 text-center">
                                </div>
                                <div className="col-6 text-right" >                  
                                </div>
                                <div className="col-2">
                                    <Link to = '/users/Buscar_Producto'> 
                                        <button className="btn btn-primary ancho btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                              <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="container separacion">
                            <div className="row">
                                <div className="col-3 text-center">
                                    Busqueda por Fecha
                                </div>
                                <div className="col-9">
                                    <div className="input-group mb-3">
                                        <div className="col-3">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <input 
                                            type="date" 
                                            name="fechaInicio"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            />
                                        </div>   
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="col-3">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <input 
                                            type="date" 
                                            name="fechaTermino"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            />
                                        </div>   
                                    </div> 
                                     
                                </div>
                                <div className="col-9"/>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary rounded-pill " onClick={this.onFilterData} >
                                            Filtrar Fechas
                                    </button> 
                                </div>
                            </div>
                            <div className="container mt-4">
                                <table class="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Código</th>
                                      <th scope="col">Nombre</th>
                                      <th scope="col">Precio USD</th>
                                      <th scope="col">Fecha</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <Precios precios = {this.state.precios} producto={{nombre: this.state.nombre, codigo: this.state.codigo}} />
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div> 
                </div>
            </main>
        )
    }
}
