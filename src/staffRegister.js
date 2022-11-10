import React from "react";
import axios from "axios";
import { Navigate,useNavigate } from "react-router-dom";

export default function StaffRegister(){

    async function handleSubmit(e){
        // e.preventDefault()
        const name = document.getElementById('name').value;
        const dept = document.getElementById('dept').value;
        const res = await axios.post('https://rfidbackendsece.herokuapp.com/staffs',{ name, dept });
        console.log(res);
        if(res.data.message === "Success"){
            return <Navigate to="/" />
        }   
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id="name" type="text" placeholder="Name" name="name" />
                <input id="dept" type="text" placeholder="Department" name="dept" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}