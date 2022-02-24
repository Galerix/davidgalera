import Head from "next/head";
import React from "react";
import { Proyects } from "../containers";

const Proyectos = () => {
  return (
    <div>
      <Head>
        <title>Proyectos - David Galera</title>
        <meta
          name="description"
          content="Listado de proyectos realizados por David Galera, Desarrollador Web Freelance y Programador de Apps."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Proyects isCustomPage />
    </div>
  );
};

export default Proyectos;
