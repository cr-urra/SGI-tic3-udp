import React, { Component } from 'react'
import axios from 'axios';
import InputForm from './InputForm'
import InputFormProveedor from './InputFormProveedores'
import InputFormMedidas from './InputFormMedidas'
import Medida from './Medida'
import Modal from 'react-bootstrap/Modal'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


export default class Contenido_Ingresar_Producto extends Component {

    state ={ 
        nombre: null,
        codigo: null,        
        precio: null,
        proveedor:null,
        tipo:null,
        medida: null,

        show: false,
        proveedores: [],
        medidas: [],
        new: false

    }

    componentDidMount = async () => {
        const res = await axios.get("/proveedores/",{})
        console.log(res,"proveedores");
        for (let i= 0; i < res.data.proveedores.length ; i++){
            const proveedor = {
              nombre:  res.data.proveedores[i].nombre,
              id: res.data.proveedores[i].id
            }
            this.setState({
              proveedores: [...this.state.proveedores, proveedor]
            })
        }

        const res2 = await axios.get("/unidadProductos/",{})
        console.log(res2,"unidad")
        for (let j= 0; j < res2.data.unidadProductos.length ; j++){
            const medida = {
                id: res2.data.unidadProductos[j].id,
                tipo: res2.data.unidadProductos[j].nombre_medida,
                valor_unidad: res2.data.unidadProductos[j].valor_unidad
            }
            this.setState({
                medidas: [...this.state.medidas, medida]
            })
        }
        {console.log(this.state.medidas,"medidas")}
    }

    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.nombre !=  null && 
            this.state.codigo !=  null &&           
            this.state.precio !=  null &&
            this.state.proveedor != null &&
            this.state.tipo != null &&
            this.state.medida != null &&
            this.state.nombre !=  "" && 
            this.state.codigo !=  "" &&           
            this.state.precio !=  "" &&
            this.state.proveedor != "" &&
            this.state.tipo != "" &&
            this.state.medida != "" 
        ){
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const Producto = {
                nombre: this.state.nombre,
                codigo: this.state.codigo,                
                
                unidad_productos_id: this.state.medida,
                proveedores_id: this.state.proveedor,
                tipo: this.state.tipo 
            }
            console.log(Producto)
            const res = await axios.post("/productos/", Producto)  
            const Precio ={
                precio: this.state.precio,
                productos_id: res.data.productos.id
            }
            const res2 = await axios.post("/historialPrecios/",Precio)
            console.log(res2)
            

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

    new = (e) =>{
        this.setState(prevState =>({
            new: !this.state.new
        }))
    }

    render() {
        return (
            <div className="container separacion">
                <form onSubmit ={this.onSubmit}>
                    
                    <div className="row g-2 mt-2 mb-2">                 
                        <InputForm field ="Nombre" onChange = {this.onChange} field2 = {this.state.nombre} name="nombre" type={"text"}/>                       
                        <InputForm field ="Codigo" onChange = {this.onChange} field2 = {this.state.codigo} name="codigo" type={"text"}/>                        
                        <InputFormMedidas  onChange = {this.onChange} field2 = {this.state.medida} name="medida" medidas={this.state.medidas}/>
                        <InputForm field ="Precio" onChange = {this.onChange} field2 = {this.state.precio} name="precio" type={"number"}/>
                        <InputFormProveedor onChange = {this.onChange} field2 = {this.state.proveedor} name="proveedor" proveedores={this.state.proveedores}/>
                        <InputForm field ="Tipo" onChange = {this.onChange} field2 = {this.state.tipo} name="tipo" type={"text"}/>
                        <div className="col-7">
                            <button type="button" className="btn btn-primary rounded-pill mt-3 ml-3" onClick={this.handleShow}>
                                Guardar Productos
                            </button>  
                        </div>
                        <div className="col-5">
                            <div className="form-check separacion">
                              <input type="checkbox" className="form-check-input" id="validationFormCheck1" onClick={this.new}/>
                              <label className="form-check-label" for="validationFormCheck1">Agregar Nueva Medida</label>                                          
                            </div>
                        </div>

                        <Medida filtro ={this.state.new} />

                            
                    </div>
                    

                    <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                          <Modal.Title className="text-primary">Ingresar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>Estas apunto de crear un nuevo Producto ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                        </Modal.Body>
                        <Modal.Footer>
                          <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                          <button type="button" class="btn btn-primary" onClick={this.onSubmit} >Guardar Producto</button>
                        </Modal.Footer>
                    </Modal>                            
                </form>
                
            </div>
        )
    }
}
