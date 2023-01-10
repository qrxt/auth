import React from "react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minW={320}
      >
        <Container minW="xl" py={[3, 3, 3, 3]}>
          <Box
            border="1px"
            borderColor="blackAlpha.300"
            borderRadius="xl"
            boxShadow="md"
            p={3}
          >
            <LoginForm />
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
