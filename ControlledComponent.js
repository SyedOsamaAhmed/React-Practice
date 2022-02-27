import {useState} from 'react'

function ControlledComponent() {

    let [val,setVal]=useState("");
    return (
        <div>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        </div>
    )
}

export default ControlledComponent
