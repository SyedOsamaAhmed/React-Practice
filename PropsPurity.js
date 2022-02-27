import React, { PureComponent } from 'react'
import UserProps from './UserProps';

export class PropsPurity extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <div>
                <UserProps count={this.state.count}/>
                <button onClick={() => this.setState({ count: this.state.count})}>Update</button>
            </div>
        )
    }
}

export default PropsPurity
