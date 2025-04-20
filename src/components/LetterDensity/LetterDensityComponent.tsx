import { Flex, Box, Text, Heading } from "@chakra-ui/react"
import { TextAnalysis } from "./TextAnalysis"

export const LetterDensityComponent = () => {
  return (
    <Box
      as="section"
      w="100%"
    >
      <TextAnalysis />
      <Flex
        direction="column"
        gap="20px"
      >
        <Box 
          mt="2rem"
          w="70%"
          mx="auto"
        >
          <Heading mb=".5rem">Letter Density</Heading>
          <Text fontSize="sm">No characters found. Start typing to see letter density.</Text>
        </Box>
      </Flex>
    </Box>
  )
}