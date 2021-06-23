import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Init extends Component {
    render() {
        if(this.props.estado==="produccion"){
          return (
            <Link to={"/users/Pedido_Produccion"}>
              <div className="ml-5 text-center">
                  <button className="btn color_sitio2 mt-2">
                    Editar Pedido
                  </button>
              </div>
            </Link>
          )
        }else if(this.props.estado==="internacional"){
          return (
            <Link to={"/users/Pedido_Internacional"}>
              <div className="ml-5 text-center">
                  <button className="btn color_sitio2 mt-2">
                    Editar Pedido
                  </button>
              </div>
            </Link>
          )
        }else if(this.props.estado==="ingreso"){
          return (
            <Link to={"/users/Pedido_Ingreso"}>
              <div className="ml-5 text-center">
                  <button className="btn color_sitio2 mt-2">
                    Editar Pedido
                  </button>
              </div>
            </Link>
          )
        }else if(this.props.estado==="nacional"){
          return (
            <Link to={"/users/Pedido_Nacional"}>
              <div className="ml-5 text-center">
                  <button className="btn color_sitio2 mt-2">
                    Editar Pedido
                  </button>
              </div>
            </Link>
          )
        }else if(this.props.estado==="finalizado"){
          return (
            <Link to={"/users/Pedido_Finalizado"}>
              <div className="ml-5 text-center">
                  <button className="btn color_sitio2 mt-2">
                    Editar Pedido
                  </button>
              </div>
            </Link>
          )
        }
    }
}
