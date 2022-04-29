import React from 'react';

const TextField = ({...rest}) => {
    return (
        <input className='block p-2 border-2 border-gray-400 rounded-lg mb-6 outline-none' {...rest}  required/>
    );
};

export default TextField;