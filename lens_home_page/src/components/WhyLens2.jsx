
import "../App.css";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Avatar
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
      height={"250px"}
      // width={"280px"}
      mt="50px"
      width={{lg:"280px", md:"250px", sm:"200px", base:"200px"}}
    >
      {children}
    </Text>
  );
};

export default function WhyLens2() {
  return (
    <div class="intro">
      <Box>
        <Container maxW={"5xl"} py={16} as={Stack} spacing={12}>
          <Stack
            direction={{ base: "column", md: "coloum", lg:"row" }}
            spacing={{ base: 2, md: 4, lg: 2 }}
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
                    <Text class="text-black text-3xl mt-2">Exclusive Rights</Text>
                  </Flex>
                </TestimonialHeading>

                
                <Avatar className="animationImg1"
                 size='2xl'
                mt="20px" ml="50px"
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75"/>
              

                <TestimonialText>
                Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.
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
                    <Text class="text-black text-3xl mt-2">Research Driven</Text>
                  </Flex>
                </TestimonialHeading>

                <Avatar className="animationImg2"
                 size='2xl'
                mt="20px" ml="50px"
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75"/>

                <TestimonialText>
                We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.
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
                    <Text class="text-black text-2xl mt-2" 
                    >Plug-and-Play</Text>
                  </Flex>
                </TestimonialHeading>

                <Avatar className="animationImg3"
                size='2xl'
                mt="20px" ml="50px"
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75"/>

                <TestimonialText>
                We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.
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
                    <Text class="text-black text-2xl mt-2" 
                    >Lifetime Support</Text>
                  </Flex>
                </TestimonialHeading>
                
                <Avatar className="animationImg4"
                size='2xl'
                mt="20px" ml="50px"
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75"/>

                <TestimonialText>
                Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.
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
