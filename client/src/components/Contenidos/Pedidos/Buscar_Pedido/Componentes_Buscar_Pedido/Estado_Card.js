import React, { Component } from 'react'

export default class Opcion extends Component {
    render() {     
            if(this.props.estado==="produccion"){
                return(
                    <div className="col-5 text.center mt-2">
                      Estado: Producción
                    </div>
                )
            }else if(this.props.estado==="internacional"){
                return(
                    <div className="col-5 text.center mt-2">
                      Estado: En Transito (Internacional)
                    </div>
                )
            }else if(this.props.estado==="ingreso"){
                return(
                    <div className="col-5 text.center mt-2">
                      Estado: Ingreso al País
                    </div>
                )
            }else if(this.props.estado==="nacional"){
                return(
                    <div className="col-5 text.center mt-2">
                      Estado: En Transito (Nacional)
                    </div>
                )
            }else if(this.props.estado==="finalizado"){
                return(
                    <div className="col-5 text.center mt-2">
                      Estado: Finalizado
                    </div>
                )
            }else{
                return <div/>
            }

    }
}