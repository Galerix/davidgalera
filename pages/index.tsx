import type { NextPage } from "next";
import Head from "next/head";
import { Budget, Features, Hero, Proyects, Testimonials } from "../containers";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Desarrollador Web y Móvil Freelance - David Galera</title>
        <meta
          name="description"
          content="Programador de Web & Mobile Apps en Pamplona y para toda España. Posicionamiento SEO. "
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Features />
      <Testimonials />
      <Proyects isCustomPage={false} />
      <Budget />
    </div>
  );
};

export default Home;
