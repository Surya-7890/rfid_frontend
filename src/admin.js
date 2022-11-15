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
          <div className='flex w-screen overflow-hidden'>
          <img src="/iot.jpg" className='bg-center bg-cover bg-no-repeat w-full absolute -top-0 h-screen' />
        </div>
        </div>
        <div className='absolute w-screen top-0'>
        <div className='flex relative h-24 bg-yellow-bg'>
          <img src="./logo.png" className='ml-16' /> 
          <div className='bg-blue-bg text-white absolute right-0 md:right-28 flex h-full'>
            <Link to="/studentregister" className='flex justify-center items-center bg-blue-bg hover:bg-blue-800 hover:rounded-md font-semibold hover:shadow-xl'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center m-0'>Student Login</div></Link>
            <Link to="/staffregister" className='flex justify-center items-center bg-blue text-white-500 hover:bg-blue-800 hover:shadow-xl'><div className='flex align-middle text-xl font-semibold px-5 cursor-pointer flex-col justify-center m-0'>Staff Login</div></Link>
            <Link to="/admin" className='flex justify-center items-center shadow-black shadow-md rounded-md shadow-blue bg-white text-blue-bg font-semibold'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center m-0 font-sembold'>Admin Login</div></Link>
          </div>
        </div>
        <div className='flex justify-center mt-52'>
        <div className='w-72 h-64 flex justify-center text-xl rounded-lg border-solid border-1 border-black items-center p-4 bg-gray-500 bg-opacity-50 shadow-lg shadow-black'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center w-fit'>
                <input id="name" className='px-5 py-3 rounded-lg focus:outline-0 focus:border-b-2' type="text" placeholder="UserName" name="name" autoComplete="off" />
                <input id="password" className='px-5 py-3 rounded-lg focus:outline-0 focus:border-b-2 mt-2' type="text" placeholder="Password" name="password" autoComplete="off" />
                <div className='flex justify-center text-white'><button type="submit" className='bg-blue-bg w-fit px-5 py-2 mt-2 rounded-full hover:bg-blue-800'>Submit</button></div>
            </form>
        </div>
       </div>
      </div>
        </>
    )
}