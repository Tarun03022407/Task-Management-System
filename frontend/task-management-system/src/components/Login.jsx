import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
const navigate = useNavigate()
  const { handleAuth } = useContext(AuthContext);

  const handleSubmit = () => {
    const payload = { email, pass };
    // console.log(payload);
    fetch("http://localhost:4400/admin/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        handleAuth(true)
        navigate("/homepage");

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>LOGIN PAGE page</div>

      <input
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSubmit}>LOGIN</button>
    </>
  );
};

export default Login;
