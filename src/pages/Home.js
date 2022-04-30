import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../components/Banner';
import Inventories from '../components/Inventories';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventories/>
        </div>
    );
};

export default Home;