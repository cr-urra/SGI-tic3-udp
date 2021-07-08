import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';



export default class Crear_Observacion extends Component {     
    render() {      
        if(this.props.estado!==null&&this.props.pedido!==null){
          switch(this.props.estado) {
            case "produccion":   
                console.log("entre")
                return <Redirect to={{pathname: '/users/Pedido_Produccion',
                            state: {pedido: this.props.pedido}
                        }} />;
            case "internacional":
              return <Redirect to={{ 
                          pathname: '/users/Pedido_internacional',
                          state :{pedido: this.props.pedido}
                      }} />;
            case "ingreso":
              return <Redirect to={{ 
                          pathname: '/users/Pedido_ingreso',
                          state :{pedido: this.props.pedido}
                      }} />;
            case "nacional":
              return <Redirect to={{ 
                          pathname: '/users/Pedido_nacional',
                          state :{pedido: this.props.pedido}
                      }} />;
            case "finalizado":
              return <Redirect to={{ 
                          pathname: '/users/Pedido_finalizado',
                          state :{pedido: this.props.pedido}
                      }} />;            
            default:
                break;
        };   
        return <div/> 
        }else{
          return <div/>
        }              
    }
}
