
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-router-dom';
import googlePlay from '../assets/images/google-play.png';
import footerImage from '../assets/images/pay-method.png';

const Footer = () => {
    
    return (
        <div className='p-3 bg-blue-700 text-white mt-5 w-full'>
            <div className='md:flex md:justify-between items-center md:space-y-0 space-y-5'>
                <div className='space-y-3'>
                    <h1>  Electronics Hub</h1>
                    <p><FontAwesomeIcon icon={faLocationDot}/> Leven-4,Mirpur-12,Dhaka</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> Official:Web@Electronics-hub.com</p>
                    <p><FontAwesomeIcon icon={faPhone}/> Helpline:01548798545,0165487957489</p>
                    <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                    <img src={googlePlay} alt="" />
                </div>
                <div>
                    <Link className='block hover:underline hover:text-white' to="/blog">Blogs</Link>
                    <Link className='block hover:underline hover:text-white' to="/AboutUs">About us</Link>
                    <Link className='block hover:underline hover:text-white' to="/">Success</Link>
                    <Link className='block hover:underline hover:text-white' to="/">Refund policy</Link>
                    <Link className='block hover:underline hover:text-white' to="/terms">Terms and Condition</Link>
                    <Link className='block hover:underline hover:text-white' to="/privacy">Privacy Policy</Link>
                </div>
                <div>
                    <img src={footerImage} alt="" />
                </div>
            </div>
           <p className='text-center mt-5'>Copyright &copy; {new Date().getFullYear()} Electronic-hub.com</p>
        </div>
    );
};

export default Footer;