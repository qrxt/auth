import React, { createContext } from "react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";
import Store from "./store/store";

const store = new Store();

interface State {
  store: Store;
}

export const StateContext = createContext<State>({ store });

function App() {
  return (
    <StateContext.Provider value={{ store }}>
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
    </StateContext.Provider>
  );
}

export default App;
