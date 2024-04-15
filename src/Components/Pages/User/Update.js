import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {register,handleSubmit, setValue} = useForm();

    const {userId} = useParams();

    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('pid', result.data.pid);
        setValue('pname', result.data.pname);
        setValue('price', result.data.price);

    }
     function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        navi('/show');
     }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
        <div className='container w-50'>
            <center><h2><u>PRODUCT UPDATE INFORMATION</u></h2></center>
            <form onSubmit={handleSubmit(saveData)} className='mt-5'>

                <label htmlFor='i'><b>ENTER PRODUCT ID:</b></label>
                <input type='number' id='i' className='form-control' {...register('pid')}/>
                <br /> <br />

                <label htmlFor='n'><b>ENTER PRODUCT NAME:</b></label>
                <input type='text' id='n' className='form-control' {...register('pname')}/>
                <br /> <br />

                <label htmlFor='p'><b>ENTER PRODUCT PRICE:</b></label>
                <input type='number' id='p' className='form-control' {...register('price')}/>
                <br /> <br />

                <input type='submit' value="UPDATE PRODUCT" className='btn btn-outline-primary col-6'/>
                <input type='reset' value="RESET PRODUCT"  className='btn btn-outline-warning col-6'/>
                
            </form>
        </div>
    </>
  )
}

export default Update