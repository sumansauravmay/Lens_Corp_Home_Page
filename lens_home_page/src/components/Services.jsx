
import "../App.css";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box
  >{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}
    mt="50px"
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
      fontSize={"18px"}
      height={{lg:"250px"}}
      width={{lg:"350px", md:"300px", sm:"300px", base:"250px"}}
      mt="50px"
    >
      {children}
    </Text>
  );
};

export default function Services() {
  return (
    <div class="intro">
      <h1 class="flex justify-center mt-20 mb-10 underline decoration-blue-400 text-7xl">
        SERVICES
      </h1>
      <Box>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Text 
            fontSize={{ base: 20, md: 32, lg: 52 }}
            >We provide Artificial Intelligence Services</Text>
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
    bg: "#DDF4EC",
    border:"1px solid green"
  }}
>
                <TestimonialHeading>
                  <Flex width={"full"}>
                    <Text class="text-gray-400 text-5xl">0</Text>
                    <Text class="text-gray-400 text-5xl">1</Text>
                    <Text class="text-green-500 text-3xl mt-2">Biometrics</Text>
                  </Flex>
                </TestimonialHeading>
                <TestimonialText>
                  Academia-backed & In-house researched State-of-the-Art Face,
                  Fingerprint, and Iris Recognition SDKs. Enable real-time
                  automated Biometric applications on edge devices even without
                  an active internet connection.
                </TestimonialText>
</Container>

              </TestimonialContent>
            </Testimonial>
           
           

            <Testimonial>
              <TestimonialContent>
                <Container
                  bg={useColorModeValue("white")}
                  _hover={{
                      bg: "#D2EFF7",
                      border:"1px solid blue"
                    }}
                >

                <TestimonialHeading>
                  <Flex width={"full"}>
                    <Text class="text-gray-400 text-5xl">0</Text>
                    <Text class="text-gray-400 text-5xl">2</Text>
                    <Text class="text-blue-500 text-3xl mt-2">Image Analysis</Text>
                  </Flex>
                </TestimonialHeading>
                <TestimonialText>
                  Outsource the overly complex image analysis work to our
                  intelligent machines that adaptively learn, so you can focus
                  on making the best decisions for your business.
                </TestimonialText>
                </Container>
              </TestimonialContent>
            </Testimonial>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row", sm:"column" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
            justifyContent={"center"}
          >
            <Testimonial>
              <TestimonialContent>
                <Container 
                  bg={useColorModeValue("white")}
                  _hover={{
                      bg: "#FCE5E0",
                      border:"1px solid red"
                    }}
                >

                <TestimonialHeading>
                  <Flex width={"full"}>
                    <Text class="text-gray-400 text-5xl">0</Text>
                    <Text class="text-gray-400 text-5xl">3</Text>
                    <Text class="text-red-600 text-2xl mt-2 absolue left-2">Cross-Media Translation</Text>
                  </Flex>
                </TestimonialHeading>
                <TestimonialText>
                  Will something like Siri or Alexa enhance your business? We
                  can deliver text-to-speech, text-to-image, speech-to-text,
                  speech-to-image, speech-to-image, image-to-text and
                  image-to-speech solutions for maximum convenience.
                </TestimonialText>
                </Container>
              </TestimonialContent>
            </Testimonial>


            <Testimonial>
              <TestimonialContent>
<Container 
  bg={useColorModeValue("white")}
  _hover={{
      bg: "#FBF4E6",
      border:"1px solid rgb(255,159,49)"
    }}
>
                <TestimonialHeading>
                  <Flex width={"full"}>
                    <Text class="text-gray-400 text-5xl">0</Text>
                    <Text class="text-gray-400 text-5xl">4</Text>
                    <Text class="text-red-400 text-2xl mt-2" 
                    >3D Modelling and Design.</Text>
                  </Flex>
                </TestimonialHeading>
                <TestimonialText>
                We offer services for automated generation of 3D assets with
                  realistic shapes and textures. We animate the 3D models with
                  voice and videos with an aim to retarget voice and/or
                  expressions with pose from a single Image/video.
                </TestimonialText>
</Container>

              </TestimonialContent>
            </Testimonial>



           
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
