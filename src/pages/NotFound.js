import React from 'react';
import notfound from '../assets/images/notfound.png';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;