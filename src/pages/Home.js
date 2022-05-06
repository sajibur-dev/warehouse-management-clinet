import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
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
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <Banner />
        <Inventories />
        <Services />
      </div>
    );
  } else {
    return <SignIn />;
  }
};

export default Home;
