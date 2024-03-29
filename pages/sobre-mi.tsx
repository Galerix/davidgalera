import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const SobreMi = () => {
  return (
    <div>
      <Head>
        <title>Sobre mí - David Galera</title>
        <meta
          name="description"
          content="Pequeña descripción sobre los inicios en mi carrera como Autónomo."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container
        maxW={"4xl"}
        py={{ base: "5vh", sm: "15vh", md: "20vh" }}
        px={"5vw"}
        minH={"90vh"}
      >
        <Stack direction={{ base: "column", lg: "row" }} spacing={"5vw"}>
          <Stack direction={"column"} spacing={5}>
            <Heading textAlign={"center"}>Desarrollador Web y Móvil</Heading>
            <Text textAlign={"justify"}>
              Me llamo David Galera Rodríguez. Nací en 1999 y desde siempre me
              llamó la atención la informática. Con 12 años ya hacía
              animaciones, páginas web simples y pequeños videojuegos. Poco
              después del bachiller decidí estudiar un Grado Superior de
              Desarrollo de Aplicaciones Multiplataforma y me fue muy bien, ya
              que descubrí que la programación era algo a lo que iba a dedicar
              mi vida. En 2021, después de terminar unas prácticas en CISTEC
              Technology me surgió la oportunidad de realizar una página web
              como encargo y decidí lanzarme de lleno al mundo freelance. Desde
              entonces estoy formándome constantemente en nuevas tecnologías,
              buscando nuevos proyectos y realizando los míos propios. Hay un
              gran camino por delante a recorrer con motivación e iniciativa.
              Estamos en un campo en el que hay innovaciones continuamente. Mi
              trabajo es construir ventanas al mundo a todos mis clientes.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default SobreMi;
