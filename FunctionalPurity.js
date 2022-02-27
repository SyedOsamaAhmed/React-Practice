import { useState,useMemo } from 'react'

function FunctionalPurity() {
    const [count,setCount]=useState(0);
    const [item, setItem] = useState(10);
    const multiCountMemo = useMemo(function multiCount() {

        console.warn("multicount called!")
        return count * 5;
    },[count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Item: {item}</h1>
            <h2>Multi count: {multiCountMemo}</h2>

            <button onClick={()=>setCount(count+1)}>Update count</button>
            <button onClick={() => setItem(item+10)}>Update Item</button>
        </div>
    )
}

export default FunctionalPurity
