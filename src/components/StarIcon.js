import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

const StarIcon = ({textColor}) => {
    return (
        <>
                <FontAwesomeIcon className={textColor} icon={faStar} />
        </>
    );
};

export default StarIcon;