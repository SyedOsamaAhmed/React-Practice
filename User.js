import React from 'react'
import ReusableComponeent from './ReusableComponeent'
import './App.css'

function User() {
    const user = [
        { name: "Basit", email: 'basit@test.com', contact:7234},
        { name: "Zain", email: 'zain123@test.com', contact:5873},
        { name: "Kiran", email: 'kiran@test.com', contact:4843},
    ]
    return (
        <div>
        {

            user.map((item,ind)=>
            <ReusableComponeent data={item} key={ind}/>
            )
        }

        </div>
    )
}

export default User
