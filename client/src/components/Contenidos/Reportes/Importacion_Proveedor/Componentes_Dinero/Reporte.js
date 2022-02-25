import React, { Component } from 'react'
import Lineas from './Lineas'
import { Accordion, Card, Button } from 'react-bootstrap';
import axios from 'axios'



export default class Opcion extends Component {

    componentDidMount = async () => {
        for (let j=0; j< this.props.Productos.length ; j++){
            if(this.props.Productos[j].proveedores_id == this.props.Proveedor.id){  
                let auxiliar = {
                  Producto: this.props.Productos[j],
                  Fecha1: this.props.fecha1,
                  Fecha2: this.props.fecha2
                }
                const res = await axios.put("/historialPrecios/betweenDate", auxiliar, {
                    "headers": {
                        "X-CSRF-Token": localStorage.getItem('X-CSRF-Token') 
                    }
                })          

                this.props.Productos[j].max_price = res.data.historialPrecios[0].precio
            }
        }
        this.forceUpdate()
    }
    
      
    render() {
        
        if(this.props.estado==true){
            return (       
                <div>
                    <div >

                        <div>
                            <h2 className="text-center separacion">Reporte</h2>
    
                            <div className="container separacion">
                                <div className="card border-primary  shadow-lg">
                                    <div className="card-header text-primary" style={{fontSize:"18px"}}>
                                        JJPlastalloy
                                    </div>
                                    <div className="container" >
                                        <h1 className="text-center" style={{fontSize:"25px",marginTop:"10px"}}>Monto Importacion Proveedor JJPlastalloy</h1>
                                        <div className="input-group no_flex">
                                            <table className="table text-center table-striped table-bordered" style={{marginTop:"20px"}}>
                                                <thead>
                                                    <tr>
                                                        <th >Id Producto</th>
                                                        <th >Nombre</th>
                                                        <th >Pesos Chile</th>
                                                        <th >Dolares Chile</th>            
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <Lineas Productos={this.props.Productos.filter(producto => producto.proveedores_id === this.props.id)} />                            
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                                <div className="container separacion_final">
                                    <div className="row g-2  mb-4">
                                        <div className="col-12 text-center">
                                        <button type="button" className="btn btn-success rounded-pill" style={{width:"20%"}} >
                                            Exportar 
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                    </div>    
                </div>
            )

        }else{
            return <div/>
        }
        
    }
}