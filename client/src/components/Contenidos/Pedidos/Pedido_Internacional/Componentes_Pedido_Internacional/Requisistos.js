import React, { Component } from 'react'


export default class Init extends Component {
    render() {
        return (
          <div className="container separacion">
            <h5 className="container ml-3">Requisitos</h5>
            <div className="container">
              <div className="row">                          
                <div className="col-1"/>
                <div className="col-10 card mt-4">
                  <div className="row">

                    <div className="col-12 separacion"/>
                    <div className="col-1"/>
                    <div className="col-2">
                        <span className="input-group-text ancho2 " id="inputGroup-sizing-default">Pago Final</span>
                    </div>
                    <input 
                    type="text" 
                    name="cuenta_corriente"
                    className="form-control text-right col-3" 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default"

                    />
                    <div className="col-2">
                        <span className="input-group-text ancho2 " id="inputGroup-sizing-default">Valor Cambio</span>
                    </div>
                    <input 
                    type="text" 
                    name="cuenta_corriente"
                    className="form-control text-right col-3" 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default"

                    />
                    <div className="col-2"/>

                    <div className="col-12 separacion"/>
                    <div className="col-1"/>
                    <div className="col-2">
                      <label className="input-group-text ancho2" for="inputGroupSelect01">Buscar Agente</label>                    
                    </div>
                    <div className="col-4">
                      <input class="form-control ancho" list="datalistOptions" id="exampleDataList" placeholder="Escribe Aquí para Buscar..." value = {this.props.banco} onChange={this.props.onChangeBanco}></input>
                        <datalist id="datalistOptions">  
                          <option >{"Agente A"}</option>
                          <option >{"Agente B"}</option>
                          <option >{"Agente C"}</option>
                          <option >{"Agente D"}</option>
                        </datalist>
                    </div>

                    <div className="col-2">
                        <span className="input-group-text ancho2 " id="inputGroup-sizing-default">Abono</span>
                    </div>
                    <input 
                    type="text" 
                    name="cuenta_corriente"
                    className="form-control text-right col-2" 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default"

                    />
                    <div className="col-1"/>

                    <div className="col-12 separacion"/>
                    <div className="col-1"/>
                    <div className="col-3">
                        <span className="input-group-text ancho2 " id="inputGroup-sizing-default">DIN</span>
                    </div>
                    <input 
                    type="text" 
                    name="cuenta_corriente"
                    className="form-control text-right col-7" 
                    aria-label="Default" 
                    aria-describedby="inputGroup-sizing-default"

                    />
                    <div className="col-1"/>

                    <div className="col-12 separacion"/>
                    <div className="col-2"/>
                    <div className="col-4">
                      <label for="formFileMultiple" class="form-label">Adjuntar Documentos Originales</label>
                    </div>
                    <input className="col-5" type="file" id="formFileMultiple" multiple/>
                    <div className="col-1"/>

                    
                    <div className="col-12 separacion"/>
                  </div> 
                </div>
                <div className="col-1"/>
              </div>
            </div>
          </div>
        )
    }
}
