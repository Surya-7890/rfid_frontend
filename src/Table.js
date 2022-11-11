export default function Table({ props }){
    return(
        <div className='flex justify-around h-fit space-x-3'>
            <div className='flex justify-center text-white w-full bg-green-500 mt-1'>{props.name}</div>
            <div className='flex justify-center text-white w-full bg-green-500 mt-1'>{props.dept}</div>
            {props.status === "IN" ? <div className='flex justify-center text-white w-full bg-green-500 mt-1'>{props.status}</div>: <div className='flex justify-center text-white w-full bg-red-500 mt-1'>{props.status}</div>}
            <div className='flex justify-center text-white w-full bg-green-500 mt-1'>{props.user_id}</div>
            {props.year && <div className='flex justify-center text-white w-full bg-green-500 mt-1'>{props.year}</div>}
            {props.roll && <div className='flex justify-center text-white w-full bg-green-500 mt-1'>{props.roll}</div>}
        </div>
    )
}