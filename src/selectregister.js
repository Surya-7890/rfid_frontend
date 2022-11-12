import React from "react";
import { Link } from "react-router-dom";

export default function SelectRegister(){
    return(
        <div className='flex h-screen justify-center items-center space-x-16'>
            <div>
                <img src="./user-graduate-solid.svg" className='m-2 h-24' />
                <Link to="/studentregister"><div className='h-16 shadow-xl hover:bg-green-400 hover:-translate-y-1 cursor-pointer w-24 bg-green-500 flex justify-center items-center text-white rounded-xl'>Student</div></Link>
            </div>
            <div>
                <img src="./user-tie-solid.svg" className='m-2 h-24' />
                <Link to="/staffregister"><div className='h-16 shadow-xl hover:bg-green-400 hover:-translate-y-1 cursor-pointer w-24 bg-green-500 flex justify-center items-center text-white rounded-xl'>Staff</div></Link>
            </div>
            <div>
                <img src="./user-gear-solid.svg" className='h-24 m-2' />
                <Link to="/admin"><div className='h-16 shadow-xl hover:bg-green-400 hover:-translate-y-1 cursor-pointer w-24 bg-green-500 flex justify-center items-center text-white rounded-xl'>Admin</div></Link>
            </div>
        </div>
    )
}