import React from "react";
import useGetData from "../hooks/useGetData";
import Service from "./Service";

const Services = () => {
  const url = "https://dry-mountain-82571.herokuapp.com/services";
  const [services] = useGetData(url);
  return (
    <div className="mt-5">
      <h1 className="text-3xl text-center ">Services </h1>
      <div className="grid md:grid-cols-3 gap-5 p-3 mt-12">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
