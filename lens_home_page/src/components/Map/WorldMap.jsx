
import {
    Button,
    Center, FormControl, Input,
    Flex,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";

  
  export default function WorldMap() {
    return (
      <>
        <Center py={6}>
          <Stack
            borderRadius="lg"
            w={{ sm: "100%", md: "540px", lg: "85%" }}
            h={{ sm: "1000px", md: "800px", lg: "500px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            padding={4}
          >
            <Stack
              flexDirection="column"
              p={1}
              pt={2}
            >
              <Text
        mt={10}
        fontSize={{ lg: 32, md: 24, sm: 20, base: 16 }}
      >
        Frequently Asked Questions
      </Text>
              <Text
                m="20px"
                w="70%"
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
               Send your enquiry now!
              </Text>

  <Flex
      minH={'10vh'}
      >
      <Flex
        spacing={4}
        w={'full'}
        maxW={'md'}
        rounded={'2xl'}
        p={6}
        my={12}>
        <FormControl id="email">
          <Input
          width={{lg:'365px', md:"365px", sm:"320px"}}
        
          position={'absolute'}
          fontSize={'sm'}
          bg={'#EDEDED'}
            placeholder="Enter email address"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
         
            bg={'#272E5C'}
            color={'white'}
            position={'relative'}
            left={{lg:10, md:40, sm:0, base:"0"}}
            
            >
            Request Reset
          </Button>
        </Stack>
      </Flex>
    </Flex>

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
                  "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
                }
              />
            </Flex>
          </Stack>
        </Center>
      </>
    );
  }
  

