import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInventory = () => {
  const { id } = useParams();
  const url = `https://dry-mountain-82571.herokuapp.com/products/${id}`;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplier, setSupplier] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((product) => {
        setName(product?.name);
        setPrice(product?.price);
        setDescription(product?.description);
        setQuantity(product?.quantity);
        setSupplier(product?.supplier);
        setCategory(product?.category);
        setImage(product?.image);
      });
  }, [url]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      description,
      price,
      quantity,
      supplier,
      category,
    };
    console.log(product);

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("data updated successfully!! see home page");
        }
      });
  };
const updateQuantity = () => {
  if(quantity > 1){
    setQuantity((prevState) => prevState - 1)
  }
}
  return (
    <div className="flex justify-center items-center p-5 mt-6">
      <div>
        <h3 className="text-slate-700 text-2xl text-center my-5">Update Your Entry ... </h3>
        <form onSubmit={handleUpdateProduct}>
          <input
            className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <br />

          <input
            className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            required
          />
          <input
            className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <br />
          <textarea
            className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3 "
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            cols="30"
            rows="5"
            required
          ></textarea>
          <br />
          <input
            type="submit"
            value="submit"
            className="py-2 px-5 text-white uppercase rounded-lg bg-blue-700 cursor-pointer"
          />
          <button onClick={updateQuantity} className="py-2 px-3 rounded-lg bg-slate-700 text-white ml-3">delivered</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInventory;
