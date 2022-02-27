import React from 'react'

function PropsChildren(props) {
    return (
        <div>
            <h1>Children Component</h1>
            <button onClick={props.data}>Show props</button>
        </div>
    )
}

export default PropsChildren
