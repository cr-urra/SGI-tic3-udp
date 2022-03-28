import React, { Component } from 'react'
import Listado from './Componentes Banco/Listado'
import Banco from './Componentes Banco/Banco'
import EditarBanco from './Componentes Banco/Editar_Banco'
import Carga from './Carga'
import axios from 'axios'



export default class Contenido_Banco extends Component {

    state = {
        bancos: [],
        banco: "",
        editar: "false",
        carga:  false

    }

    onRechargeData = async () => {
        this.setState({
            bancos: [],
            banco: "",
            editar: "false",
            carga:  false
        })
        const res = await axios.get("/cuentasBancos/",{})  
        for (let i= 0; i < res.data.cuentas_bancos.length ; i++){
            const aux = await axios.get("/paises/" + res.data.cuentas_bancos[i].paises_id ,{})
            const aux2= await axios.get("/numerosAba/"+res.data.cuentas_bancos[i].numeros_aba_id,{})
            const banco = {
                id: res.data.cuentas_bancos[i].id,
                paises_id: res.data.cuentas_bancos[i].paises_id ,
                numeros_aba_id: res.data.cuentas_bancos[i].numeros_aba_id,
                nombre:   res.data.cuentas_bancos[i].nombre_banco,
                IBAN: res.data.cuentas_bancos[i].codigo_iban,
                pais: aux.data.paises.pais,
                ABA:  aux2.data.numerosAba.numero_aba,
                referencia:  res.data.cuentas_bancos[i].referencia,
                SWIFT:  res.data.cuentas_bancos[i].swift_code,
                cuenta_interbancaria:  res.data.cuentas_bancos[i].numero_cuenta,
                proveedores: res.data.cuentas_bancos[i].proveedore == null ? {nombre: "No se encuentra proveedor"} : res.data.cuentas_bancos[i].proveedore
            }
            this.setState({
                bancos: [...this.state.bancos, banco]
            })
        }
        await this.setState({
            carga: true
        })
    }

    change = (event) => {
       this.setState({
           editar: event.target.value
       })
    }

    componentDidMount = async () => {
        await this.onRechargeData()
    }

    onChangeBanco = (event) => {
        this.setState({
            banco: event.target.value
        })
    }

    onResetBanco = () => {
        this.setState({
            banco: ""
        })
    }

    render() {
        if(this.state.carga==true){
            if(this.state.editar==="true"){
                return (
                    <main className="content">
                        <h1 className="display-5 titulo">Editar Banco {this.state.banco}</h1>
                        <EditarBanco bancos={this.state.bancos} banco = {this.state.banco} change = {this.change} onRechargeData={this.onRechargeData}/>
                    </main>
                )
            }else {
                return (
                    <main className="content">
                        <h1 className="display-5 titulo">Bancos</h1>
                        <Listado bancos={this.state.bancos} banco = {this.state.banco} onChangeBanco = {this.onChangeBanco} />
                        <Banco bancos={this.state.bancos} banco = {this.state.banco} change = {this.change} delete = {this.delete} onResetBanco={this.onResetBanco} onRechargeData={this.onRechargeData}/>
                    </main>
                )
            }
        }else{
            return (
                <Carga />
            )                                         
        }
            
    }
}
