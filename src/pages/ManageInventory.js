import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const [pageCount,setPageCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(0);
  const [size,setSize] = useState(10);
  const url = `https://dry-mountain-82571.herokuapp.com/products?page=${currentPage}&&size=${size}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, [url]);

  useEffect(() => {
    fetch('https://dry-mountain-82571.herokuapp.com/productCount')
    .then((res) => res.json())
    .then((data) =>{
      const count = data.count;
      const pages = Math.ceil(count / 10);
      setPageCount(pages);
    })
  },[])

  const deleteProduct = (id) => {
    const proccesed = window.confirm("Are you sure you want to delete?");
    if (proccesed) {
      fetch(`https://dry-mountain-82571.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            const remaining = products.filter((product) => product._id !== id);
            console.log(remaining);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Manage Your Inventories : </h1>

      <table className="border-2 border-slate-500 p-5 w-1/2 m-auto">
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
        </thead>
        <tbody className= "h-screen">
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border-2 border-slate-700 py-2 px-5">
                <img src={product.image} className="w-10" alt="" />
              </td>
              <td className="border-2 border-slate-700 py-2 px-5">{product.name}</td>
              <td className="border-2 border-slate-700 py-2 px-5">{product.category}</td>
              <td className="border-2 border-slate-700 py-2 px-5">
                <button className="py-2 px-3 rounded-lg hover:bg-gray-200 hover:text-white duration-300 " onClick={() => deleteProduct(product._id)}>
                  <FontAwesomeIcon icon={faTrashCan}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-5">
        {
          [...Array(pageCount).keys()].map((number) => <button className={`border-2 py-2 px-3 border-slate-800 mr-3 ${currentPage === number ? 'bg-slate-800 text-white' : ''}`} onClick={() => setCurrentPage(number)}>{number + 1}</button>)
        }
      </div>
      <div className="flex justify-end items-center mt-3">
        <Link to="/additem"
         className="py-2 px-5 bg-slate-800 rounded-lg text-white" >add items ++</Link>
      </div>
    </div>
  );
};

export default ManageInventory;
