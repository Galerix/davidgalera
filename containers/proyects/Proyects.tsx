import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { ProyectCard } from "../../components";
import { MotionStack } from "../../motioncomponents";

const proyects = [
  {
    title: "Esportrium Nutrición",
    description:
      "Una página web de información sobre el centro con un sistema de autentificación con roles de usuario, los profesionales pueden generar horarios automaticamente y los clientes pueden solicitar reservas dentro de las horas seleccionadas.",
    image: "/images/esportriumnutricion.png",
    href: "https://esportriumnutricion.es/",
  },
];

const Proyects = () => {
  return (
    <MotionStack
      as={Box}
      margin={"auto"}
      mx={"auto"}
      px={4}
      alignItems={"center"}
      minH={"100vh"}
      py={"15vh"}
      spacing={{ base: 16 }}
      bg={useColorModeValue("gray.100", "brand.800")}
    >
      <Heading>PROYECTOS</Heading>

      <SimpleGrid columns={{ base: 1 }} spacing={"20"} mx={"auto"}>
        {proyects.map((cardInfo, index) => (
          <ProyectCard
            {...cardInfo}
            index={index}
            key={cardInfo.title}
            delay={0}
          />
        ))}
      </SimpleGrid>
    </MotionStack>
  );
};

export default Proyects;
