import React from "react";
import { useState } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch("http://localhost:4400/users");
    const data = await response.json();
    setUsers(data);
  }
  return (
    <>
      <Link to={"/homepage"}>Go Back</Link>
      <Stack spacing={4}>
        <Button onClick={fetchUsers}>Get All Employees</Button>
        {users.map((user) => (
          <Box >
           <Link to={`/tasks/${user._id}`}><Button>{`Employee Name:  ${user.name}`}</Button></Link>
            <Text>{`Designation:  ${user.Designation}`}</Text>
            <hr />
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default AllUsers;
