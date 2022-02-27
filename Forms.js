import React,{useState} from 'react'

function Forms() {
    const [name,setName]=useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");


    function getData(e){
        e.preventDefault();
    }
 




    return (
        <div>
            <h1>Forms</h1>
            <form onSubmit={getData}>
                <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select</option>
                    <option>Movies</option>
                    <option>Tv series</option>
                    <option>Documentries</option>
                </select> <br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/> <span>Accept terms and Conditions</span><br /><br />
                <button type="submit">Submit</button>
                
            </form>

        </div>
    )
}

export default Forms
