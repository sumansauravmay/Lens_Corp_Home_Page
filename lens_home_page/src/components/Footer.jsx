import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"550"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={useColorModeValue("white")} color={useColorModeValue("#000000")} mt="100px">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box></Box>
            <Avatar src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75" />
            <Text fontSize={"sm"}>Tomorrow's Vision, Today!</Text>
            <Stack direction={"row"} spacing={3}>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/"}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/"}
              >
                <FaInstagram />
              </SocialButton>

              <SocialButton
                label={"LinkedIn"}
                href={"https://www.linkedin.com/"}
              >
                <FaLinkedin />
              </SocialButton>

              <SocialButton label={"Discord"} href={"https://discord.com/"}>
                <FaDiscord />
              </SocialButton>

              <SocialButton label={"Twitter"} href={"https://twitter.com/"}>
                <FaXTwitter />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>SITEMAP</ListHeader>
            <Link href={"#"}>MakeMyWeb.</Link>
            <Link href={"#"}>Services</Link>
            <Link href={"#"}>Products</Link>
            <Link href={"#"}>Blogs</Link>
            <Link href={"#"}>Life at LENS</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>CONNECT</ListHeader>
            <Text>+1-517-9300-792</Text>
            <Text>+91-9990-736-796</Text>
            <Text>solutions@lenscorp.ai</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
