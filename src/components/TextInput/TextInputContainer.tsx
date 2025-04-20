import { Heading, Flex } from "@chakra-ui/react";
import { TextAreaComponent } from "./TextAreaComponent";

export const TextInputContainer = () => {
  return (
    <Flex
      as="section"
      w="100%"
      mt="3rem"
      textAlign="center"
      flexDir="column"
      gap=".8rem"
    >
      <Heading
        as="h1"
        fontSize="2.8em"
        fontWeight="bold"
        w="40%"
        lineHeight="1.2"
        mx="auto"
      >
        Analyze your text in real-time.
      </Heading>
      <TextAreaComponent />
    </Flex>
  );
};
