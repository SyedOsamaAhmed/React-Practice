import { useRef } from 'react'

function RefFunctionalComponent() {
    let inputRef = useRef(null);
    function HandleInput() 
    {
        console.warn("function called")
        // inputRef.current.value=10;
        // inputRef.current.focus();
        // inputRef.current.style.color="red";
        inputRef.current.style.display = "none";
    }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={HandleInput}>Update Ref</button>
        </div>
    )
}

export default RefFunctionalComponent
