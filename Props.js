import React from 'react'
import PropsChildren from './PropsChildren';

function Props() {
    function getData(){
        alert("passed from parent props");
    }
    return (
        <div>
       
        <PropsChildren data={getData}/>
        </div>
    )
}

export default Props
