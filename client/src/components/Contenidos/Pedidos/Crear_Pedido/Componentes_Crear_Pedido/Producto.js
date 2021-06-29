import React, { Component } from 'react'
import axios from 'axios'


export default class Lista extends Component {

    state = {
        precio: 0
    }

    getPrecio = async (id) =>{
        const res = await axios.get("/historialPrecios/maxDate/"+id,{})
        
        console.log(res,"6")
        return res.data.historialPrecios.precio
    }

    getPrecio2 = () =>{
        return this.getPrecio(this.props.producto[0].id)
    }



    render() {
      if(this.props.filtro!=null && this.props.producto[0]!=null){
        return (    
        <div>
            {console.log(this.props.producto[0].id,"3")}
          <div className="input-group  mt-2 ">
            <div className="col-6" >
              <div className="input-group mb-3">
                    <div className="col-3">
                        <div className="input-group-prepend ancho2">
                            <span className="input-group-text ancho" id="inputGroup-sizing-default">Descripción</span>
                        </div>
                    </div>
                    <div className="col-9">
                        <input 
                        type="text" 
                        name="descripcion"
                        className="form-control text-center" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        readOnly
                        value={this.props.producto[0].tipo}
                        />
                    </div>   
                </div>
            </div>
            
            <div className="col-3">
                <div className="input-group mb-3">
                    <div className="col-4">
                        <div className="input-group-prepend ancho2">
                            <span className="input-group-text ancho " id="inputGroup-sizing-default">Kg</span>
                        </div>
                    </div>
                    <div className="col-8">
                        <input 
                        type="number" 
                        name="kilo"
                        className="form-control" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        onChange={this.props.onChange}
                        value={this.props.kilo}
                        />
                    </div>   
                </div>
            </div>
            <div className="col-3">
                <div className="input-group mb-3">
                    <div className="col-3">
                        <div className="input-group-prepend ancho2">
                            <span className="input-group-text ancho" id="inputGroup-sizing-default" >$/kg</span>
                        </div>
                    </div>
                    <div className="col-9">                        
                        <input 
                        type="number" 
                        name="precio_kilo"
                        className="form-control text-center" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"
                        readOnly                         
                        value={this.getPrecio2()}  
                        />
                    </div>   
                </div>
            </div>
        </div>
        <div className="input-group mb-3">
           <div className="col-9 mr-5"/>
           <div className="col-2">
               <button className=" btn color_sitio2" type="button"  id="botton1" onClick={this.props.activo}>
                   Agregar Producto
               </button>
           </div>
        </div>   
        </div> 
        )
      }else{
        return <div/>
      }
     
    }
}
