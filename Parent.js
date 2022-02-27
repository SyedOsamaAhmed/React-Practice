import React from 'react'
import LiftStateUp from './LiftStateUp'
function Parent() {
   function parentAlert(data){
       console.log(data)
       alert("Hello "+data.email )
   }
    return (
        <React.Fragment>
            <LiftStateUp alert={parentAlert} />
        </React.Fragment>
    )
}

export default Parent
