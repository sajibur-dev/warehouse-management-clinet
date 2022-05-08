import { signOut } from "firebase/auth";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
  const [isShowManubar, setIsShowManubar] = useState(false);

  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <NavLink to="/" className="w-32">
          <img className="w-full" src={logo} alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ToastContainer />
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "goldenrod" } : undefined
              }
              className="mr-5 uppercase"
              to="/"
            >
              Home
            </NavLink>
            {user && (
              <>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "goldenrod" } : undefined
                  }
                  className="mr-5 uppercase"
                  to="/manageinventory"
                >
                  Manage Inventory
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "goldenrod" } : undefined
                  }
                  className="mr-5 uppercase"
                  to="/myitems"
                >
                  My Items
                </NavLink>
              </>
            )}
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "goldenrod" } : undefined
              }
              className="mr-5 uppercase"
              to="/blog"
            >
              Blogs
            </NavLink>
            <LinkButton to="/regester">Regester</LinkButton>
            <Button onClick={handleSignout}>sign out</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="flex justify-between items-center">
    //   <div className="md:flex md:justify-between md:items-center">
    //     <NavLink to="/">
    //       <div className="w-32">
    //         <img className="w-full" src={logo} alt="" />
    //       </div>
    //     </NavLink>

    //     <div
    //       className={`md:block ${isShowManubar ? "block" : "hidden"}`}
    //     >
    //       <ToastContainer />
    //       <NavLink
    //         style={({ isActive }) =>
    //           isActive ? { color: "goldenrod" } : undefined
    //         }
    //         className="mr-5 uppercase"
    //         to="/"
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         style={({ isActive }) =>
    //           isActive ? { color: "goldenrod" } : undefined
    //         }
    //         className="mr-5 uppercase"
    //         to="/manageinventory"
    //       >
    //         Manage Inventory
    //       </NavLink>

    //       <NavLink
    //         style={({ isActive }) =>
    //           isActive ? { color: "goldenrod" } : undefined
    //         }
    //         className="mr-5 uppercase"
    //         to="/myitems"
    //       >
    //         My Items
    //       </NavLink>
    //       <NavLink
    //         style={({ isActive }) =>
    //           isActive ? { color: "goldenrod" } : undefined
    //         }
    //         className="mr-5 uppercase"
    //         to="/blog"
    //       >
    //         Blogs
    //       </NavLink>
    //       <LinkButton to="/regester">Regester</LinkButton>
    //       <Button onClick={handleSignout}>sign out</Button>{" "}
    //     </div>
    //   </div>

    //   <button
    //     onClick={() => setIsShowManubar(!isShowManubar)}
    //     className="md:hidden mr-5 text-2xl"
    //   >
    //     <FontAwesomeIcon icon={faAlignJustify} />
    //   </button>
    // </nav>
  );
};

export default Header;
