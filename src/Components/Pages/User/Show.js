import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Show() {

    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users');
        setUser(result.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <>
        <table className='table table-info table-scripted'>
            <thead>
                <tr>
                    <th>PRODUCT ID</th>
                    <th>PRODUCT NAME</th>
                    <th>PRODUCT PRICE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((obj)=> {
                    return(
                        <tr>
                            <td>{obj.pid}</td>
                            <td>{obj.pname}</td>
                            <td>{obj.price}</td>
                            <td>
                                <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                            </td>
                        </tr>
                    )
                })
               }
            </tbody>
        </table>
    </>
  )
}

export default Show