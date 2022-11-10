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
        console.log(e);
        setTimeout(()=>{
            window.location.reload();
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id="name" type="text" placeholder="Name" name="name" />
                <input id="dept" type="text" placeholder="Department" name="dept" />
                <input id="roll" type="text" placeholder="Roll Number" name="roll" />
                <input id="year" type="text" placeholder="Year Of Study" name="year" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}