import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form_Ingresar_Producto';


export default class Contenido_Agente_Aduana extends Component {


    render() {
        return (


                <div className="container separacion">

                    <div className="card shadow-lg">

                        <div className="card-header">
                            Formulario para Ingresar Productos
                        </div>
                        <Form/>
                    </div> 

                    <div className="card shadow-lg" style={{marginTop:"40px"}}>

                        <div className="card-header" >
                            Ingresar Productos Por Lote
                        </div>
                        

                        <div className="container separacion">
                            <form>
                                <div class="input-group mb-3">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                                        <label class="custom-file-label" for="inputGroupFile02">Choose file csv</label>
                                    </div>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="">Upload</span>
                                    </div>
                                </div>
                            </form>
                                <h1 style={{fontSize:"35px"}}>Ejemplo de tabla para importar</h1>
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                        <th scope="col">Codigo</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripcion</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Proveedor</th>
                                        <th scope="col">Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">2132</th>
                                        <td>Plastico </td>
                                        <td>Resistencia negro</td>
                                        <td>$1,02</td>
                                        <td>JJ plastalloy</td>
                                        <td>Plastico</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">23412</th>
                                        <td>Aditivo</td>
                                        <td>Aditivo para color</td>
                                        <td>$0,90</td>
                                        <td>Karina</td>
                                        <td>Aditivo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            

                        </div>
                       
                    </div> 

                </div>

        )
    }
}
