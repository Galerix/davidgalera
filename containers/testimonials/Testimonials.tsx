import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { TestimonialCard } from "../../components";
import { MotionStack } from "../../motioncomponents";

const testimonials = [
  {
    name: "Rodrigo Angulo",
    role: "Graduado en Nutrición Humana y Dietética",
    content:
      "“ El trabajo de David Galera para Esportrium Nutrición ha sido extraordinario. El encargo consistía en una página web de información del centro junto con la posibilidad de reservar citas a través de ella. Como puntos positivos destaco la atención recibida por David a lo largo del proceso, siempre disponible para cualquier modificación que requiriese la web; además de la rapidez de desarrollo del proyecto y la funcionalidad y diseño final del mismo. Por el contrario, no tengo en mente ningún punto negativo a destacar en este proyecto, ya que considero que tanto el trabajo como su desarrollo han sido excelentes. Estoy muy contento de haber podido colaborar con David y decir que a día de hoy es mi primera opción para cualquier proyecto en este terreno. ”",
    avatar: "/images/rodrigoangulo.jpeg",
  },
];

export default function Testimonials() {
  return (
    <MotionStack
      as={Box}
      margin={"auto"}
      mx={"auto"}
      px={4}
      textAlign={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
      py={"15vh"}
      spacing={{ base: 16 }}
    >
      <Heading>TESTIMONIOS</Heading>

      <SimpleGrid columns={{ base: 1 }} spacing={"20"} mx={"auto"}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard
            {...cardInfo}
            index={index}
            key={cardInfo.name}
            delay={0}
          />
        ))}
      </SimpleGrid>
    </MotionStack>
  );
}
