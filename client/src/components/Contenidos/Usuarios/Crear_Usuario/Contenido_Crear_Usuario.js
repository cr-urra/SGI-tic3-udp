import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './Componentes_crear_usuario/InputForm'
import InputFormOption from './Componentes_crear_usuario/InputFormOption'
import Modal from 'react-bootstrap/Modal'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CryptoJS from 'crypto-js'

toast.configure()

export default class Crear_Usuario extends Component {

    state ={
        nombre: null,
        apellido: null,
        rut: null,
        correo: null,        
        telefono: null,
        contraseña: null,
        r_contraseña: null,
        rol: null,
        show: false
    }

    encrypt = async (pass) => {
        const hash = CryptoJS.SHA3(pass+"promachile.cl", { outputLength: 512 })
        return hash
    }

    encryptAes = async (message, key, iv) => {
        const encrypted = CryptoJS.AES.encrypt(message, key, {iv: iv});
        return CryptoJS.enc.Utf8.parse(encrypted);
    }

    decryptAes = async (encrypt, key, iv) => {
        const decrypted = CryptoJS.AES.decrypt(CryptoJS.enc.Utf8.stringify(encrypt), key, {iv: iv});
        return CryptoJS.enc.Utf8.stringify(decrypted);
    }

    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.nombre != null &&
            this.state.apellido != null &&
            this.state.rut != null &&
            this.state.correo != null &&        
            this.state.telefono != null &&
            this.state.contraseña != null &&
            this.state.r_contraseña != null &&
            this.state.rol != null &&
            this.state.nombre != "" &&
            this.state.apellido != "" &&
            this.state.rut != "" &&
            this.state.correo != "" &&        
            this.state.telefono != "" &&
            this.state.contraseña != "" &&
            this.state.r_contraseña != "" &&
            this.state.rol != ""
        ){
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token')
            const iv = localStorage.getItem('iv')
            const key = localStorage.getItem('key')
            if(this.state.contraseña === this.state.r_contraseña){
                const Usuario = {
                    nombre: await this.encryptAes(this.state.nombre, key, iv),
                    apellido: await this.encryptAes(this.state.apellido, key, iv),
                    rut: await this.encryptAes(this.state.rut, key, iv),
                    correo: await this.encryptAes(this.state.correo, key, iv),
                    telefono: await this.encryptAes(this.state.telefono, key, iv),
                    contraseña: await this.encrypt(this.state.contraseña),
                    roles_id: await this.encryptAes(this.state.rol, key, iv)
                }        
                const res = await axios.post("/auth/signup/", Usuario) 
                if(res.data.resultado) {
                    const telefono = {
                        telefono: await this.encryptAes(this.state.telefono, key, iv),
                        usuarios_id: res.data.usuario.id
                    }
                    let res2 = null
                    res ? res2 = await axios.post("/telefonosUsuarios/", telefono) :  toast.error(res.data.message, {
                        position: toast.POSITION.TOP_CENTER , transition: Slide
                    })  
                    if(res2.data.resultado==true){
                        toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
                    }else{
                        toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
                    }
                } else {
                    toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
                } 
            }else{
                toast.error("Las contraseñas ingresadas no coinciden, intenta nuevamente", {position: toast.POSITION.TOP_CENTER , transition: Slide})  
            }            
        }else{
            toast.warn("Debes ingresar correctamente todos los datos, intenta nuevamente", {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }
        this.setState({
            show: false
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onChangeRol = (event) => {
        this.setState({
            rol: event.target.value
        })
    }

    handleClose = () =>{
        this.setState({
            show: false
        })
    }

    handleShow = () =>{
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Crear Usuario</h1>
                <div className="container separacion">
                    <div className="card shadow-lg">
                        <div className="card-header">
                            Formulario de creación de Usuario
                        </div>
                        <div className="container separacion">
                            <form onSubmit ={this.onSubmit}>
                                <div className="row g-2 mt-2 mb-2">
                                    <InputForm field ="Nombre" onChange = {this.onChange} field2 = {this.state.nombre} name="nombre" type={"text"}/>
                                    <InputForm field ="Apellido" onChange = {this.onChange} field2 = {this.state.apellido} name="apellido"type={"text"}/>
                                    <InputForm field ="Rut" onChange = {this.onChange} field2 = {this.state.rut} name="rut"type={"text"}/>
                                    <InputForm field ="Correo" onChange = {this.onChange} field2 = {this.state.correo} name="correo"type={"text"}/>
                                    <InputForm field ="Telefono" onChange = {this.onChange} field2 = {this.state.telefono} name="telefono"type={"text"}/>
                                    <InputFormOption field ="Rol" onChange = {this.onChangeRol} field2 = {this.state.rol} name="rol"type={"text"}/>
                                    <InputForm field ="Contraseña" onChange = {this.onChange} field2 = {this.state.contraseña} name="contraseña"type={"password"}/>
                                    <InputForm field ="Repetir Contraseña" onChange = {this.onChange} field2 = {this.state.r_contraseña} name="r_contraseña"type={"password"}/>
                                    <div className = "container mt-4 ml-3"> 
                                        <button type="button" className="btn btn-primary rounded-pill" onClick={this.handleShow}>
                                            Guardar Usuario
                                        </button>
                                    </div> 
                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                        <Modal.Header closeButton>
                                          <Modal.Title className="text-primary">Ingresar Nuevo Usuario</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>Estas apunto de crear un nuevo Usuario ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                          <button type="button" class="btn btn-primary" onClick={this.onSubmit} >Guardar Usuario</button>
                                        </Modal.Footer>
                                    </Modal> 
                                </div>                            
                            </form>
                        </div>
                    </div> 
                </div>
            </main>
        )
    }
}
