import React from "react";
import axios from "axios";

export default function Admin(){

    async function handleSubmit(){
        const name = document.getElementById('name');
        const password = document.getElementById('name');
        const res = await axios.post('https:/localhost:7000/admin',{ name, password });
        console.log(res);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="user_name" placeholder="User Name" name="user_name" />
                <input type="password" id="password" placeholder="Password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}