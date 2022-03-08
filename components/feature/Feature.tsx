import { Flex, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import React, { ReactElement } from "react";

import { MotionStack } from "../../motioncomponents";

type FeatureProps = {
  title: string;
  text: string;
  icon: ReactElement;
  delay: number;
};

const Feature = ({ title, text, icon, delay }: FeatureProps) => {
  const [isMedium] = useMediaQuery("(min-width: 48em)");

  const finalDelay = isMedium ? delay : 0;

  const featureVariants = {
    hidden: {
      translateY: 200,
      opacity: 0,
      transition: { duration: 0.85 },
    },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: finalDelay },
    },
  };

  const iconColor = useColorModeValue("white", "gray.800");

  const iconBg = useColorModeValue("brand.500", "brand.200");

  const textColor = useColorModeValue("gray.700", "gray.500");

  return (
    <MotionStack
      willChange="transform, opacity"
      align="center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={featureVariants}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w={16}
        h={16}
        rounded="full"
        color={iconColor}
        bg={iconBg}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontFamily="heading">
        {title}
      </Text>
      <Text color={textColor}>{text}</Text>
    </MotionStack>
  );
};

export default Feature;
