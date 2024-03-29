import { Box, Button, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { MotionStack } from "../../motioncomponents";

interface ProyectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  index: number;
  delay: number;
  originalBackground: boolean;
}

const ProyectCard = (props: ProyectCardProps) => {
  const { title, description, image, href, index, delay, originalBackground } =
    props;

  const darkModeBG = originalBackground ? "brand.800" : "brand.900";

  const background = useColorModeValue("white", darkModeBG);

  const proyectVariants = {
    hidden: {
      translateX: 100,
      opacity: 0,
      transition: { duration: 0.9 },
    },
    visible: {
      translateX: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: delay },
    },
  };

  return (
    <MotionStack
      willChange={"transform, opacity"}
      boxShadow={"2xl"}
      maxW={{ base: "none", md: "80vw" }}
      bg={background}
      rounded={"xl"}
      direction={{ base: "column", lg: "row" }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      variants={proyectVariants}
      overflow="hidden"
    >
      <Box
        minH={{ base: "50vw", md: "60vh" }}
        minW={"50vw"}
        position={"relative"}
      >
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          priority={true}
          placeholder="blur"
        />
      </Box>

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
        <Text color={"gray.500"} textAlign="justify">
          {description}
        </Text>
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
