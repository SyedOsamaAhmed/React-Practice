import React, { useState } from 'react'

function Inputbox() {
    const [data, setData] = useState(null);
    const [submit, setSubmit] = useState(false);
    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        setSubmit(false);
    }
    return (
        <div>
        {
            submit ? 
            <h1>{data}</h1>
            : null
        }
        <input type="text" onChange={getData} />
        <button onClick={() => setSubmit(true)}>Submit</button>
      

         


        </div>
    )
}

export default Inputbox
