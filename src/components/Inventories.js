import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase";
import Inventory from "./Inventory";
import Loading from "./Loading";

const Inventories = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosPrivate
      .get(
        `https://dry-mountain-82571.herokuapp.com/myitems?email=${user?.email}`
      )
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          signOut(auth);
          navigate("/signin");
        } else {
          setProducts(res.data)
        }
      })
      .then((err) => {
        console.log(err);
      });
  }, [navigate, user?.email]);

  const showingProducts = products.slice(0, 6);

  return (
    <div className=" mt-5 space-y-3">
      <h1 className="text-3xl text-center">Inventories</h1>
      {showingProducts.length === 0 ? (
        <div className="absolute">
          <Loading />
        </div>
      ) : (
        <div className="p-3 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 gap-y-20">
          {showingProducts.map((product) => (
            <Inventory key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Inventories;
