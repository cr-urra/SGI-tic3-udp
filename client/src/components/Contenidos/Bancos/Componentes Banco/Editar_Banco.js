import React, { Component } from 'react'
import Datos from './Datos'
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default class Banco extends Component {
    
    state ={
        id: null,
        nombre: null,        
        iban: null,
        pais: null,
        n_aba: null,
        referencia: null,        
        codigo_swift: null,        
        cuenta_interbancaria: null,
        aba_id:null,
        pais_id: null,
        

        show:false
    }
    
    
    
    
    
    
    
    componentDidMount = async () => {
        if(this.props.banco !== ""){
            let j;
            for(let i = 0 ; i < this.props.bancos.length ; i++){                
                if(this.props.banco=== this.props.bancos[i].nombre){
                    j = i;
                }
            }
            if(this.props.bancos[j]!=null){
                console.log(this.props.bancos[j], "revisa aqui 23434")
                this.setState({
                    id: this.props.bancos[j].id,
                    nombre: this.props.bancos[j].nombre ,        
                    iban:  this.props.bancos[j].IBAN,
                    pais:  this.props.bancos[j].pais,
                    n_aba: this.props.bancos[j].ABA ,
                    referencia: this.props.bancos[j].referencia ,        
                    codigo_swift:  this.props.bancos[j].SWIFT,        
                    cuenta_interbancaria: this.props.bancos[j].cuenta_interbancaria,
                    aba_id: this.props.bancos[j].numeros_aba_id,
                    pais_id: this.props.bancos[j].paises_id
                })
            }
        }    
    }
    
    onSubmit = async (e) => { 
        e.preventDefault();
        console.log(this.state)
        if(
            this.state.nombre != "" &&        
            this.state.iban != "" &&
            this.state.pais != "" &&
            this.state.n_aba != "" &&
            this.state.referencia != "" &&        
            this.state.codigo_swift != "" &&        
            this.state.cuenta_interbancaria != "" 
        ){

            const banco = {
                nombre_banco: this.state.nombre,            
                codigo_iban: this.state.iban,
                //pais: this.state.pais,
                //n_aba: this.state.n_aba,
                referencia: this.state.referencia,
                swift_code: this.state.codigo_swift,
                numero_cuenta: this.state.cuenta_interbancaria,
    
            }
            console.log(banco,"llegue hasta aqui")
            const res = await axios.put("/cuentasBancos/"+this.state.id, banco , {"headers": {
                "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
              }} )

            const aba = {
                numero_aba: this.state.n_aba
            }
              const res2 = await axios.put("/numerosAba/"+this.state.aba_id , aba , {"headers": {
                "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
              }} )
            

              if(res.data.resultado==true){
                toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
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

    render() {

        if(this.props.banco !== ""){
            let j;
            for(let i = 0 ; i < this.props.bancos.length ; i++){
                
                if(this.props.banco=== this.props.bancos[i].nombre){
                    j = i;
                }
            }
            if(this.props.bancos[j]!=null){
                return (
                    <div>
                        
                        <div className="container separacion">

                            <div className="card border-primary  shadow-lg">
                                <form onSubmit={this.onSubmit}>
                                    <div className="card-header text-primary">
                                        <div className="row">
                                            <div className="col-4">
                                                <h4>{this.props.bancos[j].nombre}</h4>
                                            </div>
                                            <div className="col-7"/>
                                            <div className="col-1">
                                                <Link to = '/users/Bancos'> 
                                                    <button className="btn btn-primary ancho btn-sm" onClick={this.props.change} value ={false}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                                          <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </div>
                                   
                                    <Datos nombre={"Nombre"} contenido={this.props.bancos[j].nombre} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    <Datos nombre={"Cuenta Interbancaria"} contenido={this.props.bancos[j].cuenta_interbancaria} name={"cuenta_interbancaria"} name2={this.state.cuenta_interbancaria} onChange={this.onChange}/>
                                    <Datos nombre={"País"} contenido={this.props.bancos[j].pais} name={"pais"} name2={this.state.pais} onChange={this.onChange}/>
                                    <Datos nombre={"Referencia"} contenido={this.props.bancos[j].referencia} name={"referencia"} name2={this.state.referencia} onChange={this.onChange}/>
                                    <Datos nombre={"IBAN"} contenido={this.props.bancos[j].IBAN} name={"iban"} name2={this.state.iban} onChange={this.onChange}/>                                    
                                    <Datos nombre={"Número ABA"} contenido={this.props.bancos[j].ABA} name={"n_aba"} name2={this.state.n_aba} onChange={this.onChange}/>                                    
                                    <Datos nombre={"Código SWIFT"} contenido={this.props.bancos[j].SWIFT} name={"codigo_swift"} name2={this.state.codigo_swift} onChange={this.onChange}/>                                    
                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                        <Modal.Header closeButton>
                                          <Modal.Title className="text-primary">Editar Banco</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>Estas apunto de cambiar los datos del siguiente banco ¿Estas Seguro? </div>
                                            <h5 className="separacion text-center text-danger" > {this.props.bancos[j].nombre}</h5>                       
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                          <button type="submit" class="btn color_sitio2" onClick={this.onSubmit}> Guardar Cambios</button>
                                        </Modal.Footer>
                                    </Modal>
                                </form>
                            </div>
                            
                            <button className="btn color_sitio2 separacion" onClick={this.handleShow}>
                                Guardar Banco
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