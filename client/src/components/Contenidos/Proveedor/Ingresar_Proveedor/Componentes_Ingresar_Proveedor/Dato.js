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
        <div className="row">
            <div className="col-4">
                <div className="input-group-prepend ancho2">
                    <span className="input-group-text ancho rounded-pill" id="inputGroup-sizing-default">{this.props.nombre} </span>
                </div>
            </div>
            <div className="col-8">
                <input 
                type="text" 
                name={this.props.name}
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.props.onChange}
                value={this.props.name2} 
                />
            </div>
        </div>        
      )
    }
}
