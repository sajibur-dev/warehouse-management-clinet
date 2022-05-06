import React from 'react';
import Button from '../components/Button';


const Service = ({service}) => {
    const {name,feature,price} = service;
    console.log(name,feature,price);
    return (
        <div className='space-y-10 rounded-xl shadow-lg p-3 w-72'>
            <h1 className='text-3xl'>{name}</h1>
            <div>
                <ol>
                    {
                        feature.map((ft) => <li>{ft}</li>)
                    }
                </ol>
            </div>
            <div>
                <h3 className='text-3xl'>{price}$</h3>
            </div>
            <Button>buy now</Button>
        </div>
    );
};

export default Service;