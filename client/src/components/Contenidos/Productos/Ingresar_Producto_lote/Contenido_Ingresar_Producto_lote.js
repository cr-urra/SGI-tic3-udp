import React, { Component } from 'react'
import Card from '../Ingresar_Producto/Componentes_Ingresar_Producto/Card_Form';
import {Link} from 'react-router-dom';



export default class Init extends Component {

    state = {

        file: null
    }

    handleFile(e){

        let file = e.target.files[0]
        this.setState({file : file})
    }

    handleUpload(e){
        console.log(this.state, 'The fucking File $$$$');
    }

    render() {
        return (
            <main className="content">
                <h1 className="display-5 titulo"> Ingresar Productos</h1>

                <div className="container separacion">
                <div className="card shadow-lg" style={{marginTop:"40px"}}>

                    <div className="card-header" >
                        Ingresar Productos Por Lote
                    </div>
                    <div className="container separacion">
                        <label for="formFile" class="form-label">Descargar Plantilla Excel</label>
                        <div className="mb-2">
                            <a href="#" download>
                                <button type="button" className="btn btn-primary rounded-pill mt-1 ml-3">Download Excel</button>
                            </a>
                        </div>
                        <form>
                            <div className="mb-1">
                                <label for="formFile" class="form-label mt-3">Seleccione su Archivo</label>
                                <input class="form-control" type="file" id="formFile" onChange={(e)=>this.handleFile(e)}/>
                            </div>
                            <button onClick={(e) =>this.handleUpload(e)} type="button" className="btn btn-primary rounded-pill mt-3 ml-3" >
                                Subir Archivo
                            </button>
                        </form>
                            

                    </div>

                </div> 
                </div>
            </main>
        )
    }
}
