import { Flex, Textarea, Box, Text, Checkbox } from "@chakra-ui/react"
import { useWordCounter } from "@/context/WordCounterContext";
import { calculateReadTime } from "@/utils/calculateReadTime";
import { CharacterLimitComponent } from "./CharacterLimitComponent";

export const TextAreaComponent = () => {
  const { text, setText, handleSetExcludeSpaces, options } = useWordCounter();

  return (
    <Flex
      as="section"
      flexDir="column"
      w="70%"
      mx="auto"
      gap=".5rem"
      position="relative"
    >
      <Text fontSize="xs" position="absolute" bottom="45px" right="8px" zIndex="10" display={options.characterLimit === Infinity ? "none" : "block"}>
        {text.length}/{options.characterLimit}
      </Text>
      <Textarea 
        minH="90px"
        maxH="200px"
        placeholder="Start typing here... (or paste your text)" 
        variant="subtle"
        bgColor={{ base:'#c4c4c4', _dark:"#21212D" }}
        size="lg"
        autoresize
        w="100%"
        mx="auto"
        border="1px solid"
        borderColor="#21212D"
        fontSize="0.9em"
        _placeholder={{ color: { base:"black", _dark:"#ffffff" }, fontSize:"0.8em" }}
        _active={{ outline: 'none', border:'none' }}
        _focus={{ outline: 'none', border:'none' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Flex
        w="100%"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        fontSize=".8em"
      >
        <Flex spaceX="1.5rem">
          <Checkbox.Root 
            size="xs"
            checked={options.excludeSpaces}
            onCheckedChange={handleSetExcludeSpaces}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Exclude Spaces</Checkbox.Label>
          </Checkbox.Root>
          <CharacterLimitComponent />
        </Flex>
        <Box>
          <Text>
            Approx. reading time: {calculateReadTime(text, options.excludeSpaces).toFixed(2)} {calculateReadTime(text, options.excludeSpaces) > 1 ? 'minutes' : 'minute'}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}