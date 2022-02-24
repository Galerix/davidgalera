import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProyectCard } from "../../components";

import esportriumImage from "../../public/images/esportriumnutricion.png";

const proyects = [
  {
    title: "Esportrium Nutrición",
    description:
      "Una página web de información sobre el centro con un sistema de autentificación con roles de usuario, los profesionales pueden generar horarios automaticamente y los clientes pueden solicitar reservas dentro de las horas seleccionadas.",
    image: esportriumImage,
    href: "https://esportriumnutricion.es/",
  },
];

type ProyectsProps = {
  isCustomPage: boolean;
};

const Proyects = ({ isCustomPage }: ProyectsProps) => {
  const background = isCustomPage
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
      py={{ base: "5vh", sm: "10vh", md: isCustomPage ? "5vh" : "15vh" }}
      spacing={{ base: 5, sm: 10, md: 20 }}
      bg={background}
    >
      <Heading as={"h3"}>PROYECTOS</Heading>

      <SimpleGrid columns={{ base: 1 }} spacing={"20"} mx={"auto"}>
        {proyects.map((cardInfo, index) => (
          <ProyectCard
            {...cardInfo}
            index={index}
            key={cardInfo.title}
            delay={0}
            originalBackground={isCustomPage}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Proyects;
