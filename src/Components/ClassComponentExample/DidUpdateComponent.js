import React, { Component } from 'react'

export class DidUpdateComponent extends Component {
    constructor(props){
      console.log('entering constructor')
        super(props)
        this.state = {
            message : 'enappa madhidya...'
        }
    }
    
    componentDidMount(){
      console.log('componentDidMount')
        this.setState({message : 'bega baaa.. esht sala kaibeku.'})
    }

    componentDidUpdate(prevProps, prevState){
      console.log('entering componentDidUpdate')
      const newMessage = 'adesht late madthyappaa barake..'
      if(prevState.message !== newMessage){
        setTimeout(()=>{
          console.log(prevProps, prevState)
          this.setState({
            message: newMessage
          })
        },3000)
      }
    }
    
  render() {
    console.log('render method')
    return (
      <div>
        DidUpdateComponent : {this.state.message}
      </div>
    )
  }
}

export default DidUpdateComponent