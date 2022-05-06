import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = ({ product }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;
  const navigate = useNavigate();
  return (
    <div className="md:w-full rounded-lg shadow-lg text-slate-800">
      <img className="w-full h-60" src={image} alt="product" />
      <div className="p-3 space-y-5 mt-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl text-slate-800">{name}</h3>
          <p className="text-xl text-green-700">{price} tk</p>
        </div>
        <h3>{description}</h3>
        <div className="flex justify-between items-center">
          <h3>
            quantity : <span className="text-red-500">{quantity}</span>{" "}
          </h3>
          <p className="text-blue-500">{supplier}</p>
        </div>
        
        <button
          onClick={() => navigate(`inventory/${_id}`)}
          className="py-2 px-9 bg-blue-700 rounded-lg text-white relative bottom-1 uppercase"
        >
          update
        </button>
      </div>
    </div>
  );
};

export default Inventory;
