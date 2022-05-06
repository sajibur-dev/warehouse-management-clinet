import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
      <div className="relative  left-1/2">
        <Spinner animation="border" variant="primary" />
      </div>


  );
};

export default Loading;
