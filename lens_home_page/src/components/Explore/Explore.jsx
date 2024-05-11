import React from "react";
import Sliding from "./Sliding";
import { Box, Button, Text } from "@chakra-ui/react";

const Explore = () => {
  return (
    <Box style={{ background: "#FCFBF7", height: "500px" }}>
      <Button
        colorScheme="black"
        variant="outline"
        ml={{ lg: 700, md: 350, sm: 180, base: 130 }}
        mt={10}
        _hover={{
          padding: "30px",
          color: "white",
          background: "black",
        }}
      >
        Explore More
      </Button>

      <Text
        mt={10}
        fontSize={{ lg: 32, md: 24, sm: 20, base: 16 }}
        ml={{ lg: 550, md: 250, sm: 130, base: 100 }}
      >
        We Work With Amazing Clients
      </Text>
      <br />
      <Sliding />
    </Box>
  );
};

export default Explore;
