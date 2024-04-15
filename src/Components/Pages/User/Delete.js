import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const [user, setUser] = useState([]);

    const navi = useNavigate();

    const { userId } = useParams();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        navi('/show')
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
            <>
                <center>
                    <h1><u>DELETE CONFRIMATION</u></h1>
                    <div className='container mt-5'>
                        <h2>DO YOU REALLY WANTS TO DELETE {user.pid} {user.pname} {user.price} THIS RECORD...?</h2>
                        <br />
                        <button onClick={()=>deleteUser()} className='btn btn-outline-danger col-3'>YES</button>
                        <NavLink to='/show'><button className='btn btn-outline-warning col-3'>NO</button></NavLink>
                    </div>
                </center>
            </>
  )
}

export default Delete