import React, { Component } from 'react'


export default class Dato extends Component {
    state ={
      check: false
    }

    onChangeCheck = () =>{
      this.setState(prevState =>({
        check: !prevState.show
      }))
    }

    render() {
      return (
        <div className="input-group mb-3">
            <div className="col-2">
                <div className="input-group-prepend ancho2">
                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">{this.props.nombre}</span>
                </div>
            </div>
            <div className="col-10">
                <input 
                type="text" 
                name="contacto"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                /*onChange={this.onChange}
                value={this.state.contacto} */
                />
            </div>
        </div>        
      )
    }
}
