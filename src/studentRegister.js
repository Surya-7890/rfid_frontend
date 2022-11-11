import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function StudentRegister(){

    async function handleSubmit(e){
        e.preventDefault()
        const name = document.getElementById('name').value;
        const dept = document.getElementById('dept').value;
        const roll = document.getElementById('roll').value;
        const year = document.getElementById('year').value;
        const res = await axios.post('https://rfidbackendsece.herokuapp.com/students',{ name, dept, roll, year });
        console.log(res);
        setTimeout(()=>{
            window.location.reload();
        });
    }

    return(
        <div className='flex justify-center mt-10'>
         <div className='w-80 h-80 flex justify-center text-xl rounded-lg bg-slate-400 items-center p-4'>
             <form onSubmit={handleSubmit} className='flex flex-col justify-center w-fit'>
                 <input id="name" className='px-5 py-3 rounded-t-lg' type="text" placeholder="Name" name="name" />
                 <input id="dept" className='px-5 py-3' type="text" placeholder="Department" name="dept" />
                 <input id="roll" className='px-5 py-3' type="text" placeholder="Roll Number" name="roll" />
                 <input id="year" className='px-5 py-3 rounded-b-lg' type="text" placeholder="Year Of Study" name="year" />
                 <div className='flex justify-center text-white'><button type="submit" className='bg-green-500 w-fit px-5 py-2 mt-2 rounded-full hover:bg-white hover:text-green-500'>Submit</button></div>
             </form>
         </div>
        </div>
    )
}