import { Component } from "react"


class Form extends Component{
constructor(){
    super()
    this.state={
        name:'jhon'
    }
}



    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <h1>hello im a class component 1st life cycle method</h1>
            </>
        )
    }
}

export default Form