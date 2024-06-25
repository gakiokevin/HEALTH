import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const DoctorHomePage = () => {
  return (
    <div className="flex   min-h-full bg-[#0f0f3e] w-full">
     
      <Sidebar />
      <div className="flex-grow p-6 ">
        <Outlet />
    
      </div>
    </div>
  );
};

export default DoctorHomePage;
