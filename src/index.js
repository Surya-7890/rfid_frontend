import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StaffRegister from './staffRegister';
import StudentRegister from './studentRegister';
import Admin from './admin/admin';
import ViewStudentAttendance from './admin/ViewStudentsAttendance';
import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
     <Routes>
       <Route path="/staffregister" element={<StaffRegister />} />
       <Route path="/studentregister" element={<StudentRegister />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/admin/getstudentsattendance" element={<ViewStudentAttendance />} />
     </Routes>
  </BrowserRouter>
);