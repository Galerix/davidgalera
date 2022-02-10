import { Box, Link } from "@chakra-ui/react";

import NextLink from "next/link";
import React from "react";

import NavItem from "../../interfaces/NavItem";

type Props = {
  navItem: NavItem;
  onClose: () => void;
};

const MobileNavItem = ({ navItem, onClose }: Props) => {
  const { label, href } = navItem;

  return (
    <Box key={label}>
      <NextLink href={href ?? "#"}>
        <Link
          onClick={onClose}
          p={2}
          fontSize={"sm"}
          fontFamily={"body"}
          fontWeight={"bold"}
          _hover={{ textDecoration: "none" }}
        >
          {label}
        </Link>
      </NextLink>
    </Box>
  );
};

export default MobileNavItem;
