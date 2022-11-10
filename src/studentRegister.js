import React from "react";
import axios from "axios";

export default function StudentRegister(){

    async function handleSubmit(e){
        
        const name = document.getElementById('name').value;
        const dept = document.getElementById('dept').value;
        const roll = document.getElementById('roll').value;
        const year = document.getElementById('year').value;
        const res = await axios.post('https://rfidbackendsece.herokuapp.com/students',{ name, dept, roll, year });
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