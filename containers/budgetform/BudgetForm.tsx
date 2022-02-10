import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MotionStack } from "../../motioncomponents";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const BudgetForm = () => {
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

  return (
    <MotionStack
      as={Box}
      margin={"auto"}
      mx={"auto"}
      px={4}
      alignItems={"center"}
      minH={"100vh"}
      py={"15vh"}
    >
      <MotionStack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 5, md: 12 }}
      >
        <VStack
          spacing={12}
          maxW={{ base: "none", md: "30vw" }}
          textAlign="center"
          justifyContent={"center"}
        >
          <Heading>PIDA PRESUPUESTO</Heading>
          <Text
            mt={{ sm: 3, md: 3, lg: 5 }}
            color={useColorModeValue("gray.700", "gray.500")}
          >
            Si quiere solicitar un presupuesto puede ponerse en contacto conmigo
            a través de mi correo electrónico o rellenando el formulario de
            contacto, describiendo con el máximo detalle posible las necesidades
            del proyecto.
          </Text>

          <Button
            size="md"
            height="48px"
            width="300px"
            variant="ghost"
            _hover={{ border: "2px solid" }}
            leftIcon={<MdEmail size="20px" />}
          >
            <Text color={useColorModeValue("gray.700", "gray.200")}>
              dgalerarodriguez@gmail.com
            </Text>
          </Button>
        </VStack>

        <MotionStack
          minW={{ base: "80vw", md: "35vw" }}
          spacing={5}
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "brand.800")}
          borderRadius="lg"
          padding={8}
          textAlign="center"
          initial="hidden"
          whileInView="visible"
          variants={budgetFormVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FormControl id="name">
            <FormLabel>Nombre</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsPerson color="gray.800" />}
              />
              <Input type="text" />
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineEmail color="gray.800" />}
              />
              <Input type="text" />
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Mensaje</FormLabel>
            <Textarea placeholder="Por favor, describa las necesidades de su proyecto." />
          </FormControl>
          <FormControl id="name">
            <Button variant="solid">Enviar</Button>
          </FormControl>
        </MotionStack>
      </MotionStack>
    </MotionStack>
  );
};

export default BudgetForm;
