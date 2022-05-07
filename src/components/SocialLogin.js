import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import githubLogin from '../assets/logo/github.png';
import googleLogo from "../assets/logo/google.png";
import auth from '../firebase';
import useToken from "../hooks/useToken";
import Error from "./Error";
import Loading from "./Loading";


const SocialLogin = ({ type, provider, ...rest }) => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
  const [token] = useToken(user || githubUser);

  
  const navigate = useNavigate();
  console.log(user);

  if(token){
    navigate('/')
  }

  return (
    
    <>
    {loading && <div className="absolute"><Loading/></div>}
    {error && <Error/>}
      {" "}
      <div
        className="flex justify-center items-center border-2 border-green-800 rounded-full mt-5 cursor-pointer"
        {...rest}
      >
        <img className="w-10 mr-3" src={googleLogo} alt="" />
        <button onClick={() => signInWithGoogle()}> {type} with Google</button>
      </div>

      <div
        className="flex justify-center items-center border-2 border-green-800 rounded-full mt-5 py-2 cursor-pointer"
        {...rest}
      >
        <img className="w-12 mr-3" src={githubLogin} alt="" />
        <button onClick={() => signInWithGithub()}> {type} with Github</button>
      </div>
    </>
  );
};

export default SocialLogin;
