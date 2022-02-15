import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProyectCard } from "../../components";

const proyects = [
  {
    title: "Esportrium Nutrición",
    description:
      "Una página web de información sobre el centro con un sistema de autentificación con roles de usuario, los profesionales pueden generar horarios automaticamente y los clientes pueden solicitar reservas dentro de las horas seleccionadas.",
    image: "/images/esportriumnutricion.png",
    href: "https://esportriumnutricion.es/",
  },
];

type ProyectsProps = {
  originalBackground: boolean;
};

const Proyects = ({ originalBackground }: ProyectsProps) => {
  const background = originalBackground
    ? "inherit"
    : useColorModeValue("gray.100", "brand.800");

  return (
    <Stack
      as={Box}
      margin={"auto"}
      mx={"auto"}
      px={4}
      alignItems={"center"}
      minH={"100vh"}
      overflow={"hidden"}
      py={originalBackground ? "5vh" : "15vh"}
      spacing={{ base: 16 }}
      bg={background}
    >
      <Heading>PROYECTOS</Heading>

      <SimpleGrid columns={{ base: 1 }} spacing={"20"} mx={"auto"}>
        {proyects.map((cardInfo, index) => (
          <ProyectCard
            {...cardInfo}
            index={index}
            key={cardInfo.title}
            delay={0}
            originalBackground={originalBackground}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Proyects;
