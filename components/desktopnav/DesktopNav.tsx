import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";

import React from "react";

import NavItem from "../../interfaces/NavItem";

type Props = {
  navItems: Array<NavItem>;
};

const DesktopNav = ({ navItems }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const linkBorderColor = useColorModeValue("brand.500", "brand.200");

  const colorModeIcon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;

  return (
    <Stack direction={"row"} spacing={4} align="center">
      {navItems.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.href ?? "#"}>
            <Link
              p={2}
              fontSize={"sm"}
              fontFamily={"body"}
              borderBottomColor={linkBorderColor}
              _hover={{
                borderBottomWidth: 3,
              }}
            >
              {navItem.label}
            </Link>
          </NextLink>
        </Box>
      ))}
      <NextLink href="/contacto">
        <Button
          as="a"
          size={"sm"}
          rounded={"3xl"}
          cursor={"pointer"}
          fontSize={"sm"}
          fontFamily={"body"}
          fontWeight={"bold"}
        >
          Contacto
        </Button>
      </NextLink>

      <IconButton
        rounded={"full"}
        size={"sm"}
        onClick={toggleColorMode}
        variant="ghost"
        icon={colorModeIcon}
        aria-label={"Toggle Color Mode"}
      />
    </Stack>
  );
};

export default DesktopNav;
