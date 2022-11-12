import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function StudentRegister(){

    async function handleSubmit(e){
        e.preventDefault()
        const name = document.getElementById('name').value;
        const dept = document.getElementById('dept').value;
        const roll = document.getElementById('roll').value;
        const year = document.getElementById('year').value;
        const res = await axios.post('https://rfidbackendsece.herokuapp.com/students',{ name, dept, roll, year });
        console.log(res);
        window.location.pathname = "/home"
    }

    return(
        <>
        <div>
        <div className='flex relative bg-slate-400 h-24'>
          <div className='bg-green-500 text-white absolute right-28 flex h-full'>
            <Link to="/studentregister" className='flex justify-center items-center text-green-500 bg-white'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center hover:bg-white hover:text-green-500 m-0'>Student Login</div></Link>
            <Link to="/staffregister" className='flex justify-center items-center hover:bg-green-400'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center m-0'>Staff Login</div></Link>
            <Link to="/admin" className='flex justify-center items-center hover:bg-green-400'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center m-0'>Admin Login</div></Link>
          </div>
        </div>
      </div>
        <div className='flex justify-center mt-32'>
         <div className='w-80 h-80 flex justify-center text-xl rounded-lg border-solid border-2 items-center p-4'>
             <form onSubmit={handleSubmit} className='flex flex-col justify-center w-fit'>
                 <input id="name" className='px-5 py-3 rounded-t-lg focus:outline-none focus:border-b-2' type="text" placeholder="Name" name="name" autoComplete="off" />
                 <input id="dept" className='px-5 py-3 focus:outline-none focus:border-b-2' type="text" placeholder="Department" name="dept" autoComplete="off" />
                 <input id="roll" className='px-5 py-3 focus:outline-none focus:border-b-2' type="text" placeholder="Roll Number" name="roll" autoComplete="off" />
                 <input id="year" className='px-5 py-3 rounded-b-lg focus:outline-none focus:border-b-2' type="text" placeholder="Year Of Study" name="year" autoComplete="off" />
                 <div className='flex justify-center text-white'><button type="submit" className='bg-green-500 w-fit px-5 py-2 mt-2 rounded-full hover:bg-green-400'>Submit</button></div>
             </form>
         </div>
        </div>
        </>
    )
}