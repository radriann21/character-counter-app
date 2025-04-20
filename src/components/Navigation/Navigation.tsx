import { Heading, Flex } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"

export const Navigation = () => {
  return (
    <Flex
      as="nav"
      w="100%"
      align="center"
      justifyContent="space-between"
    >
      <Heading>Character Counter</Heading>

      <ColorModeButton />
    </Flex>
  )
}