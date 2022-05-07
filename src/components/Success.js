import React, { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import StarIcon from "./StarIcon";

const Success = () => {
  const url = "https://dry-mountain-82571.herokuapp.com/reviews";
  const [reviews] = useGetData(url);
  const [showReview, setShowReview] = useState(0);
  console.log(reviews[showReview]);
  useEffect(() => {
    const inverval = setInterval(() => {
      if (showReview >= reviews?.length - 1) {
        setShowReview(0);
      } else {
        setShowReview(showReview + 1);
      }
    }, 1000);
    return () => {
      clearInterval(inverval);
    };
  }, [showReview, reviews?.length]);
  return (
    <div className="bg-gray-200 p-5">
      <h1 className="md:text-3xl text-center my-5">
        What client's says about our services
      </h1>
      <div className="bg-white  md:w-1/2 mx-auto p-3 rounded-lg text-center space-y-5 px-5 py-8">
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
          {reviews[showReview]?.review === 3 && (
            <>
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon />
              <StarIcon />
            </>
          )}
          {reviews[showReview]?.review === 4 && (
            <>
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon />
            </>
          )}
          {reviews[showReview]?.review === 5 && (
            <>
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
              <StarIcon textColor="text-orange-600" />
            </>
          )}
        </h3>
        <p>{reviews[showReview]?.comments}</p>
      </div>
    </div>
  );
};

export default Success;
