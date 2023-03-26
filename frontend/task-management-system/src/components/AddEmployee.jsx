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
import React, { useState } from 'react'
const AddEmployee = () => {
 
  const handleCloseModalepmloyee = () => setIsOpen(false);
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
  return (
    <Modal color="black" isOpen={isOpen} onClose={handleCloseModalepmloyee}>
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
  )
}

export default AddEmployee