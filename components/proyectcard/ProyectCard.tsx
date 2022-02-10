import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MotionStack } from "../../motioncomponents";

interface ProyectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index: number;
  delay: number;
}

const ProyectCard = (props: ProyectCardProps) => {
  const { title, description, image, href, index, delay } = props;

  const proyectVariants = {
    hidden: {
      x: "8vw",
      opacity: 0,
      transition: { duration: 0.85 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: delay },
    },
  };

  return (
    <MotionStack
      boxShadow={"2xl"}
      maxW={{ base: "none", md: "80vw" }}
      bg={useColorModeValue("white", "brand.900")}
      rounded={"xl"}
      direction={{ base: "column", lg: "row" }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.9 }}
      variants={proyectVariants}
      overflow="hidden"
    >
      <Image src={image} fit="cover" maxW={{ base: "none", lg: "50vw" }} />
      <VStack
        p={5}
        spacing={10}
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontWeight={600} fontFamily={"heading"}>
          {title}
        </Text>
        <Text color={"gray.500"}>{description}</Text>
        <a href={href} target="_blank" rel="noreferrer noopener">
          <Button fontWeight={"bold"} rounded="full">
            Visitar Proyecto
          </Button>
        </a>
      </VStack>
    </MotionStack>
  );
};

export default ProyectCard;
