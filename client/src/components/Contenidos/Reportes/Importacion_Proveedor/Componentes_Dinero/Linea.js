import React, { Component } from 'react'


export default class Opcion extends Component {
    render() {
        if(this.props.Producto.filtro===false){
            return (       
                <tr>                    
                    <td>{this.props.Producto.codigo}</td>
                    <td>{this.props.Producto.nombre}</td>
                    <td>{this.props.Producto.max_price}</td>
                    <td>{this.props.Producto.max_price}</td>
                </tr>
            )
        }else{
            return <div/>
        }
        
    }
}