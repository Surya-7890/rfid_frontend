import React from "react";

export default function Table({ props, person }){
    let target; 
    (person === "/students/getattendance") ? target = "student" : target = "staff" ;
    console.log(target);

    function handleSubmit(e){
        window.location.pathname = `${target}/getinfo/${props.user_id}`
    }

    return(
        <div>
        {target === "student" &&
        <div className='grid grid-cols-4 h-fit border-b-2 text-xl bg-slate-400 hover:bg-slate-300' onClick={handleSubmit}>
            <div className='col-span-1 text-white flex justify-center h-20 items-center cursor-pointer border-r-2'>{props.name}</div>
            {props.status === "OUT" && <div className='col-span-1 text-white flex justify-center items-center cursor-pointer bg-red-400 border-r-2'>{props.status}</div>}
            {props.status === "IN" && <div className='col-span-1 text-white flex justify-center items-center cursor-pointer bg-green-400 border-r-2'>{props.status}</div>}
            <div className='col-span-1 text-white flex justify-center items-center cursor-pointer'>{props.time}</div>
            <div className='col-span-1 text-white flex justify-center items-center cursor-pointer'>{props.roll}</div>
        </div>
        }
        {target === "staff" &&
        <div className='grid grid-cols-3 h-fit border-b-2 text-xl bg-slate-400 hover:bg-slate-300' onClick={handleSubmit}>
            <div className='col-span-1 text-white flex justify-center h-20 items-center cursor-pointer border-r-2'>{props.name}</div>
            <div className='col-span-1 text-white flex justify-center items-center cursor-pointer'>{props.status}</div>
            <div className='col-span-1 text-white flex justify-center items-center cursor-pointer'>{props.time}</div>
        </div>
        }
        </div>
    )
}