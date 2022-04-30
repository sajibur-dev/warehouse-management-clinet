import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo/company-logo.png";
import auth from "../firebase";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

   
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

          {!user ? <NavLink className="mr-5 uppercase rounded-lg bg-blue-600 py-3 px-8 text-white" to="/signin">Sign In</NavLink> : 

          <button onClick={() => signOut(auth)} className="mr-5 uppercase rounded-lg bg-blue-600 py-2 px-8 text-white" >sign out</button>}
        </div>
      </nav>
  );
};

export default Header;
