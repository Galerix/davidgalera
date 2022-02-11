import type { NextPage } from "next";
import { Budget, Features, Hero, Proyects, Testimonials } from "../containers";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Proyects originalBackground={false} />
      <Budget />
    </div>
  );
};

export default Home;
