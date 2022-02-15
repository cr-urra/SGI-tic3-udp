import React, { Component } from 'react'
import axios from 'axios'
import { toast , Slide  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-bootstrap/Modal'
import Estado from '.././Pedido_Componentes/Estado'
import Agentes from './Agentes'


export default class Init extends Component {

    state = {
      archivos: null,
      pago: null,
      cambio: null,
      agente: null,
      abono: null,
      din: null,
      show: false,

      AgentesAduana: [],
    }

    componentDidMount = async () => {
      const res = await axios.get("/agentesAduana/",{}) 
      console.log(res,"agentes");
      for (let i= 0; i < res.data.agentes_aduana.length ; i++){
          alert(res.data.agentes_aduana[i].id)
          const aux = await axios.get("/bancosAgentesAduana/"+res.data.agentes_aduana[i].id,{}) 
          const aux2 = await axios.get("/telefonosAgentesAduana/agentes/"+res.data.agentes_aduana[i].id,{})       
          console.log( await axios.get("/telefonosAgentesAduana/agentes/"+res.data.agentes_aduana[i].id,{}) )
          const agente = {
              id: res.data.agentes_aduana[i].id,
              nombre: res.data.agentes_aduana[i].nombre,
              apellido: res.data.agentes_aduana[i].apellido,
              telefono: aux2.data.telefono[0].telefono,
              banco: aux.data.bancosAgentesAduana.nombre_banco,
              n_cuenta: res.data.agentes_aduana[i].numero_cuenta,
              correo: res.data.agentes_aduana[i].correo,
              tipo_cuenta: aux.data.bancosAgentesAduana.tipo_cuenta,
              saldo: "falta conectar dato",
              cuenta_corriente: [
                  {
                      debe: "400.000",
                      haber: "0",
                      fecha: "20-02-2021",
                      id_pedido:"1",
                      descripcion: "descripcion 1"
                  },
                  {
                      debe: "0",
                      haber: "400.000",
                      fecha: "22-02-2021",
                      id_pedido:"2",
                      descripcion: "descripcion 2"
                  },
                  {
                      debe: "500.000",
                      haber: "0",
                      fecha: "23-02-2021",
                      id_pedido:"3",
                      descripcion: "descripcion 3"
                  }
              ]
              
          }
          this.setState({
              AgentesAduana: [...this.state.AgentesAduana, agente]
          })
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

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = async e => {
      e.preventDefault();
      if(
        //this.state.archivos !== null &&
        this.state.pago !== null &&
        this.state.cambio !== null &&
        this.state.agente !== null &&
        this.state.abono !== null &&
        this.state.din !== null && 
        //this.state.archivos !== "" &&
        this.state.pago !== "" &&
        this.state.cambio !== "" &&
        this.state.agente !== "" &&
        this.state.abono !== "" &&
        this.state.din !== ""
      ){
        axios.defaults.headers.post['X-CSRF-Token'] = localStorage.getItem('X-CSRF-Token')   

        const Requisitos = {
          pago_final: this.state.pago,
          agentes_aduana_id: this.state.agente,
          numero_din: this.state.din,
          //archivos: this.state.archivos,
          estado: "ingreso"
        }
        const res = await axios.put("/pedidos/"+this.props.id, Requisitos,{
          headers: {
            "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
          }
        })

        const dolar = {
          precio: this.state.cambio,
          tipo: "final",
          pedidos_id: this.props.id
        } 
        const res2 = await axios.post("/historialDolar/",dolar)

        const detalle = {
          precio_compra: this.state.cambio,
          historial_dolar_id: res2.data.historialDolar.id,
        }              
      
        const res5 = await axios.post("/detallesDolar/",detalle)

        const A_pago = {
          debe: this.state.abono
        }

        const res3 = await axios.put("/cuentasCorrientes/agentesAduana/"+this.state.agente,A_pago,{
          headers: {
            "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
          }
        })
        console.log(res3.data,"res3")
        const movimiento = {
          monto: this.state.abono,
          descripcion: "Pago Pedido: "+this.props.id,
          cuentas_corrientes_id: res3.data.cuentasCorrientes.id
        }

        const res4 = await axios.post("/movimientos/",movimiento)

        if(res4.data.resultado===true){
          if(res.data.resultado==true){
            toast.success(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
          }else{
            toast.error(res.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})  
          }          
        }else{
          toast.error(res4.data.message, {position: toast.POSITION.TOP_CENTER , transition: Slide})
        }

        
      }else{    
          toast.warn("Debes ingresar correctamente todos los datos, intenta nuevamente", {position: toast.POSITION.TOP_CENTER , transition: Slide})  
        }      
      }
    
    
    render() {
        return (
          <div>
            <form onSubmit={this.state.onSubmit}>
              <div className="container separacion">
                <h5 className="container ml-3">Requisitos</h5>

                  <div className="container">
                    <div className="row">                          
                      <div className="col-1"/>
                      <div className="col-10 card mt-4">
                        <div className="row separacion mt-5">
                          <div className="col-2 mt">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Pago Final</span>
                            </div>
                          </div>
                          <div className="col-4">
                            <input 
                            type="number" 
                            name="pago"
                            className="form-control" 
                            placeholder="$ Dolar"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.pago} 
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
                            name="cambio"
                            className="form-control" 
                            placeholder="$ CLP"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.cambio} 
                            />
                          </div>           
                        </div>   
                        <div className="row separacion">
                          <div className="col-2 mt">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Agente de Aduana</span>
                            </div>
                          </div>
                          <div className="col-4">
                              <select className="form-select ancho alto"   id="inputGroupSelect01" name={"agente"} value = {this.state.agente} onChange={this.onChange} >
                                <option defaultValue value="null">Escoger Agente</option>
                                <Agentes Agentes={this.state.AgentesAduana}/>
                              </select>
                          </div>  
                          <div className="col-2">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">Abono</span>
                            </div>
                          </div>
                          <div className="col-4">
                            <input 
                            type="number" 
                            name="abono"
                            className="form-control" 
                            placeholder="$ CLP"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.abono} 
                            />
                          </div>                             
                        </div> 
                        <div className="row separacion">
                          <div className="col-2">
                            <div className="input-group-prepend ancho2">
                                <span className="input-group-text ancho" id="inputGroup-sizing-default">DIN</span>
                            </div>
                          </div>
                          <div className="col-4">
                            <input 
                            type="text" 
                            name="din"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={this.onChange}
                            value={this.din} 
                            />
                          </div>                             
                        </div>   
                        <div className="input-group separacion">
                          <div className="col-1"/>
                          <div className="col-3 ">
                            <label for="formFileMultiple" class="form-label">Documentos Originales</label>
                          </div>
                          <div className="col-8">                    
                            <input className="ancho ml-4" type="file" id="formFileMultiple" onChange={this.onChange} name="archivos" value={this.state.archivos} multiple />
                          </div>
                        </div>
                      </div>
                      <div className="col-1"/>
                    </div>
                  </div>                            
              </div>

              <button className="btn color_sitio2 ancho" type ="button"onClick={this.handleShow}>
                Cambiar Estado
              </button>
              <Modal show={this.state.show} onHide={this.handleClose} >
                  <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Cambio de estado</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <div className="text-center">Estas apunto de cambiar el estado del pedido: <span className="text-primary">{this.props.codigo} </span>  </div>   
                      <Estado nombre="Estado Actual" contenido="En Tránsito (Internacional)" />
                      <Estado nombre="Proximo Estado" contenido="Ingreso al País" />
                      <div className="col-12 mb-5"></div>
                      <div className="mb-3 text-center"> ¿Estas Seguro que los datos ingresados son correctos? </div>  
                  </Modal.Body>
                  <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Cerrar</button>
                    <button type="button" className="btn btn-danger" onClick={this.onSubmit} >Guardar Pedido</button>
                  </Modal.Footer>
              </Modal>                    
            </form>           
          </div>
        )
    }
}
