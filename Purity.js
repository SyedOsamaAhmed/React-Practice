import React, { PureComponent } from 'react'
import UserProps from './UserProps';

export class Purity extends PureComponent {

    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render() {
        console.warn("Check rerender")
        return (
            <div>
            <h1>Hello {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count})}>Update</button>
            </div>
        )
    }
}

export default Purity
