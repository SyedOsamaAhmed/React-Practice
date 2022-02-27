import {forwardRef} from 'react'

function RefChild(props,customref) {


    
    return (
        <div>
            <input type="text" ref={customref}/>
        </div>
    )
}

export default forwardRef(RefChild)
