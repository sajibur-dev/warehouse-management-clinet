import React from 'react';

const Button = ({children,...rest}) => {
    return (
        <button className='px-3 py-2 md:w-fit  w-1/2  bg-blue-800 text-white rounded-lg uppercase' {...rest}>
            {children}
        </button>
    );
};

export default Button;