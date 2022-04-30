import React, { useState } from "react";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormButton from "../components/FormButton";
import SocialLogin from "../components/SocialLogin";
import TextField from "../components/TextField";
import auth from "../firebase";

const SignIn = () => {
  const [eamil, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const handleSignInForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(eamil, password);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 p-5 rounded-lg mt-16">
        <form onSubmit={handleSignInForm}>
          <TextField
            onBlur={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <TextField
            onBlur={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <FormButton value="signin" />
        </form>
        {loading && <p>loading...</p>}
        {error && <p className="text-red-500">{error.message}</p>}
        <p className="mt-5">
          New To Electronics Hub?
          <Link className="text-blue-500 ml-2" to="/regester">
            Regester
          </Link>
        </p>
        <button
          onClick={async () => {
            await sendPasswordResetEmail(eamil);
            toast("send email for password reset! check your email");
          }}
          className="bg-blue-800 py-2 px-8 my-3 rounded-lg text-white"
        >
          forgotten password
        </button>
        <SocialLogin type="sign up" />
      </div>
    </div>
  );
};

export default SignIn;
