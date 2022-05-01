import React from 'react';
import useGetData from '../hooks/useGetData';
import Inventory from './Inventory';

const Inventories = () => {
    const url = 'http://localhost:5000/products';
    const [products] = useGetData(url);

    const showingProducts= products.slice(0,6)
    
    return (
        <div className='p-4 grid grid-cols-3 gap-7'>
            {
                showingProducts.map((product) => <Inventory key={product._id} product={product}/>)
            }
        </div>
    );
};

export default Inventories;