import React from 'react';

const Button = ({children,...rest}) => {
    return (
        <button className='py-3 px-5 bg-slate-800 text-white rounded-lg uppercase mt-3' {...rest}>
            {children}
        </button>
    );
};

export default Button;