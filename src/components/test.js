import React, { Component } from 'react'

 class Test extends Component {
    componentDidMount() { 
        this.setState({
            a:20
        })
        console.log("componentDidMount")
     }
     componentDidUpdate(prevProps, prevState) { 
        console.log("componentDidUpdate")
     } 
    constructor(props){
        super(props)
        this.state={
            a:10
        }
        console.log("constructor")
    }
  render() {
    console.log("render")
    return (
      <div></div>
    )
  }
}
export default Test