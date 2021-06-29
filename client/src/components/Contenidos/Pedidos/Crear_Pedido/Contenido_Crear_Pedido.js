import React, { Component } from 'react'
import Forma_Pago from './Componentes_Crear_Pedido/Forma_Pago'
import Tipo_CIF from './Componentes_Crear_Pedido/Tipo_CIF'
import Tipo_FOB from './Componentes_Crear_Pedido/Tipo_FOB'
import Modal from 'react-bootstrap/Modal'
import Productos from './Componentes_Crear_Pedido/Productos'
import NewProduct from './Componentes_Crear_Pedido/NewProduct'
import Producto from './Componentes_Crear_Pedido/Producto'
import axios from 'axios'
import Opciones from './Componentes_Crear_Pedido/opciones'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Filtro_codigo from './Componentes_Crear_Pedido/Filtro_Codigo'

toast.configure()


export default class Init extends Component {

    state ={

        productos: [],

        codigo:null,
        new: false,

        codigo_p: null,
        kilo: null,
        precio_kilo: null,
        descripcion: "hola soy un producto",


        proveedor: null,
        tipo_pago: null,
        fecha_vencimiento: null,   
        fecha_entrega: null,
        pago_inicial: null,
        cambio_pago_inicial: null,
        tipo_transporte: null,
        pago_transporte: null,
        pago_seguro: null,

        show: false,
        proveedores: [],
        productos_all: []
    }

    new = (e) =>{
        this.setState(prevState =>({
            new: !this.state.new
        }))
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
        const res2 = await axios.get("/productos/",{})
        console.log(res2.data,"productos")
        
        for (let j=0; j< res2.data.productos.length ; j++){
            const precio = await axios.get("/historialPrecios/maxDate/"+res2.data.productos[j].id,{})
            const producto = {
                codigo: res2.data.productos[j].codigo,
                id: res2.data.productos[j].id,
                nombre: res2.data.productos[j].nombre,
                proveedores_id: res2.data.productos[j].proveedores_id,
                tipo: res2.data.productos[j].tipo,
                unidad_productos_id: res2.data.productos[j].unidad_productos_id,
                max_price: precio.data.historialPrecios.precio
            }
            this.setState({
                productos_all: [...this.state.productos_all, producto]
            })
        }
    }

    agregarProducto = (prod,cantidad) => (e) => {
        console.log(prod,cantidad,"producto")  
        const producto = {
            id: prod.id,
            codigo: prod.codigo,
            nombre: prod.nombre,
            tipo: prod.tipo,
            proveedores_id: prod.proveedores_id,
            unidad_productos_id: prod.unidad_productos_id,
            cantidad: cantidad,
            max_price: prod.max_price,
            total: cantidad*prod.max_price
        }
        this.setState({
            productos: [...this.state.productos,producto],
            codigo_p: null,
            kilo: null,                        
        })                               
    }


    eliminar = (codigo) => (e) => {
        const productos =  this.state.productos.filter((producto) => producto.codigo !=codigo);
        this.setState({
            productos: productos
        }) 
        this.forceUpdate()
        console.log(this.state.productos)
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

    onSubmit = async e => {
        e.preventDefault();
        if(
            this.state.proveedor !==  null 
            
        ){
            axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
            const Pedido = {
                codigo: this.state.codigo,
                pago_inicial: this.state.pago_inicial,
                fecha_inicial: this.state.fecha_entrega,
                fecha_vencimiento: null,
                estado: "produccion",
                tipo_de_envio: this.state.tipo_transporte,
                valor_cif: this.state.pago_transporte,
                seguro: this.state.pago_seguro,
                tipo_pago: this.state.tipo_pago
            }
            const res = await axios.post("/pedidos/",Pedido)

            console.log(res, "asd")
            for(let i=0; i< this.state.productos.length ; i++){
                let aux = {
                    pedidos_id: res.data.pedido.id,
                    productos_id: this.state.productos[i].id,
                    cantidad: parseInt(this.state.productos[i].cantidad)
                }
                console.log(aux,"coca-cola")
                const res3 = await axios.post("/tiene/",aux) 
            }
            const dolar = {
                precio: this.state.cambio_pago_inicial
            }
            const res2 = await axios.post("/historialDolar/",dolar)
            
            
            
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


    render() {
        return (
            <main className="content">
                {console.log(this.state)}
                <h1 className="display-5 titulo">Crear un Pedido</h1>
                <div className = "container separacion" >
                    <div className = "card shadow-lg">
                        <div className="card-header">
                            Formulario para la creacion de un Pedido
                        </div>
                        <form onSubmit={this.onSubmit}  >
                            <div className = "container" >
                                <div className="container mb-5 mt-5" >
                                    <div className="row">
                                        <div className="col-2">
                                            <label className="input-group-text ancho2 rounded-pill " for="inputGroupSelect01">Proveedor</label>
                                        </div>
                                        <div className="col-4">
                                            <select className="form-select ancho alto"  id="inputGroupSelect01" value = {this.state.proveedor} onChange={this.onChange} name={"proveedor"} >
                                              <option defaultValue value={"null"}>Escoger el Proveedor del producto</option>
                                              <Opciones proveedores={this.state.proveedores} />
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-group mb-3 mt-2 ml-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">N° de Pedido</span>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <input 
                                            type="text" 
                                            name="codigo"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.codigo}
                                            />
                                        </div>  
                                        <div className="col-2" />
                                        <div className="col-5">
                                            
                                        </div>
                                    </div>                                                                       
                                    
                                    <Filtro_codigo productos = {this.state.productos_all} filtro={this.state.proveedor} new={this.new}  onChange={this.onChange} codigo_p={this.state.codigo_p}/>

                                    <NewProduct new={this.state.new} codigo={this.state.codigo_p} productos = {this.state.productos_all}/> 

                                    <Producto  onChange={this.onChange}  producto = {this.state.productos_all.filter((producto)=> producto.codigo == this.state.codigo_p)}  filtro={this.state.codigo_p} agregarProducto={this.agregarProducto} kilo={this.state.kilo}/>                                                                                                                                                                                                                                                    

                                    <Productos productos = {this.state.productos} eliminar ={this.eliminar}/>

                                    <div className="input-group no_flex ml-3">
                                        <div className="col-2">
                                            <label className="input-group-text ancho2 " for="inputGroupSelect01">Forma de Pago</label>
                                        </div>
                                        <div className="col-4">
                                            <select className="form-select ancho alto"  id="inputGroupSelect01" name={"tipo_pago"}  value = {this.state.tipo_pago} onChange={this.onChange} >
                                              <option defaultValue value={null}>Escoger Forma de Pago</option>
                                              <option value="1" >Credito</option>
                                              <option value="2">Transferencia</option>                                              
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <Forma_Pago filtro={this.state.tipo_pago} fecha_vencimiento={this.state.fecha_vencimiento} onChange={this.onChange} />
                                        </div>
                                    </div>

                                    <div className="input-group mb-3 mt-4 ml-3">                                        
                                        <div className="col-3">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Fecha Estimada de Entrega</span>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <input 
                                            type="date" 
                                            name="fecha_entrega"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.fecha_entrega}
                                            />
                                        </div>   
                                    </div> 

                                    <div className="input-group no_flex ml-3">
                                        <div className="col-2">
                                            <label className="input-group-text ancho2 " for="inputGroupSelect01">Tipo de Transporte</label>
                                        </div>
                                        <div className="col-4">
                                            <select className="form-select ancho alto"   id="inputGroupSelect01" name={"tipo_transporte"} value = {this.state.tipo_transporte} onChange={this.onChange} >
                                              <option defaultValue value={null}>Escoger Tipo de Transporte</option>
                                              <option value="1">CIF</option>
                                              <option value="2">FOB</option>
                                            </select>
                                        </div>

                                        <div className="col-6">
                                            <Tipo_CIF filtro={this.state.tipo_transporte} pago_transporte={this.state.pago_transporte}/>
                                        </div>
                                        

                                    </div>

                                    <div className="input-group no_flex ml-3">      
                                        <div className="col-12">
                                            <Tipo_FOB filtro={this.state.tipo_transporte} pago_transporte={this.state.pago_transporte} pago_seguro={this.state.pago_seguro}/>  
                                        </div>                                                           
                                    </div>

                                    <div className="input-group mb-3 mt-4 ml-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Pago Inicial</span>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <input 
                                            type="number" 
                                            name="pago_inicial"
                                            className="form-control" 
                                            aria-label="Default" 
                                            placeholder="Dolar$"
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.pago_inicial}
                                            />
                                        </div>   

                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Cambio</span>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <input 
                                            type="number" 
                                            name="cambio_pago_inicial"
                                            className="form-control" 
                                            aria-label="Default" 
                                            placeholder="Valor Dolar"
                                            aria-describedby="inputGroup-sizing-default"
                                            onChange={this.onChange}
                                            value={this.state.cambio_pago_inicial}
                                            />
                                        </div> 
                                    </div>                                    
                                </div>     
                               
                                <Modal show={this.state.show} onHide={this.handleClose} >
                                    <Modal.Header closeButton>
                                      <Modal.Title className="text-primary">Ingresar Pedido</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>Estas apunto de crear un nuevo Pedido ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                      <button type="button" className="btn btn-primary" onClick={this.onSubmit} >Guardar Pedido</button>
                                    </Modal.Footer>
                                </Modal>                         
                            </div>                            
                        </form>
                        <div className="row">        
                            <div className="col-2 separacion">
                                <button className="btn  color_sitio2" onClick={this.handleShow}>
                                    Guardar Pedido
                                </button> 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        )
    }
}