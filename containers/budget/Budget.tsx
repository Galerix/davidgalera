import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { MdEmail } from "react-icons/md";
import { ContactForm } from "../../components";

const Budget = () => {
  const buttonColor = useColorModeValue("gray.700", "gray.200");
  const textColor = useColorModeValue("gray.700", "gray.500");

  return (
    <Stack
      as={Box}
      margin={"auto"}
      mx={"auto"}
      px={5}
      alignItems={"center"}
      minH={"100vh"}
      py={{ base: "5vh", sm: "10vh", md: "15vh" }}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 5, md: 12 }}
      >
        <VStack
          spacing={12}
          maxW={{ base: "none", md: "30vw" }}
          textAlign="center"
          justifyContent={"center"}
        >
          <Heading as={"h3"}>PIDA PRESUPUESTO</Heading>
          <Text mt={{ sm: 3, md: 3, lg: 5 }} color={textColor}>
            Si quiere solicitar un presupuesto para un proyecto puede ponerse en
            contacto conmigo a través de mi correo electrónico o rellenando el
            formulario de contacto, describiendo con el máximo detalle posible
            las necesidades del proyecto.
          </Text>

          <a href="mailto:contact@davidgalera.dev?subject=SOLICITUD%20DE%20PRESUPUESTO%20PARA%20PROYECTO">
            <Button
              size="md"
              height="48px"
              variant="ghost"
              _hover={{ border: "2px solid" }}
              leftIcon={<MdEmail size="20px" />}
            >
              <Text color={buttonColor}>contact@davidgalera.dev</Text>
            </Button>
          </a>
        </VStack>
        <ContactForm />
      </Stack>
    </Stack>
  );
};

export default Budget;
