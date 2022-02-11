import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { MotionStack } from "../../motioncomponents";

const ContactForm = () => {
  const budgetFormVariants = {
    hidden: {
      scale: 0.7,
      opacity: 0,
      transition: { duration: 0.85 },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <MotionStack
      willChange={"transform, opacity"}
      minW={{ base: "80vw", md: "35vw" }}
      spacing={5}
      boxShadow={"2xl"}
      bg={useColorModeValue("white", "brand.800")}
      borderRadius="lg"
      padding={{ base: 4, md: 8 }}
      textAlign="center"
      initial="hidden"
      whileInView="visible"
      variants={budgetFormVariants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <FormControl id="name">
        <FormLabel>Nombre</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BsPerson color="gray.800" />
          </InputLeftElement>
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="name">
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdOutlineEmail color="gray.800" />
          </InputLeftElement>
          <Input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="name">
        <FormLabel>Mensaje</FormLabel>
        <Textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Por favor, describa las necesidades de su proyecto."
        />
      </FormControl>
      <FormControl id="name">
        <Button variant="solid">Enviar</Button>
      </FormControl>
    </MotionStack>
  );
};

export default ContactForm;
