import { Box, Container } from "@chakra-ui/react"
import { Navigation } from "@/components/Navigation/Navigation"
import { TextInputContainer } from "@/components/TextInput/TextInputContainer"
import { LetterDensityComponent } from "./components/LetterDensity/LetterDensityComponent"

function App() {
  return (
    <Box
      as="main"
      maxW="100%"
      minH="100vh"
      bgColor={{ base: "#FAFAFA", _dark: "#13151B" }}
      color={{ base: "#000000", _dark: "#F9FAFB" }}
    >
      <Container as="section" maxW="6xl" py="2rem">
        <Navigation />
        <TextInputContainer />
        <LetterDensityComponent />
      </Container>
    </Box>
  )
}

export default App
