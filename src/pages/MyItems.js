import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import Inventory from "../components/Inventory";
import Loading from "../components/Loading";
import auth from "../firebase";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(5);
  const url = `https://dry-mountain-82571.herokuapp.com/myitems?email=${user?.email}&&page=${currentPage}&&size=${size}`;
  useEffect(() => {
    axiosPrivate
      .get(url)
      .then((res) => setProducts(res.data))
      .then((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          Navigate("/signin");
        }
      });

    axiosPrivate
      .get(
        `https://dry-mountain-82571.herokuapp.com/myitems?email=${user?.email}`
      )
      .then((res) => {
        const count = res.data.length;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
      })
      .then((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          Navigate("/signin");
        }
      });
  }, [url, user?.email]);
  return (
    <div>
      <h3 className="text-3xl text-center text-slate-800 my-5"> My Items </h3>
      {products.length !== 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-1  gap-y-20">
          {products.map((item) => (
            <Inventory key={item._id} product={item} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
      <div className="flex justify-center items-center mt-5">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={`border-2 py-2 px-3 border-slate-800 mr-3 ${
              currentPage === number ? "bg-slate-800 text-white" : ""
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
