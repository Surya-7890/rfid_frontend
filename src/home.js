import axios from "axios";
import React from "react";

export default function Home(){

    const [state, setState] = React.useState([]);

    React.useEffect(()=>{
        async function getData(){
            const res = await axios.get('https://rfidbackendsece.herokuapp.com/getintermediates');
            const data = await res.data;
            setState(data);
            if(data.length === 1){
                window.location.pathname = "/selectregister"
            }
        }
        getData();
        setInterval(()=>{
            getData();
        },1500);
    },[]);


    return(
        <>
        <div>
            <img src="./background-home-desktop.jpg" className='bg-cover bg-center bg-no-repeat w-screen h-screen overflow-hidden' />
            <div className='bg-slate-200 bg-opacity-30 absolute top-0 flex w-screen justify-center h-10 items-center text-white text-xl'>MAKERSPACE</div>
            <div className='absolute top-72 left-32 text-white text-2xl'>Place Your Id card</div>
            <img src="./id-card.png" className='absolute left-20 top-80 h-64' />
        </div>
        </>
    )
}