import { Link } from "react-router-dom"
import { useState,useEffect} from "react";
import icons from "../../utils/icons.jsx";
import logo from "../images/helconlogo.png";
import doctor from "../images/doctor.jpg";
import {useLocation } from 'react-router-dom'
const Header = ({children})=>{
  const [isMenuVisible, setMenuStatus] = useState(false);
  const location = useLocation()

 useEffect(()=>{
console.log(location)
setMenuStatus(false)

 },[location])



   

  const toggleMenu = () => {
    setMenuStatus(!isMenuVisible);
  };

  

return(

   <>
  <div className=" w-full bg-primary flex justify-between px-3 items-center h-20  fixed top-0 left-0 z-50">
        <div className="h-full p-2 text-3xl">
          <img src={logo} alt="logo" className="h-full" />
        </div>

        <div className="flex justify-center">
          <ul
            className={` md:mr-8 text-white fixed top-0 left-0 h-screen bg-gray-800 z-50 ${
              isMenuVisible ? "w-64" : "w-0"
            } transition-width duration-300 ease-in-out overflow-hidden md:relative md:flex md:flex-row md:items-center md:justify-start md:pt-0 md:bg-transparent md:z-auto md:w-auto md:space-x-4 ${
              isMenuVisible ? "w-0" : "hidden"
            } md:transition-none`}
          >
           {children}
            {location.pathname !== '/' && (
              <div className="h-8 w-8 rounded-full bg-[grey] hidden md:block">
              <img
                src={doctor}
                alt="a doctor"
                className="max-w-full h-full w-full object-cover rounded-full"
              />
            </div>
            )}
          </ul>
          <div className="p-2 md:hidden" onClick={toggleMenu}>
            <p className="text-3xl text-white">{icons.menu}</p>
          </div>
        </div>
      </div>
   </>
)

}
export default Header