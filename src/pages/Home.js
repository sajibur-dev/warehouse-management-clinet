import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/Banner";
import Inventories from "../components/Inventories";
import Services from "../components/Services";
import Success from "../components/Success";
import auth from "../firebase";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <Inventories />
      <Services />
      <Success />
    </div>
  );
};

export default Home;
