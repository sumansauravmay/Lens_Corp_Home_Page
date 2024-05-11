import "../App.css";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const Testimonial2 = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack p={8} rounded={"xl"} align={"center"} pos={"relative"}>
      {children}
    </Stack>
  );
};

const TestimonialContent2 = ({ children }) => {
  return (
    <Stack
      p={8}
      rounded={"xl"}
      width={900}
      height={300}
      bg="white"
      ml={-200}
      _hover={{
        bg: "#FCE5E0",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={{ lg: "23.24px", md: "20px", sm: "16px" }}>
      {children}
    </Heading>
  );
};

const TestimonialHeading2 = ({ children }) => {
  return (
    <Heading
      as={"h5"}
      fontSize={{ lg: "23.24px", md: "20px", sm: "16px" }}
      ml={-100}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("#8A8A8A")}
      fontSize={{ lg: "18px", md: "15px", sm: "12px" }}
      height={{ lg: "250px", md: "250px", sm: "280px" }}
      width={{ lg: "350px", md: "250px", sm: "250px" }}
      mt="50px"
    >
      {children}
    </Text>
  );
};

const TestimonialText2 = ({ children }) => {
  return (
    <Text
      textAlign={"initial"}
      color={useColorModeValue("#8A8A8A")}
      fontSize={"18px"}
      height={"150px"}
      width={"650px"}
      borderRadius={10}
      bg={useColorModeValue("#FFECEB")}
      mt="20px"
      ml={-100}
      _hover={{
        bg: "#FFF5F5",
      }}
    >
      {children}
    </Text>
  );
};

export default function Blogs() {
  return (
    <div class="intro">
      <h1 class="flex justify-center mt-20 mb-10 underline decoration-blue-400 text-3xl">
        OUR BLOGS
      </h1>
      <Box>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Text fontSize={{ base: 20, md: 32, lg: 52 }}>
              Inhouse Mindscape
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
            justifyContent={"center"}
          >
            <Testimonial>
              <TestimonialContent>
                <Container
                  bg={useColorModeValue("white")}
                  _hover={{
                    bg: "#FFFBF4",
                  }}
                >
                  <TestimonialHeading>
                    <Text class="text-black mt-2">Generative AI</Text>
                  </TestimonialHeading>
                  <Container
                    bg={useColorModeValue("#FFF6CD")}
                    mb="20px"
                    borderRadius={10}
                  >
                    <TestimonialText>
                      In today's data-driven marketing world, keeping up with
                      content creation demands can be a challenge. Read our
                      latest blog to explore the power of Generative AI and its
                      potential to reshape the marketing landscape....
                    </TestimonialText>
                  </Container>
                </Container>
              </TestimonialContent>
            </Testimonial>

            <Testimonial>
              <TestimonialContent>
                <Container
                  bg={useColorModeValue("white")}
                  _hover={{
                    bg: "#D2EFF7",
                  }}
                >
                  <TestimonialHeading>
                    <Text class="text-black mt-2">
                      The Evolution of AI in Games
                    </Text>
                  </TestimonialHeading>
                  <Container
                    bg={useColorModeValue("#DEF0FF")}
                    mb="20px"
                    borderRadius={10}
                  >
                    <TestimonialText>
                      The integration of artificial intelligence (AI) within the
                      gaming industry has been a remarkable journey, marked by
                      continual innovation. Read our latest blog to dive deep
                      into the fascinating history of AI in games and discover
                      the evolution that continues to shape the future of
                      play!...
                    </TestimonialText>
                  </Container>
                </Container>
              </TestimonialContent>
            </Testimonial>
          </Stack>

          <Container width={"850px"}>
            <Testimonial2>
              <TestimonialContent2>
                <Container
                  //   bg={useColorModeValue("white")}
                  width={"850px"}
                >
                  <TestimonialHeading2>
                    <Text class="text-black mt-2 absolue left-2">
                      Unmasking the Misconceptions of Artificial Intelligence in
                      the Workplace
                    </Text>
                  </TestimonialHeading2>
                  <TestimonialText2>
                    Will something like Siri or Alexa enhance your business? We
                    can deliver text-to-speech, text-to-image, speech-to-text,
                    speech-to-image, speech-to-image, image-to-text and
                    image-to-speech solutions for maximum convenience.
                  </TestimonialText2>
                </Container>
              </TestimonialContent2>
            </Testimonial2>
          </Container>
        </Container>
      </Box>
    </div>
  );
}
