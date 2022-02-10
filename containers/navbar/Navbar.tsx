import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Heading,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";

import { DesktopNav, MobileNav } from "../../components";

import NavItem from "../../interfaces/NavItem";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      width={"100%"}
      position={"sticky"}
      top={0}
      zIndex={3}
      bgGradient={useColorModeValue(
        "linear(to-b, gray.100, rgba(247, 250, 252, 0))",
        "linear(to-b, brand.900, rgba(1, 20, 28, 0))"
      )}
      backdropFilter="auto"
      backdropBlur="8px"
      minH={"8vh"}
      p={3}
    >
      <Flex align={"center"} px={{ base: 0, md: "5vw" }}>
        <Flex flex={{ base: 1 }} align="center" justify={"space-between"}>
          <LinkBox
            as={Stack}
            cursor={"pointer"}
            direction={"row"}
            spacing={4}
            align="center"
          >
            <Image
              bgColor={useColorModeValue("brand.500", "brand.200")}
              borderRadius="full"
              boxSize={{ base: "30px", sm: "40px", md: "50px" }}
              src="/images/photo.png"
              alt="David Galera"
            />
            <Flex direction={"column"}>
              <NextLink href="/">
                <Box onClick={onClose}>
                  <Heading
                    fontSize={{ base: 17, sm: 19 }}
                    fontFamily="title"
                    fontWeight={"semibold"}
                  >
                    DAVID GALERA
                  </Heading>
                  <Heading
                    fontSize={{ base: 11.1, sm: 12.4 }}
                    fontWeight={"md"}
                  >
                    Desarrollador Freelance
                  </Heading>
                </Box>
              </NextLink>
            </Flex>
          </LinkBox>

          <Flex display={{ base: "none", lg: "flex" }} ml={10}>
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>
        <Stack
          direction={"row"}
          spacing={2}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            rounded={"full"}
            onClick={toggleColorMode}
            size="sm"
            variant="ghost"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label={"Toggle Color Mode"}
          />
          <IconButton
            onClick={onToggle}
            size="sm"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} onClose={onClose} />
      </Collapse>
    </Box>
  );
};

const navItems: Array<NavItem> = [
  {
    label: "Sobre Mí",
    href: "/sobre-mi",
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
];

export default Navbar;
