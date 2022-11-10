import React from "react";
import axios from "axios";

export default function StaffRegister(){

    async function handleSubmit(e){
        e.preventDefault()
        const name = document.getElementById('name').value;
        const dept = document.getElementById('dept').value;
        const res = await axios.post('https://rfidbackendsece.herokuapp.com/staffs',{ name, dept });
        console.log(res);
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