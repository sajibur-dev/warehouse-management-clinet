import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Inventory = ({ product }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;
  const navigate = useNavigate();
  return (
    <div className="w-72 rounded-lg shadow-lg text-slate-800">
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
        
        <Button
          onClick={() => navigate(`/inventory/${_id}`)}
        >
          update
        </Button>
      </div>
    </div>
  );
};

export default Inventory;
