import React, { Component } from 'react'

export class UserProps extends Component {

    render() {
        console.warn("User Rendering")
        return (
            <React.Fragment>
                <h1>User {this.props.count}</h1>
            </React.Fragment>
        )
    }
}

export default UserProps
