import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "../App.css";

export default function EndPage() {
  return (
    <Box
      bg={useColorModeValue("#272E5C")}
      color={useColorModeValue("white")}
      height={100}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>2023 LENS, Inc. All rights reserved.</Text>
          <Stack direction={"row"} spacing={6}>
            <Text>Code of conduct</Text>
            <Text>Sustainability Goals</Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
