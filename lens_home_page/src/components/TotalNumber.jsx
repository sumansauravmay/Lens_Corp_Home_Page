import React from "react";
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8, sm: 2 }}
      py={"5"}
      shadow={"xl"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel
        fontSize={30}
        color={"white"}
        fontWeight={"medium"}
        isTruncated
      >
        {title}
      </StatLabel>
      <StatNumber
        color={"white"}
        fontSize={{ lg: "2xl", md: "xl", sm: "md" }}
        fontWeight={"medium"}
      >
        {stat}
      </StatNumber>
    </Stat>
  );
}

function TotalNumber() {
  return (
    <Box
      background={"#272E5C"}
      height={350}
      width={"full"}
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 2, md: 17 }}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        color={"white"}
        fontWeight={"bold"}
      >
        By the numbers
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, sm: 1 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <StatsCard title={"15+"} stat={"Solutions for Global crises"} />
        <StatsCard title={"10+"} stat={"University Collaborations"} />
        <StatsCard title={"25+"} stat={"Employees Worldwide"} />
      </SimpleGrid>
    </Box>
  );
}

export default TotalNumber;
