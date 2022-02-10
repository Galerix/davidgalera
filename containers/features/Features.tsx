import {
  Box,
  SimpleGrid,
  Icon,
  Stack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaCogs, FaDesktop, FaMobileAlt } from "react-icons/fa";

import { Feature } from "../../components";

const Features = () => {
  return (
    <Stack
      as={Box}
      bgColor={useColorModeValue("gray.100", "brand.800")}
      spacing={{ base: 16, md: 20 }}
      textAlign={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
      py={"10vh"}
      px={"5vw"}
    >
      <Heading>MIS SERVICIOS</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FaDesktop} w={10} h={10} />}
          title={"Web Apps & Sitios Corporativos"}
          text={
            "La presencia online cada vez es mas importante, hoy en día todo el mundo utiliza internet. Tener una buena página web ayuda a aumentar las ventas de tu negocio, a mejorar tu marca y a demostrar profesionalidad."
          }
          delay={0}
        />
        <Feature
          icon={<Icon as={FaMobileAlt} w={10} h={10} />}
          title={"Apps Móviles Multiplataforma"}
          text={
            "Las apps móviles son faciles de utilizar, sencillas y rapidas, con ellas ofreces un nuevo espacio a tu marca en el que puedes aumentar tu visibilidad, ofrecer nuevas funcionalidades y conseguir una mayor fidelización."
          }
          delay={0.3}
        />
        <Feature
          icon={<Icon as={FaCogs} w={10} h={10} />}
          title={"SEO & Mantenimiento Web"}
          text={
            "Para que una página web consiga tráfico orgánico de alta calidad es necesario que este bien estructurada y optimizada, que se mantenga actualizada y desarrollar una buena estrategia de posicionamiento en buscadores."
          }
          delay={0.6}
        />
      </SimpleGrid>
    </Stack>
  );
};

export default Features;