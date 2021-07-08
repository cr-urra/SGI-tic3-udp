import React, { Component } from 'react'
import Gasto from './Gasto'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'
import 'react-toastify/dist/ReactToastify.css'
import Filtro from './filtro_observacion'


toast.configure()
export default class Crear_Observacion extends Component {
    state ={
      check: false,
      observacion: null,
      gasto: null,
      rut: null,
      show:false,
      Pedidos: [],
      pedido: null,
      estado: null      
    }

    recargar = async () => {
      const res = await axios.get("/pedidos/",{})
      console.log(res,"Did Mount")    
      for(let i=0; i < res.data.pedidos.length; i++){
        const res2= await axios.get("/proveedores/"+res.data.pedidos[i].proveedores_id,{})
        const res3= await axios.get("/tiene/pedidos/"+res.data.pedidos[i].id,{})
        let productos = []
        let producto
        for(let j=0;  j < res3.data.tiene.length;j++){
          const precio = await axios.get("/historialPrecios/maxDate/"+res3.data.tiene[j].productos_id,{})  
          producto = { producto: res3.data.tiene[j] , precio: precio.data.historialPrecios.precio}
          productos = [...productos,producto]
        }      
        console.log(res3,"Did Mount3")      
        const pedido = {
          pedido:  res.data.pedidos[i],
          n_pedido: res.data.pedidos[i].codigo,
          proveedor: res2.data.proveedores.nombre,
          tipo_pago: res.data.pedidos[i].tipo_pago,
          fecha_entrega: res.data.pedidos[i].fecha_inicial,
          tipo_transporte: res.data.pedidos[i].tipo_de_envio,
          pago_transporte: res.data.pedidos[i].valor_cif,
          pago_inicial: res.data.pedidos[i].pago_inicial,
          cambio_inicial: "dato faltante base",
          estado: res.data.pedidos[i].estado,
          productos: productos
        }
        this.setState({
          Pedidos: [...this.state.Pedidos,pedido]
        })
      }
    }

    cambio = async()  =>{     
      await this.recargar()
      for(let i=0; i< this.state.Pedidos.length ; i++){
        if(this.state.Pedidos[i].pedido.id===this.props.id){
          this.setState({
            pedido: this.state.Pedidos[i],
            estado: this.state.Pedidos[i].pedido.estado
          })        
        }
        this.props.cambio(this.state.Pedidos[i].pedido.observaciones)
      }      
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
    onChangeCheck = () =>{
      this.setState(prevState =>({
        check: !prevState.check
      }))
    }

    onChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = async e => {
      e.preventDefault()
      if(this.state.check === true){
        if(
          this.state.observacion!==null&&
          this.state.gasto!==null&&
          this.state.rut!==null&&
          this.state.observacion!==""&&
          this.state.gasto!==""&&
          this.state.rut!==""
        ){
          axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
          const Observacion = {
            observacion: this.state.observacion,
            gasto: this.state.gasto,
            pedidos_id: this.props.id  
          }
          const res = await axios.post("/observaciones/", Observacion)   
          
          const observador = {
            rut: this.state.rut,
            nombre: ""
          }
          const res2 = await axios.post("/observadores/",observador)
          let efectua
          if( res.data.resultado===true && res2.data.resultado===true){
            efectua = {
              observadores_id: res2.data.observadores.id,
              observaciones_id: res.data.observaciones.id
            }
          }
          const res3 = await axios.post("/efectua/",efectua)
          if(res3.data.resultado==true){
              toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide}) 
              this.cambio()
          }else{
              toast.error(res3.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
          }
        }else{
          toast.warn("Debes ingresar correctamente todos los datos, intenta nuevamente", {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }       
        this.setState({
          show: false
        })
      }else if(this.state.check===false){
        if(
          this.state.observacion!==null&&
          this.state.observacion!==""
        ){
          axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token') 
          const Observacion = {
            observacion: this.state.observacion,
            gasto: 0,
            pedidos_id: this.props.id  
          }
          const res = await axios.post("/observaciones/", Observacion)             

          if(res.data.resultado==true){
              toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide}) 
              this.cambio() 
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
    }

    render() {              
        return (
          <div className="container ">  
            <h5 className="ml-3"> Ingresar Observación </h5>
            <form onSubmit={this.onSubmit}>
              <div className="container mt-3 mb-4">
                <div class="input-group">
                  <textarea class="form-control" name="observacion" value = {this.state.observacion} onChange={this.onChange} aria-label="With textarea"/>
                </div>  
                <div className="row">
                  <div className="col-1"/>
                  <div className="col-2  mt-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value={this.state.check} onChange = {this.onChangeCheck} id="flexCheckDefault"/>
                      <label class="form-check-label" for="flexCheckDefault">
                        Conlleva un Gasto la Observación
                      </label>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                  <Gasto Filtro = {this.state.check} onChange = {this.onChange} contenido1={this.state.gasto} contenido2={this.state.rut}/>
                  </div>
                  <div className="col-3">
                    <button className="btn color_sitio2 mt-3" onClick={this.handleShow} type="button">
                      Guardar Observación
                    </button>
                  </div>        
                  <Modal show={this.state.show} onHide={this.handleClose} >
                      <Modal.Header closeButton>
                        <Modal.Title className="text-primary">Ingresar Observación</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <div>Estas apunto de crear una nueva observación ¿Estas Seguro que los datos ingresados son correctos? </div>                 
                      </Modal.Body>
                      <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={this.onSubmit} >Guardar observación</button>
                        <Filtro estado={this.state.estado} pedido={this.state.pedido} cambio={this.props.cambio} />
                      </Modal.Footer>
                  </Modal>   

                </div>            
              </div>
             
            </form>            
          </div>        
        )
    }
}
