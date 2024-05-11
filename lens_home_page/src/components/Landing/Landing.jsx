import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import "../../App.css";

export default function Landing() {
  return (
    <Container className="intro" maxW={"full"}>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "#BDBDBD",
                  zIndex: -1,
                }}
              >
                We are at the forefront of AI
              </Text>
            </Heading>
            <Flex>
              <Text color={"#000000"}>
                From Conserving Wildlife to Automatically Generating
                Caricatures–
              </Text>
              <Text fontWeight={700}>We Do It All</Text>
            </Flex>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"10px"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"#000000"}
                _hover={{ bg: "white", color: "#000000", padding: "26px" }}
              >
                Get started
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          ></Flex>
        </Stack>
      </Container>
    </Container>
  );
}
