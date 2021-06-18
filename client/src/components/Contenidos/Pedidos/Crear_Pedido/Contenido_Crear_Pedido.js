import React, { Component } from 'react'
import Forma_Pago from './Componentes_Crear_Pedido/Forma_Pago'
import Tipo_CIF from './Componentes_Crear_Pedido/Tipo_CIF'
import Tipo_FOB from './Componentes_Crear_Pedido/Tipo_FOB'
import Modal from 'react-bootstrap/Modal'
import Productos from './Componentes_Crear_Pedido/Productos'
import codigos from '../../../JasonDePruebas/codigos.json'
import Codigos from './Componentes_Crear_Pedido/Codigos'
import NewProduct from './Componentes_Crear_Pedido/NewProduct'
import Producto from './Componentes_Crear_Pedido/Producto'



export default class Init extends Component {

    state ={
        json: codigos,

        productos: [],

        codigo:null,
        new: false,

        case: false,

        codigo_p: null,
        kilo: null,
        precio_kilo: "555",
        descripcion: "hola soy un producto",

        tipo_pago: null,
        fecha_vencimiento: null,   
        fecha_entrega: null,
        pago_inicial: null,
        cambio_pago_inicial: null,
        tipo_transporte: null,
        pago_transporte: null,
        pago_seguro: null,

        show: false
    }

    new = (e) =>{
        this.setState(prevState =>({
            new: !this.state.new
        }))
    }

    agregarProducto = (codigo,peso,precio)  => {
        const total = peso*precio
        const producto = [codigo,peso,precio,total]
        const productos = this.state.productos    
        this.setState({
            productos: [...productos,producto],
            codigo_p: null,
            kilo: null,                        
        })                                 
    }

    activo = () =>{    
        this.agregarProducto(this.state.codigo_p,this.state.kilo,this.state.precio_kilo)
    }

    eliminar = (codigo) => (e) => {
        const productos =  this.state.productos.filter((producto) => producto[0] !=codigo);
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

    onSubmit = () => {

    }


    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo">Crear un Pedido</h1>
                <div className = "container separacion" >
                    <div className = "card shadow-lg">
                        <div className="card-header">
                            Formulario para la creacion de un Pedido
                        </div>
                        <form onSubmit={this.onSubmit}  >
                            <div className = "container" >
                                <div className="container mb-5 mt-5" >
                                    <div className="input-group no_flex">
                                      <label className="input-group-text " for="inputGroupSelect01">Buscar un Proveedor </label>
                                      <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChange} ></input>
                                      <datalist id="datalistOptions">
                                        <option value="San Francisco"/>
                                        <option value="New York"/>
                                        <option value="Seattle"/>
                                        <option value="Los Angeles"/>
                                        <option value="Chicago"/>
                                      </datalist>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-group mb-3 mt-2 ml-3">
                                        <div className="col-2">
                                            <div className="input-group-prepend ancho2">
                                                <span className="input-group-text ancho" id="inputGroup-sizing-default">N° de Pedido</span>
                                            </div>
                                        </div>
                                        <div className="col-3">
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
                                        <div class="form-check mb-3">
                                          <input type="checkbox" className="form-check-input" id="validationFormCheck1" onClick={this.new}/>
                                          <label className="form-check-label" for="validationFormCheck1">Agregar Nuevo Producto</label>                                          
                                        </div>
                                        </div>

                                    </div> 
                                    {console.log(this.state.productos)}
                                    <NewProduct new={this.state.new}/>                                    

                                    <div className="input-group  mt-2 ">
                                        <div className="col-6" >
                                            <div className="container mb-4" >
                                                <div className="input-group no_flex">
                                                  <label className="input-group-text" for="inputGroupSelect01">Buscar Producto</label>
                                                  <input className="form-control ancho" list="datalistOptions2"  placeholder="Escribe Aquí para Buscar..." name={"codigo_p"} value ={this.state.codigo_p} onChange={this.onChange} />
                                                  <datalist id="datalistOptions2" >
                                                    <Codigos codigos={this.state.json} />
                                                  </datalist>
                                                </div>
                                            </div>
                                        </div>                                                                            
                                    </div> 

                                    <Producto onChange={this.onChange} kilo={this.state.kilo} descripcion={this.state.descripcion} precio_kilo={this.state.precio_kilo} filtro={this.state.codigo_p} activo={this.activo} />                                                                                                                                                                                                                                                    

                                    <Productos productos = {this.state.productos} eliminar ={this.eliminar}/>

                                    <div className="input-group no_flex ml-3">
                                        <div className="col-2">
                                            <label className="input-group-text ancho2 " for="inputGroupSelect01">Forma de Pago</label>
                                        </div>
                                        <div className="col-4">
                                            <select className="form-select ancho alto"  id="inputGroupSelect01" name={"tipo_pago"}  value = {this.state.tipo_pago} onChange={this.onChange} >
                                              <option defaultValue value={"null"}>Escoger Forma de Pago</option>
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
                                              <option defaultValue value="null">Escoger Tipo de Transporte</option>
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
                                            type="text" 
                                            name="pago_inicial"
                                            className="form-control" 
                                            aria-label="Default" 
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
                                            type="text" 
                                            name="cambio_pago_inicial"
                                            className="form-control" 
                                            aria-label="Default" 
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
                                      <button type="button" class="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                                      <button type="button" class="btn btn-primary" onClick={this.onSubmit} >Guardar Pedido</button>
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
