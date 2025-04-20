import { Flex, Stat } from "@chakra-ui/react";
import { useWordCounter } from "@/context/WordCounterContext";
import { useMemo } from "react";

export const TextAnalysis = () => {

  const { text, options } = useWordCounter()

  const totalCharacters = useMemo(() => {
    if (text === '') return 0
    if (options.excludeSpaces) {
      return text.replace(/\s+/g, '').length
    }
    return text.length
  }, [text, options.excludeSpaces])

  const wordCount = useMemo(() => {
    if (text === '') return 0;
    if (options.excludeSpaces) {
      return text.split('').length
    }
    return text.split(' ').length
  }, [text, options.excludeSpaces])

  const sentenceCount = useMemo(() => {
    if (!text) return 0;
    const sentences = text.split(/[.?!]\s+/);
    return sentences.filter(sentence => sentence.trim() !== '').length;
  }, [text]);

  return (
    <Flex w="70%" align="center" gap="10px" mx="auto" mt="1rem">
      <Stat.Root bgColor="purple.300" color="black" p="1rem" borderRadius="8px">
        <Stat.ValueText fontSize="4xl" fontWeight="bold">{totalCharacters}</Stat.ValueText>
        <Stat.Label color="black">Total Characters</Stat.Label>
      </Stat.Root>

      <Stat.Root bgColor="yellow.500" color="black" p="1rem" borderRadius="8px">
        <Stat.ValueText fontSize="4xl" fontWeight="bold">{wordCount}</Stat.ValueText>
        <Stat.Label color="black">Word Count</Stat.Label>
      </Stat.Root>

      <Stat.Root bgColor="orange.500" color="black" p="1rem" borderRadius="8px">
        <Stat.ValueText fontSize="4xl" fontWeight="bold">{sentenceCount}</Stat.ValueText>
        <Stat.Label color="black">Sentence Count</Stat.Label>
      </Stat.Root>
    </Flex>
  );
};
