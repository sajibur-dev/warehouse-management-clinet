import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import FormButton from '../components/FormButton';
import TextField from '../components/TextField';
import auth from '../firebase';

const AddReview = () => {
    const [name,setName] = useState('');
    const [desgnation,setDesnation] = useState('');
    const [review,setReview] = useState('');
    const [comments,setComments] = useState('');
    const [img,setImg] = useState('');
    const [existingReview,setExistingReview] = useState({});
console.log(existingReview);
    const [user] = useAuthState(auth);
    console.log(user);
    useEffect(()=>{
        fetch(`https://dry-mountain-82571.herokuapp.com/review?email=${user?.email}`)
        // fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
                // console.log(data);
                setExistingReview(data)
        }).catch((err) => {
            console.log(err);
        })
        
    },[user?.email])
    const handleAddReview = (e) => {
        e.preventDefault();
        console.log('button was clicked');
        const userReview = {
            name,
            desgnation,
            review,
            comments,
            img,
            email:user?.email
        };

        if(existingReview.message){
            fetch('https://dry-mountain-82571.herokuapp.com/reviews',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(userReview)
            })
            .then((res)=> res.json())
            .then((data) => {
                toast('data is saved');
                
            })
        } else {
            toast('review allready exist');
        }
    }
    return (
        <div>
            <h1 className='text-2xl text-center my-4'>Provide your amazing review</h1>
            <div className='md:flex md:justify-center md:items-center'>
            <form onSubmit={handleAddReview}>
                <TextField onBlur={(e) => setName(e.target.value)} placeholder="name"/>
                <TextField onBlur={(e) => setDesnation(e.target.value)} placeholder="desgnation"/>
                <TextField onBlur={(e) => setReview(e.target.value)} type="number" placeholder="review"/>
                <textarea onBlur={(e) => setComments(e.target.value)} placeholder="comments" className='border-2 border-gray-400 outline-none px-2 py-1 rounded-lg'/>
                <TextField onBlur={(e) => setImg(e.target.value)} placeholder="img url"/>
                <FormButton value="add review"/>
            </form>
            </div>
        </div>
    );
};

export default AddReview;