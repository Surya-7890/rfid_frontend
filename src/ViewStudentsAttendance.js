import React from "react";
import Table from "./Table";
import axios from "axios";
import { Link } from "react-router-dom"

export default function ViewStudentAttendance(){

    const [data, setData] = React.useState([]);
    const [student_entry, setStudentEntry] = React.useState(0);
    const [student_exit, setStudentExit] = React.useState(0);
    const [staff_entry, setStaffEntry] = React.useState(0);
    const [staff_exit, setStaffExit] = React.useState(0);
    let [endpoint, setEndpoint] = React.useState("/students/getattendance");

    React.useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://rfidbackendsece.herokuapp.com${endpoint}`);
            const data = await res.data;
            let target;
            (endpoint === "/staffs/getattendance")? target = "staffs" : target = "students";
            const student1 = await axios.get(`https://rfidbackendsece.herokuapp.com/students/entry`);
            const student_entry = await student1.data.length;
            const student2 = await axios.get(`https://rfidbackendsece.herokuapp.com/students/exit`);
            const student_exit = await student2.data.length;
            const staff1 = await axios.get(`https://rfidbackendsece.herokuapp.com/staffs/entry`);
            const staff_entry = await staff1.data.length;
            const staff2 = await axios.get(`https://rfidbackendsece.herokuapp.com/staffs/exit`);
            const staff_exit = await staff2.data.length;
            setData(data);
            setStudentEntry(student_entry);
            setStudentExit(student_exit);
            setStaffEntry(staff_entry);
            setStaffExit(staff_exit);
        }
        getData();
        const interval = setInterval(()=>{
            getData();
        },1500)

        return () =>{
            clearInterval(interval);
        }
    },[endpoint]);

    function getDetails(e){
        const point = e.target.innerHTML;
        (point === "Student Status")? setEndpoint("/students/getattendance"): setEndpoint("/staffs/getattendance");
    }

    return(
        <>
        <div>
        <div className='flex relative h-24 bg-yellow-bg'>
          <div className='bg-blue-bg text-white absolute right-0 md:right-28 flex h-full'></div>
        </div>
      </div>
        <div className='h-screen overflow-hidden'>
            <div className='grid grid-cols-12 h-full'>
                <div className='col-span-2 h-full border-gray-400 bg-slate-200 mt-2'>
                    <div onClick={getDetails} >
                        <div className='flex mx-2 justify-around ease-in-out'>
                            <div className='text-xl show-up'>{student_entry - student_exit}</div>
                        </div>
                    </div>
                    <div onClick={getDetails}>
                        <div className=''><div></div></div>
                        <div className='flex mx-2 justify-around ease-in-out'>
                        <div className='text-xl show-down'>{staff_entry - staff_exit}</div>
                        </div>    
                    </div> 
                    
                </div>
            <div className='col-span-10 h-screen mt-2 overflow-scroll'>
                <div className='flex justify-around space-x-3 text-black'>
                    <div className='bg-slate-300 w-full h-fit flex justify-center font-semibold text-xl'>Name</div>
                    <div className='bg-slate-300 w-full h-fit flex justify-center font-semibold text-xl'>Status</div>
                    <div className='bg-slate-300 w-full h-fit flex justify-center font-semibold text-xl'>Time</div>
                    {endpoint === "/students/getattendance" && <div className='bg-slate-300 w-full h-fit flex justify-center'>Roll no.</div>}
                </div>
                <div className='h-fit flex flex-col justify-start'>{data.map(element => {
                    return <Table props={element} key={element._id} person={endpoint} />
                })}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}