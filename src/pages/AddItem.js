import React, { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase';

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplier, setSupplier] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  
  const [user, loading, error] =   useAuthState(auth)

  console.log(user);
  const addNewItems = (e) => {
    e.preventDefault();
    const product = {
        name,
        image,
        description,
        price,
        quantity,
        supplier,
        email:user.email,
        category
    };
    fetch('http://localhost:5000/products',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(product)
    }).then((res) => res.json())
    .then((data) => {
      if(data.acknowledged){
        toast('product added succesfully')
      }
    })
    
}
  return (
    <div className="flex justify-center items-center p-5 mt-6">
    <div>
      <h3 className="text-slate-700 text-2xl text-center my-5">Add new Item ... </h3>
      <form onSubmit={addNewItems}>
        <input
          className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="product name"
        />
        <input
          className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          placeholder="price"
        />
        <input
          className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          placeholder="quantity"
        />

        <br />

        <input
          className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
          type="text"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          required
          placeholder="supplier"
        />
        <input
          className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          placeholder="category"
        />
        <input
          className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          placeholder="image url"
        />
        <br />
        <input className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3" type="text"  value={user.email} readOnly />
        <br />
        <textarea
          className="border-2 border-slate-800 p-2 rounded-lg mr-3 mt-3 "
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="descritpion"
          value={description}
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <input
          type="submit"
          value="submit"
          className="py-2 px-5 text-white uppercase rounded-lg bg-blue-700 cursor-pointer"
        />
      </form>
    </div>
  </div>
  );
};

export default AddItem;
