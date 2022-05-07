import React from 'react';
import StarIcon from './StarIcon';

const ReviewIcon = ({review,qunatity}) => {
    return (
        <div>
            {review === qunatity &&
            [...Array(review).keys()].map(() => (
              <StarIcon textColor="text-orange-600" />
            ))}
        </div>
    );
};

export default ReviewIcon;