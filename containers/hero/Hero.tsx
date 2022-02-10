import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "../../components";
import { MotionStack, MotionText } from "../../motioncomponents";

const Hero = () => {
  const texts = [
    "INNOVADORAS",
    "A MEDIDA",
    "ESCALABLES",
    "INTUITIVAS",
    "RÁPIDAS",
    "RESPONSIVE",
    "OPTIMIZADAS",
    "USABLES",
  ];

  const [textIndex, setTextIndex] = useState(0);

  const [replay, setReplay] = useState(false);

  const [text, setText] = useState("");

  useEffect(() => {
    const initialIndex = Math.floor(Math.random() * (texts.length - 1));
    setTextIndex(initialIndex);
    setText(texts[initialIndex]);

    const initialWait = setTimeout(() => {
      setReplay(true);
    }, 50);
    return () => {
      clearTimeout(initialWait);
    };
  }, []);

  const heroVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };

  const animatedText = { type: "span", text: text };

  const animatedTextVariants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleReplay = async () => {
    await timeout(2500);

    if (mounted.current === false) return;

    setReplay(!replay);

    replayPartTwo();
  };

  const replayPartTwo = async () => {
    await timeout(600);

    if (mounted.current === false) return;

    var newTextIndex = textIndex + 1;
    if (newTextIndex == texts.length) newTextIndex = 0;

    setTextIndex(newTextIndex);
    setText(texts[newTextIndex]);

    setReplay(true);
  };

  return (
    <MotionStack
      willChange={"transform, opacity"}
      mx={"auto"}
      px={4}
      as={Box}
      textAlign={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"92vh"}
      maxW={"3xl"}
      spacing={{ base: 45, md: 15 }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={heroVariants}
    >
      <Heading
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        as="h1"
        lineHeight={"120%"}
      >
        DESARROLLO
        <br />
        PÁGINAS WEBS Y APPS <br />
        <MotionText
          as="span"
          initial="hidden"
          color={useColorModeValue("#03658C", "#6fd4fc")}
          animate={replay ? "visible" : "hidden"}
          variants={animatedTextVariants}
          onAnimationComplete={handleReplay}
        >
          <AnimatedText {...animatedText} />
        </MotionText>
      </Heading>

      <Text color={"gray.500"}>
        Soy un apasionado de la programación, constantemente estoy aprendiendo
        nuevas tecnologías para poder ayudar a las personas a convertir sus
        ideas en webs & apps que atraen mas clientes a sus negocios.
      </Text>
      <Stack
        direction={"column"}
        spacing={5}
        align={"center"}
        alignSelf={"center"}
        position={"inherit"}
      >
        <Button rounded={"full"} px={6}>
          CONTACTA CONMIGO
        </Button>
      </Stack>
    </MotionStack>
  );
};

export default Hero;
