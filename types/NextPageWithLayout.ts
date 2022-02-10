import { NextPage } from "next";
import { Layout } from "../containers";

type NextPageWithLayout = NextPage & {
  layout: typeof Layout;
};

export default NextPageWithLayout;
