import axios from "axios";
import React from "react";

export default function Home(){

    const [state, setState] = React.useState([])

    React.useEffect(()=>{
        async function getData(){
            const res = await axios.get('https://rfidbackendsece.herokuapp.com/getintermediates');
            const data = await res.data;
            console.log(data);
            setState(data);
            if(data.length === 1){
                window.location.pathname = "/selectregister"
            }
        }
        getData();
        setInterval(()=>{
            getData();
        },1500);
    },[])

    return(
        <div>{}</div>
    )
}