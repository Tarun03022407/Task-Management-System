import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
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
        alert(res.msg)
        handleAuth(true);
        navigate("/homepage")
        if(res.msg==="wrong credentials"){
        navigate("/")

        }
        
      })
      .catch((error) => console.log(error.msg));
      navigate("/login")
    };
    
  return (
    <>
      <Box margin={"auto"} width={"40%"} border={"2px solid white"}>
        <Text>Hello !! Login here</Text>
        <Box>
          <FormControl isRequired>
            <FormLabel ml={"35%"} mt={"30px"}>
              Enter Email
            </FormLabel>
            <Input
              type="text"
              placeholder="enter email"
              width="30%"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // marginTop="30px"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel ml={"35%"} mt={"30px"}>
              Enter Password
            </FormLabel>

            <Input
              type="password"
              width="30%"
              placeholder="enter password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              // marginTop="30px"
            />
          </FormControl>
        </Box>
        <Box>
          <Button mt={"20px"} onClick={handleSubmit}>
            LOGIN
          </Button>
        </Box>
        <Box>
          <Link to={"/signup"}>Not Subscribed ? SignUp here</Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;
