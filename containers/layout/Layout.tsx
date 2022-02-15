import React from "react";

import "@fontsource/raleway";
import "@fontsource/inter";
import "@fontsource/gugi";
import "@fontsource/oxanium";

import { Footer, Navbar } from "..";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
