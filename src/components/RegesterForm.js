import React, { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSendEmailVerification,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase";
import FormButton from "./FormButton";
import TextField from "./TextField";

const RegesterForm = () => {
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
    <form onSubmit={handleRegesterForm}>
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
  );
};

export default RegesterForm;
