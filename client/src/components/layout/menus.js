import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class menus extends Component {

  state = {
      menu: 0
  }

  render() {
    switch(this.state.menu) {
        case 0:
            return <>
                <Link class="nav-item nav-link" to='/users/dashboard'>Dashboards</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 1})}}>Pedidos</a>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 2})}}>Proveedor</a>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 3})}}>Productos</a>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 5})}}>Reportes</a>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 7})}}>Usuario</a>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 8})}}>Agentes de Duana</a>
                <Link class="nav-item nav-link" to='/users/Bancos'>Banco</Link>
                <a class="nav-item nav-link" onClick={this.props.logOut}>Cerrar sesión</a>
            </>
        case 1:
            return <>
                <Link class="nav-item nav-link" to='/users/Crear_Pedido'>Crear Pedido</Link>
                <Link class="nav-item nav-link" to='/users/Buscar_Pedido'>Buscar Pedido</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 0})}}>Volver</a>
            </>
        case 2:
            return <>
                <Link class="nav-item nav-link" to='/users/Ingresar_Proveedor'>Crear Proveedor</Link>
                <Link class="nav-item nav-link" to='/users/Buscar_Proveedor'>Buscar Proveedor</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 0})}}>Volver</a>
            </>
        case 3:
            return <>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 4})}}>Ingresar Producto</a>
                <Link class="nav-item nav-link" to='/users/Buscar_Producto'>Buscar Producto</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 0})}}>Volver</a>
            </>
        case 4:
            return <>
                <Link class="nav-item nav-link" to='/users/Ingresar_Producto/Ingreso_unidad'>Ingresar Por Unidad</Link>
                <Link class="nav-item nav-link" to='/users/Ingresar_Producto/Ingreso_lote'>Ingresar Por lote</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 3})}}>Volver</a>
            </>
        case 5:
            return <>
                <Link class="nav-item nav-link" to='/users/Reporte_Costos_Finales'>Costos Finales</Link>
                <Link class="nav-item nav-link" to='/users/Reporte_Status_Agente_Aduana'>Status Agentes Aduana</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 6})}}>Montos de Importaciones</a>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 0})}}>Volver</a>
            </>
        case 6:
            return <>
                <Link class="nav-item nav-link" to='/users/Reporte_Importacion_Dinero'>Por Dinero</Link>
                <Link class="nav-item nav-link" to='/users/Reporte_Importacion_Peso'>Por Peso</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 5})}}>Volver</a>
            </>
        case 7:
            return <>
                <Link class="nav-item nav-link" to='/users/Crear_Usuario'>Crear Usuario</Link>
                <Link class="nav-item nav-link" to='/users/Buscar_Usuario'>Buscar Usuario</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 0})}}>Volver</a>
            </>
        case 8:
            return <>
                <Link class="nav-item nav-link" to='/users/Ingresar_Agente_Aduana'>Ingresar Agente Aduana</Link>
                <Link class="nav-item nav-link" to='/users/Buscar_Agente_Aduana'>Buscar Agente Aduana</Link>
                <a class="nav-item nav-link" onClick={() => {this.setState({menu: 0})}}>Volver</a>
            </>
        default:
            break
    }
  }
}
