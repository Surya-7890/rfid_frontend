import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function StaffRegister(){

    async function handleSubmit(e){
        e.preventDefault()
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const res = await axios.post('https://rfidbackendsece.herokuapp.com/admin',{ name, password });
        const data = await res.data;
        console.log(data);
        if(data.message === "Success"){
          window.location.reload();
          window.location.pathname = "/admin/getattendance";
        }
    }

    return(
        <>
        <div>
        <div className='flex relative bg-slate-400 h-24'>
          <div className='bg-green-500 text-white absolute right-28 flex h-full'>
            <Link to="/studentregister" className='flex justify-center items-center hover:bg-green-400'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center m-0'>Student Login</div></Link>
            <Link to="/staffregister" className='flex justify-center items-center hover:bg-green-400'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center m-0'>Staff Login</div></Link>
            <Link to="/admin" className='flex justify-center items-center bg-white text-green-500 '><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center m-0'>Admin Login</div></Link>
          </div>
        </div>
      </div>
        <div className='flex justify-center mt-32'>
        <div className='w-72 h-64 flex justify-center text-xl rounded-lg border-solid border-2 items-center p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center w-fit'>
                <input id="name" className='px-5 py-3 rounded-t-lg focus:outline-0 focus:border-b-2' type="text" placeholder="Name" name="name" autoComplete="off" />
                <input id="password" className='px-5 py-3 rounded-b-lg focus:outline-0 focus:border-b-2' type="text" placeholder="Department" name="password" autoComplete="off" />
                <div className='flex justify-center text-white'><button type="submit" className='bg-green-500 w-fit px-5 py-2 mt-2 rounded-full hover:text-green-400'>Submit</button></div>
            </form>
        </div>
       </div>
        </>
    )
}