import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Inventories from '../components/Inventories';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Banner/>
            <Inventories/>
            <div className='flex justify-end items-center my-4'>
                <Button onClick={() => navigate("/manageinventory")}>Manage inventories</Button>
            </div>
        </div>
    );
};

export default Home;