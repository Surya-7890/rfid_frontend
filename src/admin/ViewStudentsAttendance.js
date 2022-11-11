import React from "react";
import Table from "../Table";
import axios from "axios"

export default function ViewStudentAttendance(){

    const [data, setData] = React.useState([]);
    const [entry, setEntry] = React.useState(0);
    const [exit, setExit] = React.useState(0);
    let [endpoint, setEndpoint] = React.useState("/staffs/getattendance");

    React.useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://rfidbackendsece.herokuapp.com${endpoint}`);
            const data = await res.data;
            let target;
            (endpoint === "/staffs/getattendance")? target = "staffs" : target = "students";
            const res1 = await axios.get(`https://rfidbackendsece.herokuapp.com/${target}/entry`);
            const entry = await res1.data;
            const res2 = await axios.get(`https://rfidbackendsece.herokuapp.com/${target}/exit`);
            const exit = await res2.data;
            setEntry(entry);
            setExit(exit);
            setData(data);
        }
        getData();
        const interval = setInterval(()=>{
            getData();
        },1500)

        return () =>{
            clearInterval(interval);
        }
    },[endpoint]);

    function show(target){
        if(target === "students"){
            const show = document.querySelectorAll('.show-up');
            const hide = document.querySelectorAll('.show-down');
            hide.forEach(element =>{
                element.classList.add('hidden');
            })
            show.forEach(element =>{
                element.classList.toggle('hidden')
            });
        } else {
            const show = document.querySelectorAll('.show-up');
            const hide = document.querySelectorAll('.show-down');
            show.forEach(element =>{
                element.classList.add('hidden');
            })
            hide.forEach(element =>{
                element.classList.toggle('hidden')
            })
        }
    }

    function getDetails(e){
        const point = e.target.innerHTML;
        (point === "Student Status")? setEndpoint("/students/getattendance"): setEndpoint("/staffs/getattendance");
        (point === "Student Status")? show('students'): show('staffs');
    }

    return(
        <div className='h-screen'>
            <div className='grid grid-cols-6 h-full'>
                <div className='grid-col-1 h-full border-gray-400 bg-slate-200 mt-2'>
                    <div onClick={getDetails} >
                        <div className="cursor-pointer bg-green-500 text-white py-1 hover:bg-green-400 text-xl mb-2 mx-2 flex justify-center">
                            Student Status
                        </div>
                        <div className='flex mx-2 justify-around my-3'>
                            <div className='text-xl hidden show-up'>{entry.length}</div>
                            <div className='text-xl hidden show-up'>{exit.length}</div>
                        </div>
                    </div>
                    <div onClick={getDetails}>
                        <div className="cursor-pointer bg-green-500 text-white py-1 hover:bg-green-400 text-xl mb-2 mx-2 flex justify-center">
                            Staff Status
                        </div>
                        <div className='flex mx-2 justify-around my-3'>
                        <div className='text-xl hidden show-down'>{entry.length}</div>
                        <div className='text-xl hidden show-down'>{exit.length}</div>
                        </div>
                            
                    </div> 
                    
                </div>
            <div className='col-span-5 h-screen mt-2'>
                <div className='flex justify-around space-x-3 text-black'>
                    <div className='bg-slate-300 w-full h-fit flex justify-center'>Name</div>
                    <div className='bg-slate-300 w-full h-fit flex justify-center'>Department</div>
                    <div className='bg-slate-300 w-full h-fit flex justify-center'>Status</div>
                    <div className='bg-slate-300 w-full h-fit flex justify-center'>User Id</div>
                    {endpoint === "/students/getattendance" && <div className='bg-slate-300 w-full h-fit flex justify-center'>Year</div>}
                    {endpoint === "/students/getattendance" && <div className='bg-slate-300 w-full h-fit flex justify-center'>Roll no.</div>}
                </div>
                <div className='h-fit flex flex-col justify-start'>{data.map(element => {
                    return <Table props={element} key={element._id} />
                })}
                </div>
            </div>
        </div>
        </div>
    )
}