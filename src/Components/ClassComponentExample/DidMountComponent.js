import React, { Component } from 'react'

export class DidMountComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : 'enappa madhidya...'
        }
    }
    
    componentDidMount(){
        this.setState({message : 'bega baaa.. esht sala kaibeku.'})
    }

  render() {
    return (
      <div>DidMountComponent : {this.state.message}</div>
    )
  }
}

export default DidMountComponent