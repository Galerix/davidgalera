import type { NextPage } from "next";
import { Budget, Features, Hero, Proyects, Testimonials } from "../containers";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Proyects isCustomPage={false} />
      <Budget isCustomPage={false} />
    </div>
  );
};

export default Home;
