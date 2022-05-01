import React from 'react';

const ShowInventory = ({product}) => {
    const {name,category} = product;
    return (
        <div className='flex justify-between items-center border-2 border-slate-800 roun rounded-lg px-5 py-2 my-3'>
            <h3>{name}</h3>
            <h3>{category}</h3>
            <button>delete</button>
        </div>
        
    );
};

export default ShowInventory;