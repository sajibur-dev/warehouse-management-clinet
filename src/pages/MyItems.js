import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import Items from "../components/Items";
import auth from "../firebase";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate =  useNavigate()
  useEffect(() => {
      axiosPrivate.get(`https://dry-mountain-82571.herokuapp.com/myitems?email=${user?.email}`)
      .then((res) => setMyItems(res.data))
      .then((err) => {
          if(err.response.status === 401 || err.response.status === 403){
              signOut(auth);
              navigate('/signin')
          }
      })
  }, [navigate,user?.email]);
  return (
    <div>
      <h3> My Items  </h3>
      <div className="grid grid-cols-2 gap-5">
        {myItems.map((product) => (
          <Items product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyItems;
