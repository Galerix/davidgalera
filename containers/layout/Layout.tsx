import React from "react";

import "@fontsource/raleway";
import "@fontsource/inter";
import "@fontsource/gugi";
import "@fontsource/oxanium";

import { Navbar } from "..";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
