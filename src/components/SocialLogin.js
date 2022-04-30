import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import githubLogin from '../assets/logo/github.png';
import googleLogo from "../assets/logo/google.png";
import auth from '../firebase';


const SocialLogin = ({ type, provider, ...rest }) => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

  
  const navigate = useNavigate()

  if(user || githubUser){
    navigate('/')
  }

  return (
    <>
      {" "}
      <div
        className="flex justify-center items-center border-2 border-green-800 rounded-lg mt-5 cursor-pointer hover:rounded-full"
        {...rest}
      >
        <img className="w-10 mr-3" src={googleLogo} alt="" />
        <button onClick={() => signInWithGoogle()}> {type} with Google</button>
      </div>
      <div
        className="flex justify-center items-center border-2 border-green-800 rounded-lg mt-5 py-2 cursor-pointer hover:rounded-full"
        {...rest}
      >
        <img className="w-12 mr-3" src={githubLogin} alt="" />
        <button onClick={() => signInWithGithub()}> {type} with Github</button>
      </div>
    </>
  );
};

export default SocialLogin;
