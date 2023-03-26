import React from 'react'
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios"
const Tasks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:4400/tasks/all").then((response) => {
        setData(response.data);
      });
    }, []);

  return (
    <div style={{marginTop:"50px"}}>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {data.map((item) => (
        <GridItem key={item.id}>
          {/* render each data item as a block */}
          <Box border={"2px solid white"} >

          <Box fontSize={"20px"} width="200px" >{` Title : ${item.title}`}</Box>
          <Box fontSize={"20px"} width="200px" >{` Description : ${item.description}`}</Box>
          <Box fontSize={"20px"} width="200px" >{` Type of task : ${item.type}`}</Box>
          <Box fontSize={"20px"} width="200px" >{` Task Manager : ${item.assignedTo}`}</Box>

          </Box>
          <Button>Edit</Button>

          {/* add more blocks as needed */}
        </GridItem>
      ))}
    </Grid>
    </div>
  )
}

export default Tasks