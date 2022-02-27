import React, { Component, createRef} from 'react'

export class Ref extends Component {
    constructor(){
        super();
        this.inputRef=createRef();
    }

    componentDidMount(){
        // console.warn(this.inputRef.current.value)
    }


    getVal(){

        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color="white"
        this.inputRef.current.style.backgroundColor = "black"
    }
    render() {
        return (
            <div>
              <input type="text" ref={this.inputRef} /> 
              <button onClick={()=>this.getVal()}>Update ref</button>
            </div>
        )
    }
}

export default Ref
