import React, { Component } from 'react'
import Reporte from './Reporte'
import { Accordion, Card, Button } from 'react-bootstrap';
import Productos from './Productos'
import axios from 'axios'


export default class Opcion extends Component {

    state = {
        f_inicio: null,
        f_termino: null,
        filtro: false,
        productos: [],
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
                max_price: precio.data.historialPrecios.precio,
                filtro: false
            }
            this.setState({
                productos: [...this.state.productos, producto]
            })                                                
        }
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

    render() {
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
                                <div className="row mt-5">
                                    <div className="col-4 text-center">
                                        <h5>Filtrar por Año </h5>
                                    </div>
                                    <div className="col-8">
                                        <div className="input-group mb-3">
                                            <div className="col-1"/>
                                            <div className="col-2">
                                                <div className="input-group-prepend ancho2">
                                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Desde</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <input 
                                                type="date" 
                                                name="f_inicio"
                                                className="form-control" 
                                                aria-label="Default" 
                                                aria-describedby="inputGroup-sizing-default"
                                                onChange={this.onChange}
                                                value={this.state.f_inicio}
                                                />
                                            </div> 
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="col-1"/>
                                            <div className="col-2">
                                                <div className="input-group-prepend ancho2">
                                                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">Hasta</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <input 
                                                type="date" 
                                                name="f_termino"
                                                className="form-control" 
                                                aria-label="Default" 
                                                readOnly 
                                                aria-describedby="inputGroup-sizing-default"
                                                onChange={this.onChange}
                                                value={this.state.f_termino}
                                                />                                               
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
                        <h2 className="text-center separacion">Reporte</h2>
                        <Reporte Proveedor = {this.props.Proveedores[j]} Productos={this.state.productos} id={this.props.id}/>
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