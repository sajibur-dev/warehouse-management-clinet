import React from 'react';
import useGetData from '../hooks/useGetData';
import Inventory from './Inventory';

const Inventories = () => {
    const url = 'https://dry-mountain-82571.herokuapp.com/products';
    const [products] = useGetData(url);

    const showingProducts = products.slice(0,6)
    
    return (
        <div className='p-3 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-3'>
            {
                showingProducts.map((product) => <Inventory key={product._id} product={product}/>)
            }
        </div>
    );
};

export default Inventories;