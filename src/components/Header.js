import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo/company-logo.png";

const Header = () => {
  return (
      <nav className="flex justify-between items-center">
          
        <div className="w-32">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div>
        <ToastContainer/>
          <NavLink className="mr-5 uppercase" to="/">Home</NavLink>
          <NavLink className="mr-5 uppercase" to="/manageinventory">Manage Inventory</NavLink>
          <NavLink className="mr-5 uppercase" to="/myitems">My Items</NavLink>
          <NavLink className="mr-5 uppercase" to="/blogs">Blogs</NavLink>
          <NavLink className="mr-5 uppercase" to="/regester">Regester</NavLink>
          <NavLink className="mr-5 uppercase" to="/signin">Sign In</NavLink>
          <NavLink className="mr-5 uppercase" to="/signout">sign out</NavLink>
        </div>
      </nav>
  );
};

export default Header;
