import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { MotionStack } from "../../motioncomponents";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: StaticImageData;
  index: number;
  delay: number;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { name, role, content, avatar, index, delay } = props;

  const testimonialVariants = {
    hidden: {
      translateX: -50,
      opacity: 0,
      transition: { duration: 0.85 },
    },
    visible: {
      translateX: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: delay },
    },
  };

  const bgColor = useColorModeValue("white", "brand.800");

  return (
    <MotionStack
      willChange="transform, opacity"
      boxShadow="2xl"
      maxW="640px"
      direction={{ base: "column-reverse", md: "row" }}
      width="full"
      align="center"
      rounded="xl"
      p={5}
      spacing={15}
      position="relative"
      bg={bgColor}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={testimonialVariants}
    >
      <Flex direction="column" textAlign="left" justifyContent="space-between">
        <Text pb={4} textAlign="justify">
          {content}
        </Text>
        <Text fontWeight="bold">
          {name}
          <Text as="span" fontWeight="medium" color="gray.500">
            {" "}
            - {role}
          </Text>
        </Text>
      </Flex>
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="full"
        boxSize="80px"
        minW="80px"
        minH="80px"
      >
        <Image
          src={avatar}
          layout="fill"
          objectFit="cover"
          alt={name}
          priority={true}
          placeholder="blur"
        />
      </Box>
    </MotionStack>
  );
};

export default TestimonialCard;
