import React from "react";
import Table from "../Table";

export default function ViewStudentAttendance(){

    const [data, setData] = React.useState([]);
    let [endpoint, setEndpoint] = React.useState("/staffs/getattendance");
    let length = data.length;


    React.useEffect(()=>{
        async function getData(){
           const res = await fetch(`http://localhost:7000${endpoint}`);
           const data =await res.json();
           setData(data);
           console.log(data.length);
           length = data.length;
        }
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
        <div>
            <div>
                <div className="admin_view_button cursor-pointer" onClick={getDetails}>Student Status</div>
                <div className="admin_view_button cursor-pointer" onClick={getDetails}>Staff Status</div>
                {/* {console.log(data)} */}
                <div>{data.map(element => {
                    return <Table props={element} key={element._id} />
                })}</div>
            </div>
            <div></div>
        </div>
    )
}