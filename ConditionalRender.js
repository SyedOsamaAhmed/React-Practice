import {useState} from 'react'

function ConditionalRender() {
    const [logedin,setLogedin]=useState(3);
    return (
        <div>
        {
              logedin===1?  <h1>Welcome User1</h1>
                    : logedin === 2 ? <h1>Welcome User2</h1>
                        : <h1>Welcome User3</h1>
        } 
               
        </div>
    )
}

export default ConditionalRender
