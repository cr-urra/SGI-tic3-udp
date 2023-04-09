import React, { Component } from 'react'

export default class Producto extends Component {
    render() {
        return (       
            <div class="col-6">
                <div class="p-3 mb-4 bg-light ">
                    <div class="form-check">
                      <input class="form-check-input" 
                        type="checkbox" 
                        value={this.props.Producto.codigo} 
                        id={this.props.Producto.codigo} 
                        onClick={this.props.onChange}
                        defaultChecked={true}
                      />
                      <label class="form-check-label mr-3" value={this.props.Producto.codigo} for={this.props.Producto.codigo} >
                        {this.props.Producto.codigo}:  {this.props.Producto.nombre}                        
                      </label>                        
                    </div>
                </div>
            </div> 
        )
    }
}