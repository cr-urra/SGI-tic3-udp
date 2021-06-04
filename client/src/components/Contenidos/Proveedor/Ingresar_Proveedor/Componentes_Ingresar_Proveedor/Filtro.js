import React, { Component } from 'react'
import New from './New_Banc'
import Old from './Old_Banc'


export default class Filtro extends Component {
    state ={
      check: false
    }

    onChangeCheck = () =>{
      this.setState(prevState =>({
        check: !prevState.show
      }))
    }

    render() {
      if(this.props.filtro==="old"){
        return <Old/>
      }else if(this.props.filtro==="new"){
        return <New/>
      }else{
        return <div/>
      }
      
    }
}
