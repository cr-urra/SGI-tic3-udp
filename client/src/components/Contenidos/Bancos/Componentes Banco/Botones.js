import React, { Component } from 'react'


export default class Botones extends Component {
    render() {

            return (
                <div className="container separacion_final">
                    <div className="row g-2  mb-4">
                        <div className="col-6 text-center">
                        <button type="button" className="btn btn-primary rounded-pill ancho3"  value ={true} onClick={this.props.change} >
                            Editar Banco 
                        </button>
                        </div>
                        <div className="col-6 text-center">
                        <button type="button" className="btn btn-danger rounded-pill ancho3" >
                            Eliminar Banco
                        </button>
                        </div>
                    </div>
                </div>
        
            )
    }
}