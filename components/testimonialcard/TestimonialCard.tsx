import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MotionStack } from "../../motioncomponents";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
  delay: number;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { name, role, content, avatar, index, delay } = props;

  const testimonialVariants = {
    hidden: {
      translateX: -100,
      opacity: 0,
      transition: { duration: 0.85 },
    },
    visible: {
      translateX: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: delay },
    },
  };

  return (
    <MotionStack
      boxShadow={"2xl"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={5}
      spacing={15}
      position={"relative"}
      bg={useColorModeValue("white", "brand.800")}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.9 }}
      variants={testimonialVariants}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <Text fontWeight={"medium"} fontSize={"14px"} pb={4}>
          {content}
        </Text>
        <Text fontWeight={"bold"} fontSize={13}>
          {name}
          <Text as={"span"} fontWeight={"medium"} color={"gray.500"}>
            {" "}
            - {role}
          </Text>
        </Text>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </MotionStack>
  );
};

export default TestimonialCard;
