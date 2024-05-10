import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("#FFFFFF")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <Stack>
            <Avatar
              name="logo"
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
            />
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={15}>
              <Box mt="5px">MakeMyWeb.</Box>
              <Box mt="5px">Home</Box>
              <Box mt="5px">Company</Box>
              <Box mt="5px">Blogs</Box>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
