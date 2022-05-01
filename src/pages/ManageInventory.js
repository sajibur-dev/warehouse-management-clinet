import React, { useEffect, useState } from "react";

const ManageInventory = () => {
  const url = "http://localhost:5000/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  const deleteProduct = (id) => {
    const proccesed = window.confirm("Are you sure you want to delete?");
    if (proccesed) {
      fetch(`http://localhost:5000/products/${id}`, {
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
          <th>Name</th>
          <th>Category</th>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border-2 border-slate-700 py-2 px-5">{product.name}</td>
              <td className="border-2 border-slate-700 py-2 px-5">{product.category}</td>
              <td className="border-2 border-slate-700 py-2 px-5">
                <button onClick={() => deleteProduct(product._id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;
