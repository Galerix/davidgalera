import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";

import { MobileNavItem } from "..";
import NavItem from "../../interfaces/NavItem";

type Props = {
  navItems: Array<NavItem>;
  onClose: () => void;
};

const MobileNav = ({ navItems, onClose }: Props) => {
  return (
    <Stack
      spacing={4}
      p={4}
      display={{ lg: "none" }}
      textAlign={"center"}
      willChange={"transform, opacity"}
    >
      {navItems.map((navItem: NavItem) => (
        <MobileNavItem
          key={navItem.label}
          navItem={navItem}
          onClose={onClose}
        />
      ))}
      <NextLink href="/contacto">
        <Button
          onClick={onClose}
          as="a"
          size={"sm"}
          rounded={"3xl"}
          fontSize={"sm"}
          fontFamily={"body"}
          fontWeight={"bold"}
        >
          Contacto
        </Button>
      </NextLink>
    </Stack>
  );
};

export default MobileNav;
