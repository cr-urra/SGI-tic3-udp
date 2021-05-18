import React, { Component } from 'react'


export default class Botones extends Component {
    render() {
        
        return (
            <div className="container separacion_final">
                <div class="row g-2  mb-4">
                    <div className="col-1"/>
                    <div class="col-3">
                    <button type="button" className="btn btn-primary rounded-pill" >
                        Editar Banco 
                    </button>
                    </div>
                    <div class="col-8">
                    <button type="button" className="btn btn-danger rounded-pill" >
                        Eliminar Banco
                    </button>
                    </div>
                </div>
            </div>
        )
        
    }
}