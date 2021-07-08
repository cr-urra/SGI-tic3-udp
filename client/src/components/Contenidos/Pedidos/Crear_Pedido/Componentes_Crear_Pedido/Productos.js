import React, { Component } from 'react'
import Listas from './Listas'


export default class Forma_Pago extends Component {
    render() {
      
      if( this.props.productos.length!==0){
        
        return (
          <div className="input-group mb-3">            
              <table className="table separacion text-center table-striped table-bordered">
                <thead>                
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Kg</th>
                    <th scope="col">$/Kg (Dolar)</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  
                <Listas productos={this.props.productos} eliminar ={this.props.eliminar} />
                </tbody>
              </table>
          </div>
        )
      }else{
        return <div/>
      }
      
    }
}
