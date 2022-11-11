import React from "react";
import axios from "axios";

export default function StaffRegister(){

    async function handleSubmit(e){
        e.preventDefault()
        const name = document.getElementById('name').value;
        const dept = document.getElementById('dept').value;
        const res = await axios.post('https://rfidbackendsece.herokuapp.com/staffs',{ name, dept });
        setTimeout(()=>{
            window.location.reload();
        });
    }

    return(
        <div className='flex justify-center mt-10'>
        <div className='w-72 h-64 flex justify-center text-xl rounded-lg bg-slate-400 items-center p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center w-fit'>
                <input id="name" className='px-5 py-3 rounded-t-lg' type="text" placeholder="Name" name="name" />
                <input id="dept" className='px-5 py-3 rounded-b-lg' type="text" placeholder="Department" name="dept" />
                <div className='flex justify-center text-white'><button type="submit" className='bg-green-500 w-fit px-5 py-2 mt-2 rounded-full hover:bg-white hover:text-green-500'>Submit</button></div>
            </form>
        </div>
       </div>

    )
}