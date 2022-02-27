import {useRef} from 'react'
import RefChild from './RefChild'

function RefParent() {
    let inputRef=useRef(null);

    function handleInput(){
        inputRef.current.value="100";
        inputRef.current.style.color="red";
        inputRef.current.focus();
    }
    return (
        <div>
       
        <RefChild ref={inputRef}/>
            <button onClick={handleInput}>Update Input</button>
        </div>
    )
}

export default RefParent
