import Head from "next/head";
import React from "react";
import { Budget } from "../containers";

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Contacto - David Galera</title>
        <meta
          name="description"
          content="Formulario para solicitar presupuestos en Proyectos Web y Aplicaciones Móviles"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Budget />
    </div>
  );
};

export default Contacto;
