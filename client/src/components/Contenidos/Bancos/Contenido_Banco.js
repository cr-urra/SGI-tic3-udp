import React, { Component } from 'react'
import Listado from './Componentes Banco/Listado'
import Banco from './Componentes Banco/Banco'
import Editar_Banco from './Componentes Banco/Editar_Banco'
import axios from 'axios'



export default class Contenido_Banco extends Component {

    state = {
        bancos: [],
        banco: "",
        editar: "false",
 
    }

    change = (event) => {
       this.setState({
           editar: event.target.value
       })
    }

    componentDidMount = async () => {
        const res = await axios.get("/cuentasBancos/",{})  
        console.log(res,"bancos");
        for (let i= 0; i < res.data.cuentas_bancos.length ; i++){

            const aux = await axios.get("/paises/" + res.data.cuentas_bancos[i].paises_id ,{})
            const aux2= await axios.get("/numerosAba/"+res.data.cuentas_bancos[i].numeros_aba_id,{})
            console.log(aux2,"aba")
            const banco = {
                nombre:   res.data.cuentas_bancos[i].nombre_banco,
                IBAN: res.data.cuentas_bancos[i].codigo_iban,
                pais: aux.data.paises.pais,
                ABA:  aux2.data.numerosAba.numero_aba,
                referencia:  res.data.cuentas_bancos[i].referencia,
                SWIFT:  res.data.cuentas_bancos[i].swift_code,
                cuenta_interbancaria:  res.data.cuentas_bancos[i].numero_cuenta,
            }
            this.setState({
                bancos: [...this.state.bancos, banco]
            })
        }
    }

    onChangeBanco = (event) => {
        this.setState({
            banco: event.target.value
        })
    }



    render() {

        if(this.state.editar==="true"){
            return (
                <main className="content">
                    <h1 className="display-5 titulo">Editar Banco {this.state.banco}</h1>
                    <Editar_Banco bancos={this.state.bancos} banco = {this.state.banco} change = {this.change}/>
                </main>
            )
        }else {
            return (
                <main className="content">
                    <h1 className="display-5 titulo">Bancos</h1>
                    <Listado bancos={this.state.bancos} banco = {this.state.banco} onChangeBanco = {this.onChangeBanco} />

                    <Banco bancos={this.state.bancos} banco = {this.state.banco} change = {this.change} delete = {this.delete}/>
                    
                </main>
            )
        }
    }
}
