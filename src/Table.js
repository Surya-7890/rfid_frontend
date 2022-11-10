export default function Table({ props }){
    return(
        <div className='flex justify-around'>
            <div>{props.name}</div>
            <div>{props.dept}</div>
            <div>{props.status}</div>
            <div>{props.year}</div>
            <div>{props.roll}</div>
        </div>
    )
}