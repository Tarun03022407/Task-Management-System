import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Select,
} from "@chakra-ui/react";
import Tasks from "./Tasks";

const Navbar = () => {
  const [isOpenemp, setIsOpenemp] = useState(false);
  const [isOpentask, setIsOpentask] = useState(false);

  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [Designation, setDesignation] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const nav = [
    { title: "Home", to: "/homepage" },
    { title: "All Employees List", to: "/allusers" },

    { title: localStorage.getItem("token") ? "Logout" : "Login", to: "/" },
  ];
  useEffect(() => {
    fetch("http://localhost:4400/users")
      .then((response) => response.json())
      // .then((data)=>console.log(data))
      .then((data) => setData(data))
      // .then((res)=>console.log(res.data._id))
      .catch((error) => console.log(error));
  }, []);

  const handleOpenModalemployee = () => setIsOpenemp(true);
  const handleCloseModalepmloyee = () => setIsOpenemp(false);
  const handleOpenModaltask = () => setIsOpentask(true);
  const handleCloseModaltask = () => setIsOpentask(false);

  const handleAddEmployee = () => {
    const payload = { name, image, Designation };
    fetch("http://localhost:4400/users/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert(`added ${name}`);
  };

  const handleAddTask = () => {
    const payload = { title, type, description, assignedTo };
    fetch("http://localhost:4400/tasks/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert(`added ${title} task . `);
  };
  const handleSelecttype = (event) => setType(event.target.value);

  const handleSelectChange = (event) => setAssignedTo(event.target.value);
  return (
    <div>
      {nav.map((el, i) => (
        <Link style={{ margin: "5px" }} key={i} to={el.to}>
          {el.title}
        </Link>
      ))}
      <Button onClick={handleOpenModalemployee}>Add Employee</Button>
      <Button onClick={handleOpenModaltask}>Add Task</Button>

      <Modal
        color="black"
        isOpen={isOpenemp}
        onClose={handleCloseModalepmloyee}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <label> enter name</label>
              <Input
                color={"black"}
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <br />
              <label> enter designation</label>

              <Input
                placeholder="enter designation  "
                value={Designation}
                type="text"
                onChange={(e) => setDesignation(e.target.value)}
              />
              <br />
              <label> enter image url</label>

              <Input
                placeholder="enter image url"
                value={image}
                type="text"
                onChange={(e) => setImage(e.target.value)}
              />
              <br />
              <Button onClick={handleAddEmployee} mt="4" type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal color="black" isOpen={isOpentask} onClose={handleCloseModaltask}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <label> enter title</label>
              <Input
                color={"black"}
                placeholder="enter name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
              <br />
              <label> enter type of task</label>
              <Select value={type} onChange={handleSelecttype}>
                <option value="bug">bug</option>
                <option value="feature">feature</option>
                <option value="story">story</option>
              </Select>
              <label> enter Description</label>

              <Input
                placeholder="enter desciption  "
                value={description}
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <label> Select employee</label>

              <Select value={assignedTo} onChange={handleSelectChange}>
                {data.map((item) => (
                  <option key={item.id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </Select>

              <br />
              <Button onClick={handleAddTask} mt="4" type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Tasks />
    </div>
  );
};

export default Navbar;
