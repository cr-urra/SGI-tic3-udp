import React, { Component } from 'react'


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
                <h1 className="display-5 titulo"> Ingresar Productos por Lotes</h1>

                <div className="container separacion">
                    <div className="row">
                        <div className="col-1"/>

                        <div className="col-xs-12 col-md-5 col-lg-5 mb-3">
                            <div className="card custom1">
                                <div className="container">
                                    <div className="card-body">
                                        <h1 className="title text-primary text-center separacion">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                            </svg>
                                        </h1>
                                        <h5 className="card-title text-center">Descargar Plantilla Excel</h5>
                                        <div className="text-center center">
                                                <a href="/download" download={"Plantilla.xlsx"} >Descargar Plantilla</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-md-5 col-lg-5 mb-3">
                            <div className="card custom1">
                                <div className="container">
                                    <div className="card-body">
                                        <h1 className="title text-primary text-center separacion">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                        </h1>
                                        <h5 className="card-title text-center">Subir Plantilla Excel</h5>    
                                        <div className="container center2">
                                            <label for="formFileMultiple" class="form-label"/>
                                            <input type="file" id="formFileMultiple" className="ancho ml-4"/> 
                                            <div className="separacion text-center">
                                                <button className="btn color_sitio2 margen">
                                                    Subir Plantilla
                                                </button>
                                            </div>
                                        </div>
                             
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1"/>
                    </div>
                </div>
            </main>
        )
    }
}
