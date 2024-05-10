import {
    Box,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Flex,
  } from '@chakra-ui/react';
  import { FaCheck } from "react-icons/fa";
  
  const options = [
    { id: 1, desc: 'State-of-the-art solutions' },
    { id: 2, desc: 'Fast & Efficient' },
    { id: 3, desc: 'No extra computation fee' },
    { id: 4, desc: 'No licensing fee' }
  ];

  const option = [
    { id: 5, desc: 'Lifetime support & upgrades' },
    { id: 6, desc: 'Plug-and-Play' },
    { id: 7, desc: '24x7 Progress Monitoring' },
    { id: 8, desc: 'Incremental Updates' },
  ];



  const PackageTier = ({
    title,
    options,
    typePlan,
  }) => {
  
    return (
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
        <Heading size={'md'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheck} color="black" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Heading size={'xl'}>{typePlan}</Heading>
      </Stack>
    );
  };
  const Whylens = () => {
    return (
      <Box py={6} px={5} min={'100vh'}
      background="rgb(252,251,247)"
      >
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}>
            <Stack
              width={{
                base: '100%',
                md: '40%',
              }}
              textAlign={'center'}>

<h1 class="flex justify-center mt-20 mb-10 underline decoration-blue-400 text-3xl">
WHY CHOOSE LENS
      </h1>

              <h1 class="flex justify-center mt-20 mb-10 text-5xl text-black">
              AI-driven solutions backed by science
      </h1>
      <p class="text-gray-600">Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</p>
            </Stack>
           
          </Stack>
          <Divider />
          <Flex justifyContent={"center"}>
          <PackageTier options={options} />
          <PackageTier options={option} />
          </Flex>
         
        </Stack>
      </Box>
    );
  };
  
  export default Whylens;
  