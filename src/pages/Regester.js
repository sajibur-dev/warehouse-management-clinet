import React, { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSendEmailVerification,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormButton from "../components/FormButton";
import SocialLogin from "../components/SocialLogin";
import TextField from "../components/TextField";
import auth from "../firebase";

const Regester = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const handleRegesterForm = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    await updateProfile({ displayName });
    toast("sent email");
    toast("updaed profile");
  };
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 p-5 rounded-lg mt-16">
      <form
        onSubmit={handleRegesterForm}
        
      >
        <TextField
          onBlur={(e) => setDisplayName(e.target.value)}
          type="text"
          placeholder="name"
        />
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
        <FormButton value="regester" />
      </form>
      <p className="mt-5">Already have an account ?<Link className="text-blue-500 ml-2" to="/signin">sign in</Link></p>
      <SocialLogin type="sign up" />
      </div>
    </div>
  );
};

export default Regester;
