import React, { Component } from 'react'
import {Link , Redirect} from 'react-router-dom';

// <Redirect to={{ pathname: '/users/usr', state: {rut: this.state.rut}}} />;

export default class Init extends Component {
    state = {
      estado: null
    }

    nacional = () =>{
      this.setState({
        estado: "nacional"
      })
    }

    internacional = () =>{
      this.setState({
        estado: "internacional"
      })
    }

    ingreso = () =>{
      this.setState({
        estado: "ingreso"
      })
    }

    finalizado = () =>{
      this.setState({
        estado: "finalizado"
      })
    }

    produccion = () =>{
      this.setState({
        estado: "produccion"
      })
    }

    render() {
        switch(this.state.estado) {
          case "produccion":   
              return <Redirect to={{pathname: '/users/Pedido_Produccion',
                          state: {pedido: this.props.n_pedido}
                      }} />;
          case "internacional":
            return <Redirect to={{ 
                        pathname: '/users/Pedido_internacional',
                        state :{pedido: this.props.n_pedido}
                    }} />;
          case "ingreso":
            return <Redirect to={{ 
                        pathname: '/users/Pedido_ingreso',
                        state :{pedido: this.props.n_pedido}
                    }} />;
          case "nacional":
            return <Redirect to={{ 
                        pathname: '/users/Pedido_nacional',
                        state :{pedido: this.props.n_pedido}
                    }} />;
          case "finalizado":
            return <Redirect to={{ 
                        pathname: '/users/Pedido_finalizado',
                        state :{pedido: this.props.n_pedido}
                    }} />;            
          default:
              break;
        };
        if(this.props.estado==="produccion"){
          return (
              <div className="ml-4 text-center">
                  <button className="btn bg-primary text-white mt-3" onClick={this.produccion}>
                    Ver Pedido
                    {console.log(this.props.n_pedido,"1")}
                  </button>
              </div>
          )
        }else if(this.props.estado==="internacional"){
          return (
              <div className="ml-4 text-center">
                  <button className="btn bg-primary text-white mt-3" onClick={this.internacional}>
                    Ver Pedido
                  </button>
              </div>
          )
        }else if(this.props.estado==="ingreso"){
          return (
              <div className="ml-4 text-center">
                  <button className="btn bg-primary text-white mt-3" onClick={this.ingreso}>
                    Ver Pedido
                  </button>
              </div>
          )
        }else if(this.props.estado==="nacional"){
          return (
              <div className="ml-4 text-center">
                  <button className="btn bg-primary text-white mt-3" onClick={this.nacional}>
                    Ver Pedido
                  </button>
              </div>
          )
        }else if(this.props.estado==="finalizado"){
          return (
              <div className="ml-4 text-center">
                  <button className="btn bg-primary text-white mt-3" onClick={this.finalizado}>
                    Ver Pedido
                  </button>
              </div>
          )
        }
    }
}
