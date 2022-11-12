export default function Table({ props }){
    return(
        <div className='flex justify-around h-fit border-b-2 text-xl bg-slate-400 hover:bg-slate-300'>
            <div className='flex justify-center text-white w-full h-20 items-center cursor-pointer border-r-2'>{props.name}</div>
            <div className='flex justify-center text-white w-full items-center cursor-pointer'>{props.status}</div>
            <div className='flex justify-center text-white w-full items-center cursor-pointer'>{props.createdAt}</div>
            {props.roll && <div className='flex justify-center text-white w-full items-center cursor-pointer'>{props.roll}</div>}
            
        </div>
    )
}