import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className='flex relative bg-slate-400 h-20'>
        <div className='bg-green-500 text-white absolute right-20 flex h-full'>
          <Link to="/studentregister" className='flex justify-center items-center hover:bg-white hover:text-green-500'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center hover:bg-white hover:text-green-500 m-0'>Student Login</div></Link>
          <Link to="/staffregister" className='flex justify-center items-center hover:bg-white hover:text-green-500'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center hover:bg-white hover:text-green-500 m-0'>Staff Login</div></Link>
          <Link to="/admin" className='flex justify-center items-center hover:bg-white hover:text-green-500'><div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center hover:bg-white hover:text-green-500 m-0'>Admin Login</div></Link>
        </div>
      </div>
    </div>
  );
}
  