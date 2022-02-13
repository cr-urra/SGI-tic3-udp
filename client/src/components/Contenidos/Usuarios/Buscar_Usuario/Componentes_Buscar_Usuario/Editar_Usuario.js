import React, { Component } from 'react'
import Datos from './EditDatos'
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Jumbotron } from 'react-bootstrap';
import CryptoJS from 'crypto-js'

toast.configure()

export default class EditUsuario extends Component {

    state = {
        nombre: null,
        apellido:null,
        rut:null,
        telefono: null,
        correo: null,
        rol: null,
        rolId: null,
        id: null,
        contraseña: null,
        show: false
    }

    componentDidMount = async () => {
        if(this.props.Usuario !== ""){
            let j;
            for(let i = 0 ; i < this.props.Usuarios.length ; i++){
                if(this.props.Usuario=== this.props.Usuarios[i].nombre){
                    j = i;
                }
            }            
            if(this.props.Usuarios[j]!=null){             
                this.setState({
                    nombre: this.props.Usuarios[j].nombre,
                    apellido: this.props.Usuarios[j].apellido,
                    rut:this.props.Usuarios[j].rut,
                    telefono: this.props.Usuarios[j].telefono,
                    correo: this.props.Usuarios[j].correo,
                    rol: this.props.Usuarios[j].rol,
                    id: this.props.Usuarios[j].id,
                    rolId: this.props.Usuarios[j].rolId,
                    contraseña: "default"
                })
            }
        }    
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
            this.state.nombre != ""&&
            this.state.apellido !=""&&
            this.state.rut !=""&&
            this.state.telefono != ""&&
            this.state.correo != ""&&
            this.state.rol != ""
        ){
            const iv = localStorage.getItem('iv')
            const key = localStorage.getItem('key')
            const rolId = this.state.rolId
            const Usuario = {
                nombre: await this.encryptAes(this.state.nombre, key, iv),
                apellido: await this.encryptAes(this.state.apellido, key, iv),
                rut: await this.encryptAes(this.state.rut, key, iv),
                correo: await this.encryptAes(this.state.correo, key, iv),
                roles_id: await this.encryptAes(rolId, key, iv),
                contraseña: this.state.contraseña === "default" ? this.state.contraseña : await this.encrypt(this.state.contraseña)
            }
            const res = await axios.put("/usuarios/" + this.state.id, Usuario, {
                "headers": {
                    "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                }
            })
            const telefono = {
                telefono: this.state.telefono
            }
            let res2 = null;
            res.data.resultado ? res2 = await axios.put("/telefonosUsuarios/" + this.state.id, telefono, {
                "headers": {
                    "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                }
            }) : toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
            if(res2.data.resultado==true){
                if (this.state.rut == localStorage.getItem('rut')) {
                    await this.props.onChangeOut()
                    await this.props.logOut()
                } else {
                    toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide}) 
                    await this.props.onRechargeData()
                }
            }else{
                toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
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

    onChangeFormat = (event) => {
        this.setState({
            rolId: event.target.value
        })
    }

    render() {
        if(this.props.Usuario !== ""){
            let j;
            for(let i = 0 ; i < this.props.Usuarios.length ; i++){
                
                if(this.props.Usuario=== this.props.Usuarios[i].nombre){
                    j = i;
                }
            }
            if(this.props.Usuarios[j]!=null){
                return (
                    <div>
                        
                        <div className="container separacion">

                            <div className="card border-primary  shadow-lg">
                                <form onSubmit={this.onSubmit}>
                                    <div className="card-header text-primary">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>{this.props.Usuarios[j].nombre}</h4>
                                            </div>
                                            <div className="col-7"/>
                                            <div className="col-1">
                                                <Link to = '/users/Buscar_Usuario'> 
                                                    <button className="btn btn-primary ancho btn-sm" onClick={this.props.change} value ={false}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <Datos nombre={"Nombre"} contenido={this.props.Usuarios[j].nombre} name={"nombre"} name2={this.state.nombre} tipo={"text"} onChange={this.onChange}/>
                                    <Datos nombre={"Apellido"} contenido={this.props.Usuarios[j].apellido} name={"apellido"} name2={this.state.apellido} tipo={"text"} onChange={this.onChange}/>
                                    <Datos nombre={"Rut"} contenido={this.props.Usuarios[j].rut} name={"rut"} name2={this.state.rut} tipo={"text"} onChange={this.onChange}/>
                                    <Datos nombre={"Telefono"} contenido={this.props.Usuarios[j].telefono} name={"telefono"} name2={this.state.telefono} tipo={"text"} onChange={this.onChange}/>
                                    <Datos nombre={"Correo"} contenido={this.props.Usuarios[j].correo} name={"correo"} name2={this.state.correo} tipo={"text"} onChange={this.onChange}/>                           
                                    <Datos nombre={"Contraseña"} contenido={""} name={"contraseña"} name2={this.state.contraseña} tipo={"password"} onChange={this.onChange}/>                                    
                                    <div className="row separacion">
                                        <div className="col-1"/>
                                        <div className="col-4">
                                            <span 
                                                className="input-group-text ancho2-5" 
                                                id={this.props.Usuarios[j].rolId}
                                            >
                                                Rol
                                            </span>       
                                        </div>
                                        <div className="col-6">
                                        <select className="col-6 form-control ancho" value={this.state.rolId} onChange={this.onChangeFormat}>
                                            <option selected>{this.props.Usuarios[j].rol}</option>
                                            <option value={this.props.Usuarios[j].rolId == "1" ? "2" : this.props.Usuarios[j].rolId == "2" ? "1" : "1"}>{this.props.Usuarios[j].rolId == 1 ? "Finanzas": this.props.Usuarios[j].rolId == 2 ? "Administrador" : "Administrador"}</option>
                                            <option value={this.props.Usuarios[j].rolId == "1" ? "3" : this.props.Usuarios[j].rolId == "2" ? "3" : "2"}>{this.props.Usuarios[j].rolId == 1 ? "Operaciones" : this.props.Usuarios[j].rolId == 2 ? "Operaciones" : "Finanzas"}</option>
                                        </select>     
                                        </div>
                                    </div>   
                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                        <Modal.Header closeButton>
                                          <Modal.Title className="text-primary">Editar Usuario</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>Estas apunto de cambiar los datos del siguiente Usuario ¿Estas Seguro? </div>
                                            <h5 className="separacion text-center text-danger" > {this.props.Usuarios[j].nombre}</h5>                       
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                          <button type="button" class="btn color_sitio2" onClick={this.onSubmit}> Guardar Cambios</button>
                                        </Modal.Footer>
                                    </Modal>
                                </form>
                            </div>
                            
                            <button className="btn color_sitio2 separacion" onClick={this.handleShow}>
                                Guardar Usuario
                            </button>
                        </div>

                    </div>
                )
            }else{
                return <div/>
            }
        }else{
           return <div/>
        } 
    }
}