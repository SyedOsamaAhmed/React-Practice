import React from 'react'
import {Table} from 'react-bootstrap'

function MapFunction() {

    const arr = [
        { name: "Ali", email: 'ali123@gmail.com', contact:5555 },
        { name: "Osama", email: 'Osama69@gmail.com', contact:1111 },
        { name: "Fiza", email: 'fizariaz87@gmail.com', contact:3333 },
        { name: "Aliza", email: 'aliza123@gmail.com', contact:4444 },
    ]
    return (
        <div>
            <Table border="1" striped >
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            </tr>
            </thead>
            
            <tbody>
                {
                    arr.map((items,index) => 

                        <tr key={index}>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.contact}</td>

                        </tr>
                    )
                }
                    </tbody>
            </Table>

        </div>
    )
}

export default MapFunction
