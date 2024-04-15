import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit} = useForm()

    const navi = useNavigate();

    function saveData(data) {
        axios.post('http://localhost:5000/users', data)
        // alert('Product Added')
        navi('/show');
        }

  return (
    <>
        <div className='container w-50'>
            <center><h2><u>PRODUCT INFORMATION</u></h2></center>
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

                <input type='submit' value="ADD PRODUCT" className='btn btn-outline-primary col-6'/>
                <input type='reset' value="RESET PRODUCT"  className='btn btn-outline-warning col-6'/>
                
            </form>
        </div>
    </>
  )
}

export default Add