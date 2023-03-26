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
    navigate("/");
  };

  return (
    <div>
      <Heading>Hello!! Welcome to Task Management System</Heading>
      <div style={{ display: "flex", gap: "100px", marginTop: "40px" }}>
        <Box
          bg={`url("https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=2280&fm=webp")`}
          bgRepeat="no-repeat"
          bgSize="contain"
          w="60%"
          h="600px"
        ></Box>

        <Box
          position={"fixed"}
          right="50px"
          border={"1px solid black"}
          width={"30%"}
          margin="10px"
          marginRight="100px"
        >
          <FormControl isRequired>
            <FormLabel style={{ marginLeft: "25%", marginTop: "20px" }}>
              Enter name
            </FormLabel>
            <Input
              type="text"
              placeholder="enter name"
              backgroundColor="white"
              width="50%"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormLabel style={{ marginLeft: "25%", marginTop: "20px" }}>
              Enter - Email
            </FormLabel>
            <Input
              type="text"
              placeholder="enter email"
              value={email}
              width="50%"
              backgroundColor="white"
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormLabel style={{ marginLeft: "25%", marginTop: "20px" }}>
              Password
            </FormLabel>

            <Input
              type="password"
              placeholder="enter password"
              value={pass}
              backgroundColor="white"
              width="50%"
              onChange={(e) => setPass(e.target.value)}
            />
          </FormControl>
          <Button mt={"40px"} onClick={handleSubmit}>
            submit
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Register;
