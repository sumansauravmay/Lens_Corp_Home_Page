import {
  Container,
  Stack,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import "../../App.css";

export default function Landing() {
  return (
    <Container className="intro" maxW={"full"}
    height={800}
    >
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text
              lineHeight={1.1}
              // fontWeight={600}
              // fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              marginLeft={{lg:"140px", md:"100px", sm:"50px", base:"50px"}}
            >
              <Text
                // as={"span"}
                position={"relative"}
                fontSize="64px"
                fontFamily="Raleway, sans-serif"
              >
                We are at the forefront of AI
              </Text>
            </Text>

            <Stack>
              <Text color={"#000000"}
              width={"70%"}
              fontSize="19.2px"
              marginLeft={{lg:"140px", md:"100px", sm:"50px", base:"50px"}}
              fontFamily="Poppins, sans-serif"
              >
                From Conserving Wildlife to Automatically Generating
                Caricatures– <span style={{fontWeight:"bold"}}>We Do It All</span>
              </Text>
              {/* <Text fontWeight={700}>We Do It All</Text> */}
            </Stack>
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
                marginLeft={{lg:"140px", md:"100px", sm:"50px", base:"50px"}}
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
