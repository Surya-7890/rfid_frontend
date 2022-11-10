import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className='flex relative bg-slate-400 h-20'>
        <div className='bg-green-500 text-white absolute right-20 flex h-full'>
          <div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center hover:bg-white hover:text-green-500 m-0'><Link to="/studentregister" >Student Login</Link></div>
          <div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center hover:bg-white hover:text-green-500 m-0'><Link to="/staffregister" >Staff Login</Link></div>
          <div className='flex align-middle text-xl px-5 cursor-pointer flex-col justify-center hover:bg-white hover:text-green-500 m-0'><Link to="/admin" >Admin Login</Link></div>
        </div>
      </div>
    </div>
  );
}
