import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import LinkButton from "../components/LinkButton";
import Loading from "../components/Loading";
import auth from "../firebase";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const url = `https://dry-mountain-82571.herokuapp.com/myitems?email=${user?.email}&&page=${currentPage}&&size=${size}`;
  useEffect(() => {
    axiosPrivate
      .get(url)
      .then((res) => setProducts(res.data))
      .then((err) => {
        if (err.respinse.status === 401 || err.response.status === 403) {
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
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      })
      .then((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          Navigate("/signin");
        }
      });
  }, [url, user?.email]);

  const deleteProduct = (id) => {
    const proccesed = window.confirm("Are you sure you want to delete?");
    if (proccesed) {
      fetch(`https://dry-mountain-82571.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="md:text-4xl text-xl text-center my-10">
        Manage Your Inventories :{" "}
      </h1>

      {products.length === 0 ? (
        <Loading />
      ) : (
        <table className="border-2 border-slate-500 p-5 h-96 md:w-1/2 w-full m-auto">
          <thead className="text-center">
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Action</th>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="border-2 border-slate-700 md:py-2  md:px-5 py-1 px-1  w-1/4">
                  <img src={product.image} className="md:w-10 w-2/3" alt="" />
                </td>
                <td className="border-2 border-slate-700 md:py-2 md:px-5 py-1 px-1 md:text-base text-sm">
                  {product.name}
                </td>
                <td className="border-2 border-slate-700 md:py-2 md:px-5 py-1 px-1 md:base text-sm">
                  {product.category}
                </td>
                <td className="border-2 border-slate-700 md:py-2 md:px-5 py-1 px-1">
                  <button
                    className="py-2 px-3 rounded-lg hover:bg-gray-200 hover:text-red-700 duration-300 "
                    onClick={() => deleteProduct(product._id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      <div className="flex justify-end items-center mt-3">
        <LinkButton
          to="/additem"
          className="py-2 px-5 bg-slate-800 rounded-lg text-white"
        >
          <FontAwesomeIcon icon={faPlus} />
        </LinkButton>
      </div>
    </div>
  );
};

export default ManageInventory;
