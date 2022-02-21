import React, { Component } from 'react'
import Tabla from "./Tabla"
import axios from 'axios'



export default class Opcion extends Component {

    componentDidMount = async () => {
        console.log(1)
        for (let j=0; j< this.props.Productos.length ; j++){
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
                                         {this.props.AgenteAduana.nombre}
                                    </div>
                                    <div className="container" >
                                        <Tabla AgenteAduana={this.props.AgenteAduana} f_inicio={this.props.fecha1} f_termino={this.props.fecha2} />
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