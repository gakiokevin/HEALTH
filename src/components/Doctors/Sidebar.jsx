import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import icons from "../../../utils/icons"; // Adjust the path as per your project structure

const Sidebar = () => {
  const location = useLocation();
  const slicedLocation = location.pathname.substring(1);
  useEffect(() => {
    
  }, [slicedLocation, location]);
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white flex flex-col">
      <nav className="flex-grow p-4">
        <ul>
          <li className="mb-4">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.user}</span>
              My Profile
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to=""
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${
                  isActive && slicedLocation === "doctor" ? "bg-[blue]" : ""
                }`
              }
            >
              <span className="mr-3">{icons.tasks}</span>
              Requests
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="scheduled-requests"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.calendarAlt}</span>
              Scheduled Requests
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="create-report"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.chart}</span>
              Create Report
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="basic-data"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.db}</span>
              Basic Data
            </NavLink>
          </li>
          <li>
            <NavLink
              to="query-data"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? "bg-[blue]" : ""}`
              }
            >
              <span className="mr-3">{icons.search}</span>
              Query Data
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
