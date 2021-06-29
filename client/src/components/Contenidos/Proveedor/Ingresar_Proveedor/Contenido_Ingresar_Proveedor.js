import React, { Component } from 'react'
import axios from 'axios';
import Dato from './Componentes_Ingresar_Proveedor/Dato'
import Moneda from './Componentes_Ingresar_Proveedor/Moneda'
import DatoMoneda from './Componentes_Ingresar_Proveedor/DatoMoneda'
import Modal from 'react-bootstrap/Modal'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()



export default class Ingresar_Usuario extends Component {
    state ={
        nombre: null,
        pais: null,
        direccion: null,        
        correo: null,
        telefono: null,
        moneda: null,

        nombre_b: null,
        iban: null,
        pais_b: null,
        n_aba: null,
        referencia: null,
        codigo_swift: null,
        cuenta_interbancaria: null,

        show: false,     
        monedas: [],
        new: false
    }

    componentDidMount = async () => {
        const res = await axios.get("/monedas/",{})
        console.log(res,"monedas");
        for (let i= 0; i < res.data.monedas.length ; i++){
            const moneda = {
              pais:  res.data.monedas[i].pais,
              id: res.data.monedas[i].id,
              moneda: res.data.monedas[i].moneda
            }
            this.setState({
              monedas: [...this.state.monedas, moneda]
            })
        }
    }

    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.nombre != null &&
            this.state.pais != null &&
            this.state.direccion != null &&        
            this.state.correo != null &&
            this.state.telefono != null &&
            this.state.moneda != null &&            
            this.state.nombre_b != null &&
            this.state.iban != null &&
            this.state.pais_b != null &&
            this.state.n_aba != null &&
            this.state.referencia != null &&
            this.state.codigo_swift != null &&
            this.state.cuenta_interbancaria != null &&
            this.state.nombre != "" &&
            this.state.pais != "" &&
            this.state.direccion != "" &&        
            this.state.correo != "" &&
            this.state.telefono != "" &&
            this.state.moneda != "" &&            
            this.state.nombre_b != "" &&
            this.state.iban != "" &&
            this.state.pais_b != "" &&
            this.state.n_aba != "" &&
            this.state.referencia != "" &&
            this.state.codigo_swift != "" &&
            this.state.cuenta_interbancaria != "" 
            
        ){
            const Proveedor = {
                nombre: this.state.nombre,
                pais: this.state.pais,
                direccion: this.state.direccion,
                correo: this.state.correo,
                telefono: this.state.telefono,
                moneda: this.state.moneda            
            }
            const Banco = {
                nombre_b: this.state.nombre_b,
                cuenta_interbancaria: this.state.cuenta_interbancaria,
                iban: this.state.iban,
                pais_b: this.state.pais_b,
                n_aba: this.state.n_aba,
                referencia: this.state.referencia,
                codigo_swift: this.state.codigo_swift,
            }
    
            console.log(Proveedor, Banco)
            const res = await axios.post("/sacate-la-url/", Proveedor)        
            const res2 = await axios.post("/sacate-la-url/", Banco) 
            toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  

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

    onChangeFiltro = (event) => {
        this.setState({
            filtro: event.target.value
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

    new = (e) =>{
        this.setState(prevState =>({
            new: !this.state.new
        }))
    }


    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Crear Proveedor</h1>
                <div className = "container separacion" >
                    <div className = "card shadow-lg">
                        <div className="card-header">
                            <h5> Formulario de creación de Proveedor</h5>
                        </div>
                        <form onSubmit = {this.onSubmit}>
                            <div className = "container separacion" >
                            
                                <div className="row mt-2 mb-2">         
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Nombre"} name={"nombre"} name2={this.state.nombre} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"País"} name={"pais"} name2={this.state.pais} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Dirección"} name={"direccion"} name2={this.state.direccion} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Correo"} name={"correo"} name2={this.state.correo} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Teléfono"} name={"telefono"} name2={this.state.telefono} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <DatoMoneda name={"moneda"} name2={this.state.moneda} onChange={this.onChange} monedas = {this.state.monedas}/>
                                    </div>
                                    <div className="col-7"/>
                                    <div className="col-5">
                                        <div className="form-check separacion">
                                          <input type="checkbox" className="form-check-input" id="validationFormCheck1" onClick={this.new}/>
                                          <label className="form-check-label" for="validationFormCheck1">Agregar Nueva Moneda</label>                                          
                                        </div>
                                    </div>
                                    <Moneda filtro ={this.state.new} />
                                </div>    
                                <h5 className="separacion"> Datos Bancarios</h5>                                                    

                                <div className="row ">
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Nombre"} name={"nombre_b"} name2={this.state.nombre_b} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">                                    
                                        <Dato nombre={"Cuenta Interbancaria"}  name={"cuenta_interbancaria"} name2={this.state.cuenta_interbancaria} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"IBAN"}  name={"iban"} name2={this.state.iban} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"País"}  name={"pais_b"} name2={this.state.pais_b} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Número ABA"}  name={"n_aba"} name2={this.state.n_aba} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Referencia"}  name={"referencia"} name2={this.state.referencia} onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Dato nombre={"Código SWIFT"}  name={"codigo_swift"} name2={this.state.codigo_swift} onChange={this.onChange}/>
                                    </div>

                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                        <Modal.Header closeButton>
                                          <Modal.Title className="text-primary">Ingresar Proveedor</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>Estas apunto de crear un nuevo Proveedor ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                          <button type="button" class="btn btn-primary" onClick={this.onSubmit} >Guardar Proveedor</button>
                                        </Modal.Footer>
                                    </Modal> 
                                </div>
                            </div>
                        </form>                        
                    </div>
                    <button className="btn color_sitio2 separacion" onClick={this.handleShow}>
                        Guardar Proveedor
                    </button>
                </div>
            </main>
        )
    }
}
