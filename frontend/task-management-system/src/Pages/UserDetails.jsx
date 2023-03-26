import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  // const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const { _id } = useParams();
  // const {isAuth}=useContext(AuthContext)
  useEffect(() => {
    axios
      .get(`http://localhost:4400/tasks/${_id}`)
      .then((res) => console.log(res.data))
      .then((res) => setTasks(res.data));
  }, []);

  // if(!isAuth){
  //   return <Navigate to="/login"  />
  // }

  return (
    <>
    <Link style={{fontSize:"30px"}} to={"/homepage"}>Go Back to home</Link>
          <Heading>All Tasks given to the employee are :- </Heading> 
      {tasks.map((el) => {
        return (
          <>
          <div>
            <h1>{` Title:  ${el.title}`}</h1>
            <h1>{` Type:  ${el.type}`}</h1>
            <h1>{` Description:  ${el.description}`}</h1>


          </div>
          <hr />
          </>
        );
      })}
    </>
  );
};
export default UserDetails;
