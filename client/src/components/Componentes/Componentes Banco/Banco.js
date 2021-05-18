import React, { Component } from 'react'
import Lista from './Lista'


export default class Banco extends Component {
    render() {
        
        return (
            <div className="container separacion">
                <div class="card border-primary ">
                  <div class="card-header text-primary">
                    Banco A
                  </div>
                    <ul class="list-group list-group-flush">
                        <Lista nombre={"Cuenta Corriente (IBAN)"} contenido={"Banco A"}/>
                        <Lista nombre={"País"} contenido={"Banco A"}/>
                        <Lista nombre={"Número ABA"} contenido={"Banco A"}/>
                        <Lista nombre={"Referencia"} contenido={"Banco A"}/>
                        <Lista nombre={"Banco Beneficiario"} contenido={"Banco A"}/>
                        <Lista nombre={"Código SWITF"} contenido={"Banco A"}/>
                        <Lista nombre={"Código IFCS"} contenido={"Banco A"}/>
                        <Lista nombre={"Cuenta Interbancaria"} contenido={"Banco A"}/>
                        <Lista nombre={"Banco Intermediario"} contenido={"Banco A"}/>
                    </ul>
                </div>
            </div>
        )
        
    }
}