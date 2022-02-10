import type { NextPage } from "next";
import {
  BudgetForm,
  Features,
  Hero,
  Proyects,
  Testimonials,
} from "../containers";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Proyects />
      <BudgetForm />
    </div>
  );
};

export default Home;
