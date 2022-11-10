import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StaffRegister from './staffRegister';
import StudentRegister from './studentRegister';
import Admin from './admin/admin';
import ViewStudentAttendance from './admin/ViewStudentsAttendance';
import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
     <Routes>
       <Route path="/staffregister" element={<StaffRegister />} />
       <Route path="/staffregister/home" element={<Home />} />
       <Route path="/studentregister" element={<StudentRegister />} />
       <Route path="/studentregister/home" element={<Home />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/admin/getattendance" element={<ViewStudentAttendance />} />
     </Routes>
  </BrowserRouter>
);