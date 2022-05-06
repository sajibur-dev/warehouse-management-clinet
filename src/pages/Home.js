import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/Banner";
import Inventories from "../components/Inventories";
import Services from "../components/Services";
import auth from "../firebase";
import SignIn from "./SignIn";

const Home = () => {
  const navigate = useNavigate();
const [user] = useAuthState(auth)
  return (
    <div>
      { user ? <> <Banner />
      <Inventories />
      <Services />
      </> : <SignIn/>
      }
    </div>
  );
};

export default Home;
