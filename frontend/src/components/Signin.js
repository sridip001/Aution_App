import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    alert(`Signin with Email: ${email}`);
    navigate("/dashboard");
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">Signin</h2>
      <input type="email" placeholder="Email" className="border p-2 mt-4" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mt-4" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 mt-4" onClick={handleSignin}>Signin</button>
    </div>
  );
};

export default Signin;
