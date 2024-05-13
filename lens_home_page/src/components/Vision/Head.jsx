import React from "react";
import "./vision.css";
import "../../App.css";
import { Stack, Text } from "@chakra-ui/react";

const Head = () => {
  return (
    <Stack direction={"column"}>
      <h3 class="head">OUR VISION</h3>
      <Text
        ml={{ lg: 500, sm: 100, md: 200, base: 50 }}
        fontSize={{ lg: "58px", sm: "40px", md: "58px", base: "40px" }}
        mb="50px"
      >
        AI for Social Good
      </Text>
      <Text
        fontSize={20}
        width={"50%"}
        textAlign={"center"}
        mb={20}
        ml={{ lg: 400, sm: 100, md: 200, base: 50 }}
      >
        Explainable AI (XAI) is an emerging subject of machine learning research
        that refers to strategies that try to provide transparency to typically
        opaque AI models and their predictions.
      </Text>
    </Stack>
  );
};

export default Head;
