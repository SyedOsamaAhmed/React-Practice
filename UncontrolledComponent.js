import { useRef } from 'react'

function UncontrolledComponent() {


    let inputRef = useRef(null);
    let inputRef2 = useRef(null);

    function handleSubmit(e) {
        console.warn("input value 1:", inputRef.current.value)
        console.warn("input value 2:", inputRef2.current.value)
        let input3 = document.getElementById("input3").value
        console.warn("input value 3:", input3)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} /><br /><br /><br />
                <input type="text" ref={inputRef2} /><br /><br /><br />
                <input type="text" id="input3" /><br /><br /><br />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UncontrolledComponent
