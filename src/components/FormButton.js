import React from 'react';

const FormButton = ({value,...rest}) => {
    return (
        <input className='bg-blue-800 py-2 px-10 w-full text-white text-lg rounded-lg cursor-pointer' type="submit" value={value} {...rest} />
    );
};

export default FormButton;