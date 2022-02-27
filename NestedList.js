import React from 'react'
import { Table } from 'react-bootstrap'
function NestedList() {
    const arr = [
        {
            name: "Ali", email: 'ali123@gmail.com', address: [
                { Hn: 124, street: "32", city: "Islamabad" },
                { Hn: 134, street: "32", city: "Golra" },
                { Hn: 165, street: "12", city: "Delhi" },
                { Hn: 186, street: "33", city: "Chenai" },
            ]
        },
        {
            name: "Osama", email: 'Osama69@gmail.com', address: [
                { Hn: 124, street: "323", city: "Islamabad" },
                { Hn: 136, street: "326", city: "Lahore" },
                { Hn: 158, street: "127", city: "Karachi" },
                { Hn: 178, street: "333", city: "Kashmir" },
            ]
        },
        {
            name: "Fiza", email: 'fizariaz87@gmail.com', address: [
                { Hn: 125, street: "312", city: "Islamabad" },
                { Hn: 133, street: "327", city: "Golra" },
                { Hn: 155, street: "120", city: "america" },
                { Hn: 183, street: "339", city: "Canada" },
            ]
        },

    ]
    return (
        <div>
            <Table variant="dark">
                <tbody>
                    <tr>
                        <td>S.n</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>

                    {
                        arr.map((item,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table>
                                        <tbody>

                                            <Table variant="dark">
                                                <tbody>
                                                    {

                                                        item.address.map((data) =>
                                                            <tr>
                                                                <td>{data.Hn}</td>
                                                                <td>{data.street}</td>
                                                                <td>{data.city}</td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </Table>

                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default NestedList
