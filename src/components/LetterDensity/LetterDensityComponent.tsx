import { useMemo } from "react";
import { Flex, Box, Text, Heading, Progress, HStack } from "@chakra-ui/react";
import { TextAnalysis } from "./TextAnalysis";
import { useWordCounter } from "@/context/WordCounterContext";

interface letterDensityObject {
  [key: string]: number;
}

export const LetterDensityComponent = () => {
  const { text } = useWordCounter();

  const letterDensity = useMemo(() => {
    const letterDensityResult: letterDensityObject = {};
    const cleanedText = text
      .toLowerCase()
      .replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]/g, "")
      .replace(/\s+/g, "");

    cleanedText.split("").forEach((letter) => {
      if (!letterDensityResult[letter]) {
        letterDensityResult[letter] = 1;
      } else {
        letterDensityResult[letter]++;
      }
    });

    return letterDensityResult;
  }, [text]);

  const letterDensityArray = Object.entries(letterDensity).map(
    ([letter, count]) => ({
      letter,
      count,
    })
  );

  return (
    <Box as="section" w="100%">
      <TextAnalysis />
      <Flex direction="column" gap="20px">
        <Box mt="2rem" w="70%" mx="auto">
          <Heading mb=".5rem">Letter Density</Heading>
          {letterDensityArray.length > 0 ? (
            letterDensityArray.map((item, index) => (
              <Flex w="100%" key={index} align="center" justifyContent="space-between" my=".8rem">
                <Progress.Root w="100%" min={0} max={100} value={item.count} size="lg" fontSize="lg">
                  <HStack gap="10px">
                    <Progress.Label>{item.letter.toUpperCase()}</Progress.Label>
                    <Progress.Track flex="1">
                      <Progress.Range />
                    </Progress.Track>
                    <Progress.ValueText>{item.count}</Progress.ValueText>
                  </HStack>
                </Progress.Root>
              </Flex>
            ))
          ) : (
            <Text fontSize="sm">
              No characters found. Start typing to see letter density.
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
