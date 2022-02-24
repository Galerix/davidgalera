import {
  Box,
  chakra,
  Container,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import NextLink from "next/link";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <IconButton
      aria-label={label}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={"_blank"}
      rel="noreferrer noopener"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {children}
    </IconButton>
  );
};

export default function Footer() {
  const linkBorderColor = useColorModeValue("brand.500", "brand.200");

  return (
    <Box bg={useColorModeValue("gray.100", "brand.800")}>
      <Box borderTopWidth={1} borderStyle={"solid"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 David Galera</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Github"} href={"https://github.com/Galerix"}>
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"LinkedIn"}
              href={
                "https://www.linkedin.com/in/david-galera-rodriguez-47a65b1b6/"
              }
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/_dgalera/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
