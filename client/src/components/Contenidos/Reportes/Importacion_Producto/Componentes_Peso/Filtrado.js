import React, { Component } from 'react'
import Reporte from './Reporte'
import { Accordion, Card, Button } from 'react-bootstrap';
import Productos from './Productos'
import axios from 'axios'
import Carga from '../Carga'




export default class Opcion extends Component {

     state = {
        fecha1: null,
        fecha2: null,
        filtro: false,
        productos: [],
        estado: false,
        carga: false
    }

    componentDidMount = async () => {

        const res2 = await axios.get("/productos/",{})
        
        for (let j=0; j< res2.data.productos.length ; j++){
            const precio = await axios.get("/historialPrecios/"+res2.data.productos[j].id,{})  
            console.log(precio, "precio")                   
            const producto = {
                codigo: res2.data.productos[j].codigo,
                id: res2.data.productos[j].id,
                nombre: res2.data.productos[j].nombre,
                proveedores_id: res2.data.productos[j].proveedores_id,
                tipo: res2.data.productos[j].tipo,
                unidad_productos_id: res2.data.productos[j].unidad_productos_id,
                max_price: 0,
                filtro: false
            }
            this.setState({
                productos: [...this.state.productos, producto]
            })                                                
        }
        await this.setState({
            carga: true
        })
    }



    filtro = () =>{
        if(this.state.filtro===true){
            for(let i=0; i < this.state.productos.length ; i++){
                this.state.productos[i].filtro = false               
            }
            this.forceUpdate()
        }
        this.setState(prevState =>({
            filtro: !prevState.filtro
          }))        
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChange2 = (e) =>{
        for(let i=0; i < this.state.productos.length ; i++){
            if(this.state.productos[i].codigo===e.target.value){
                this.state.productos[i].filtro = !this.state.productos[i].filtro
            }
        }
        this.forceUpdate()
    }

    cambio = (e) =>{
        this.setState(prevState =>({
            estado: !prevState.estado
          })) 
        this.forceUpdate()
    }

    render() {
        if(this.state.carga == true){

        
            if(this.props.Proveedor !== ""){
                let j;
                for(let i = 0 ; i < this.props.Proveedores.length ; i++){

                    if(this.props.Proveedor=== this.props.Proveedores[i].nombre){
                        j = i;
                    }
                }
                if(this.props.Proveedores[j]!=null){
                    return (      
                        <div >                    
                            <div className="container separacion">
                                <div className="card border-primary  shadow-lg">
                                    <div className="card-header text-primary">
                                        Proveedor: {this.props.Proveedores[j].nombre}
                                    </div>
                                    <h3 className="separacion text-center">Filtrar Reporte</h3>
                                    <div >            
                                        <div className="row mt-4" >
                                          <div className="col-4 text-center">
                                            <h4 className="text-center"> Filtrar fechas</h4>                  
                                          </div>
                                          <div className="col-7">
                                            <div className="input-group mb-3">
                                                <div className="col-3 mb-2">
                                                    <div className="input-group-prepend ancho2">
                                                        <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                                                    </div>
                                                </div>                     
                    
                                                <div className="col-xs-12 col-md-9 col-lg-9">
                                                    <input 
                                                    type="date" 
                                                    name="fecha1"
                                                    className="form-control"
                                                    placeholder="AAAA" 
                                                    aria-label="Default" 
                                                    aria-describedby="inputGroup-sizing-default"
                                                    onChange={this.onChange}
                                                    value={this.state.fecha1}
                                                    />
                                                </div>
                                              </div>  
                                              <div className="input-group mb-3">
                                                <div className="col-3 mb-2">
                                                    <div className="input-group-prepend ancho2">
                                                        <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                                                    </div>
                                                </div>
                    
                                                <div className="col-xs-12 col-md-9 col-lg-9">
                                                    <input 
                                                    type="date" 
                                                    name="fecha2"
                                                    className="form-control" 
                                                    placeholder="AAAA"
                                                    aria-label="Default" 
                                                    aria-describedby="inputGroup-sizing-default"
                                                    onChange={this.onChange}
                                                    value={this.state.fecha2}
                                                    />
                                                </div>
                                              </div>  
                                              <div className="input-group mb-3 aling-end">
                                                <div className="col-8"/>
                                                <div className="col-3">
                                                  <button className="btn btn-danger" onClick={this.d_filtrar}>Borrar Filtro</button>
                                                </div>                      
                                              </div>
                                          </div>
                                        </div>                                        
                                    </div>
                                    <Accordion >
                                      <Card className="separacion">
                                        <Card.Header>                                      
                                            <div className="row">
                                                <div className="col-2 ">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        Productos
                                                    </Accordion.Toggle>
                                                </div>
                                                <div className="col-8">
                                                    <div class="form-check mt-2">
                                                      <input class="form-check-input" type="checkbox" onChange={this.filtro} id="flexCheckChecked" />
                                                      <label class="form-check-label" for="flexCheckChecked">
                                                        Filtrar Productos
                                                      </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                          <Card.Body>                                                                           
                                            <div class="container">
                                                <div class="row g-2">                                        
                                                <Productos Productos={this.state.productos} filtro ={this.state.filtro} id={this.props.id} onChange={this.onChange2}/>                                                                                      
                                                </div>
                                            </div>
                                          </Card.Body>
                                        </Accordion.Collapse>
                                      </Card>
                                    </Accordion>
                                </div>                       
                            </div>   
                    
                              <Reporte Proveedor = {this.props.Proveedores[j]} Productos={this.state.productos} id={this.props.id} fecha1 = {this.state.fecha1} fecha2 = {this.state.fecha2}/>
                    
                        </div> 
                    )                
                }else{
                    return <div/>
                }
            }else{
                return <div/>
            } 
        }else{
            return <Carga/>
        }    
  }
}