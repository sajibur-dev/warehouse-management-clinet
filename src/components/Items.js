import React from "react";

const Items = ({ product }) => {
  const { image, name, price, quantity, description, category, supplier } =
    product;
  return (
    <div className="w-full border-2 border-slate-800 flex justify-between items-center rounded-lg shadow-lg text-slate-800">
      <div className="w-2/5"><img className=" h-72" src={image} alt="product" /></div>
      <div className="p-5 space-y-5 mt-5 w-full
      ">
        <div className="flex justify-center items-center">
          <h3 className="text-3xl text-slate-800">{name}</h3>
          <p className="text-xl text-green-700">{price} tk</p>
        </div>
       <div className="flex justify-center items-center">
       <h3>{description}</h3>
       </div>
        <div className="flex justify-center items-center">
          <h3>
            quantity : <span className="text-red-500">{quantity}</span>{" "}
          </h3>
          <p className="text-blue-500">{supplier}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
