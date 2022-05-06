import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase';
import Loading from '../Loading';

const PrivateRoute = () => {
    const [user,loading] =  useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading/>
    }
    if(user){
        return <Outlet/>
    } else {
        return <Navigate to='/signin' state={{from:location}} replace />
    }
};

export default PrivateRoute;