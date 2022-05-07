import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({children,...rest}) => {
    return (
        <Link className='bg-slate-800 text-white px-3  py-2 mb-3 md:w-fit  w-1/2  rounded-lg md:mr-3 uppercase' {...rest}>
            {children}
        </Link>
    );
};

export default LinkButton;