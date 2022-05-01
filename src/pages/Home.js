import React from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../components/Banner';
import Inventories from '../components/Inventories';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventories/>
            <div className='flex justify-end items-center my-4'>
                <Link className='px-5 py-2 text-white bg-slate-800 rounded-lg'  to="manageinventory" >Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Home;