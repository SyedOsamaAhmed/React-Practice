import React from 'react'

function LiftStateUp(props) {
    let data={name:"Osama",email:"osama123@gmail.com"}
    return (
        <React.Fragment>
            <h2>User: </h2>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </React.Fragment>
    )
}

export default LiftStateUp
