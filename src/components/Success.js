import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import Button from "./Button";
import ReviewIcon from "./ReviewIcon";

const Success = () => {
  const url = "https://dry-mountain-82571.herokuapp.com/reviews";
  const [reviews] = useGetData(url);
  const [showReview, setShowReview] = useState(0);
  const navigta =  useNavigate();
  useEffect(() => {
    const inverval = setInterval(() => {
      if (showReview >= reviews?.length - 1) {
        setShowReview(0);
      } else {
        setShowReview(showReview + 1);
      }
    }, 2000);
    return () => {
      clearInterval(inverval);
    };
  }, [showReview, reviews?.length]);
  return (
    <div className="bg-gray-200 p-5">
      <h1 className="md:text-3xl text-center my-5">
        What client's says about our services
      </h1>
      <div className="bg-white  md:w-1/2 mx-auto p-3  h-96 rounded-lg text-center space-y-5 px-5 py-8">
        <div className="flex justify-center items-center">
          <img
            src={reviews[showReview]?.img}
            className="w-20 h-20 rounded-full ring-4 ring-sky-800"
            alt=""
          />
        </div>
        <h1 className="text-xl">
          {reviews[showReview]?.name}{" "}
          <span className="text-xs">( {reviews[showReview]?.desgnation} )</span>{" "}
        </h1>
        <h3>
          {
              <ReviewIcon review={+(reviews[showReview]?.review)} qunatity={2}/>
          }
          {
              <ReviewIcon review={+(reviews[showReview]?.review)} qunatity={3}/>
          }
          {
              <ReviewIcon review={+(reviews[showReview]?.review)} qunatity={4}/>
          }
          {
              <ReviewIcon review={+(reviews[showReview]?.review)}  qunatity={5}/>
          }
        </h3>
        <div className="h-36 overflow-y-scroll">
          <p>{reviews[showReview]?.comments}</p>
        </div>
      </div>
      <div className="flex justify-end  items-center mt-3">

      <Button onClick={() => navigta('/addReview')}>Provide review</Button>
      </div>
    </div>
  );
};

export default Success;
