import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../Assets/jira.png"

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = { name, email, pass };
    console.log(payload);
    fetch("http://localhost:4400/admin/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert(`registerd with name ${name}`);
    navigate("/login");
  };

  return (
    <div>
      <Heading>Hello!! Welcome to Task Management System</Heading>
      <Box style={{backgroundImage:""}}>
      <FormControl isRequired>
        <FormLabel style={{marginLeft:"35%"}}>enter name</FormLabel>
        <Input
          type="text"
          placeholder="enter name"
          backgroundColor="white"
          width="30%"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     
        <FormLabel style={{marginLeft:"35%"}}>email</FormLabel>
        <Input
          type="text"
          placeholder="enter email"
          value={email}
          width="30%"
          backgroundColor="white"
          onChange={(e) => setEmail(e.target.value)}
        />
    
        <FormLabel style={{marginLeft:"35%"}}>password</FormLabel>

        <Input
          type="password"
          placeholder="enter password"
          value={pass}
          backgroundColor="white"
          width="30%"
          onChange={(e) => setPass(e.target.value)}
        />
      </FormControl>
      </Box>
    
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  );
};

export default Register;
