import React, { Component } from 'react'
import Listado from './Componentes_Buscar_Usuario/Listado'
import Tabla from './Componentes_Buscar_Usuario/Tabla'
import Editar_usuario from './Componentes_Buscar_Usuario/Editar_Usuario'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import Carga from './Carga'

export default class Init extends Component {

    state ={
        Usuarios: [],
        Usuario: "",
        editar: "false",
        carga: false
    }

    encryptAes = async (message, key, iv) => {
        const encrypted = CryptoJS.AES.encrypt(message, key, {iv: iv});
        return CryptoJS.enc.Utf8.parse(encrypted);
    }

    decryptAes = async (encrypt, key, iv) => {
        const decrypted = CryptoJS.AES.decrypt(CryptoJS.enc.Utf8.stringify(encrypt), key, {iv: iv});
        return CryptoJS.enc.Utf8.stringify(decrypted);
    }

    onRechargeData = async () => {
        this.setState({
            Usuarios: [],
            Usuario: "",
            editar: "false"
        })
        const res = await axios.get("/usuarios/", {
            "headers": {
                "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
            }
        }) 
        const iv = localStorage.getItem('iv')
        const key = localStorage.getItem('key')
        for (let i= 0; i < res.data.usuarios.length ; i++){
            let rolId = await this.decryptAes(res.data.usuarios[i].roles_id, key, iv)
            let rol = "";
            if(rolId === "1"){
                rol = "Administrador"
            } else if( rolId === "2"){
                rol = "Finanzas"
            }else {
                rol= "Operaciones"
            }
            let usuarios_id = await this.decryptAes(res.data.usuarios[i].id, key, iv)
            const Telefono = await axios.get("/telefonosUsuarios/usuarios/"+usuarios_id,{
                "headers": {
                    "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                }
            }) 
            const usuario = {
                nombre:  await this.decryptAes(res.data.usuarios[i].nombre, key, iv),
                apellido:  await this.decryptAes(res.data.usuarios[i].apellido, key, iv),
                telefono:  await this.decryptAes(Telefono.data.telefono.telefono, key, iv),
                correo: await this.decryptAes(res.data.usuarios[i].correo, key, iv),
                id:  await this.decryptAes(res.data.usuarios[i].id, key, iv),
                rut: await this.decryptAes(res.data.usuarios[i].rut, key, iv),
                rol: rol,
                rolId: rolId
            }
            this.setState({
                Usuarios: [...this.state.Usuarios, usuario]
            })
        }
        await this.setState({
            carga: true
        })
    }

    componentDidMount = async () => {
        await this.onRechargeData()
    }

    onChangeUsuario = (event) => {
        this.setState({
            Usuario: event.target.value
        })
    }

    onResetUsuario = (event) => {
        this.setState({
            Usuario: ""
        })
    }

    change = (event) =>{
        this.setState({
            editar : event.target.value
        })
    }

    render() {
        if(this.state.carga==true){
            if(this.state.editar ==="true"){
                return(
                    <main className="content">
                        <h1 className="display-5 titulo">Editar Usuario {this.state.AgenteAduana}</h1>
                        <Editar_usuario Usuarios={this.state.Usuarios} Usuario = {this.state.Usuario} change = {this.change} onRechargeData = {this.onRechargeData} logOut = {this.props.logOut} onChangeOut={this.props.onChangeOut}/>
                    </main>
                )
            }else{
                return (
                    <main className="content">
                        <h1 className="display-5 titulo">Buscar Usuario</h1>
                            <Listado Usuarios ={this.state.Usuarios} onChangeUsuario ={this.onChangeUsuario} Usuario={this.state.Usuario}/>
                            <Tabla  Usuario={this.state.Usuario} Usuarios = {this.state.Usuarios} change={this.change} onRechargeData = {this.onRechargeData} onResetUsuario  = {this.onResetUsuario}/>            
                    </main>
                )
            } 
        }else{
            return(
                <Carga />
            )
        }
            
    }
}