import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo/company-logo.png";
import auth from "../firebase";
import Button from "./Button";
import LinkButton from "./LinkButton";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <nav className="flex justify-between items-center">
      {
        user && <NavLink to="/">
        <div className="w-32">
          <img className="w-full" src={logo} alt="" />
        </div>
        </NavLink>
      }
      

      <div>
        <ToastContainer />

        {user && (
          <>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"goldenrod"} : undefined
            }  
            className={`mr-5 uppercase ${({isActive}) => isActive ? "text-red-800" : ""}`} to="/">
              Home
            </NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"goldenrod"} : undefined
            } className="mr-5 uppercase" to="/manageinventory">
              Manage Inventory
            </NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"goldenrod"} : undefined
            } className="mr-5 uppercase" to="/myitems">
              My Items
            </NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? {color:"goldenrod"} : undefined
            } className="mr-5 uppercase" to="/blogs">
              Blogs
            </NavLink>

            <LinkButton
              
              to="/regester"
            >
              Regester
            </LinkButton>
            <Button
              onClick={handleSignout}
              
            >
              sign out
            </Button>{" "}
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
