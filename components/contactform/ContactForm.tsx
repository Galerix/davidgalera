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
import { MdCheck, MdOutlineEmail } from "react-icons/md";
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

  const [loading, setLoading] = useState(false);

  const [buttonText, setButtonText] = useState("Enviar");

  const [name, setName] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageInvalid, setMessageInvalid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const validateString = (string: string) => {
    return !(!string || /^\s*$/.test(string));
  };

  const validateEmail = () => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!validateString(name)) {
      setNameInvalid(true);
      setLoading(false);
      return;
    }
    setNameInvalid(false);

    if (!validateEmail()) {
      setEmailInvalid(true);
      setLoading(false);
      return;
    }
    setEmailInvalid(false);

    if (!validateString(message)) {
      setMessageInvalid(true);
      setLoading(false);
      return;
    }
    setMessageInvalid(false);

    const data = {
      name,
      email,
      message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setSubmitted(true);
      setButtonText("Enviado");
      setName("");
      setEmail("");
      setMessage("");
    }

    setLoading(false);
  };

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
            disabled={submitted}
            borderColor={"inherit"}
            _autofill={{
              textFillColor: useColorModeValue("black", "white"),
              boxShadow: `0 0 0px 1000px ${useColorModeValue(
                "white",
                "#011e2a"
              )} inset`,
              transition: "background-color 5000s ease-in-out 0s",
            }}
            isInvalid={nameInvalid}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdOutlineEmail color="gray.800" />
          </InputLeftElement>
          <Input
            disabled={submitted}
            borderColor={"inherit"}
            _autofill={{
              textFillColor: useColorModeValue("black", "white"),
              boxShadow: `0 0 0px 1000px ${useColorModeValue(
                "white",
                "#011e2a"
              )} inset`,
              transition: "background-color 5000s ease-in-out 0s",
            }}
            isInvalid={emailInvalid}
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="message">
        <FormLabel>Mensaje</FormLabel>
        <Textarea
          disabled={submitted}
          borderColor={"inherit"}
          isInvalid={messageInvalid}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Por favor, describa las necesidades de su proyecto."
        />
      </FormControl>
      <FormControl id="name">
        <Button
          variant="solid"
          rightIcon={submitted ? <MdCheck /> : undefined}
          isLoading={loading}
          disabled={submitted}
          onClick={handleSubmit}
        >
          {buttonText}
        </Button>
      </FormControl>
    </MotionStack>
  );
};

export default ContactForm;
