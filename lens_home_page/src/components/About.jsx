import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <h1 class="flex justify-center mt-20 mb-10 underline decoration-blue-400 text-7xl">
        About Us
      </h1>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px", lg: "85%" }}
          h={{ sm: "1000px", md: "800px", lg: "500px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("#E2F2FF")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Stack
            flex={1}
            flexDirection="column"
            // justifyContent="center"
            // alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"5xl"} fontFamily={"body"} m="20px">
              Welcome To LENS
            </Heading>
            <Text
              //   textAlign={'center'}
              m="20px"
              w="70%"
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              We put our hearts, souls and sweat into designing and developing
              custom AI - powered solutions for your business so you don't have
              to.
            </Text>

            <Stack
              width={"100%"}
              mt={"1rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                padding="20px"
                bg={"none"}
                color={"black"}
                ml="30px"
                p="20px"
                border="1px"
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "black",
                  color: "white",
                  padding: "30px",
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
          <Flex flex={1} bg="white">
            <Image
              objectFit="cover"
              boxSize="90%"
              borderRadius={10}
              w="80%"
              ml="60px"
              mt="20px"
              src={
                "https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
              }
            />
          </Flex>
        </Stack>
      </Center>
    </>
  );
}
