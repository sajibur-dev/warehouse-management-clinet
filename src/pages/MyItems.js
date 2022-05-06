import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import Inventory from "../components/Inventory";
import auth from "../firebase";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    axiosPrivate
      .get(
        `https://dry-mountain-82571.herokuapp.com/myitems?email=${user?.email}`
      )
      .then((res) => setMyItems(res.data))
      .then((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          navigate("/signin");
        }
      });
  }, [navigate, user?.email]);
  return (
    <div>
      <h3 className="text-3xl text-center text-slate-800 my-5"> My Items </h3>
      {myItems.length !== 0 ? (
        <div className="grid grid-cols-4 gap-5">
          {myItems.map((item) => (
            <Inventory key={item._id} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-red-600 text-5xl">loading...</p>
      )}
    </div>
  );
};

export default MyItems;
