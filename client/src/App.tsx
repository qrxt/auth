import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  List,
  ListItem,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";
import Store from "./store/store";
import Layout from "./components/Layout";
import { observer } from "mobx-react-lite";
import { UserDTO } from "./types/user";
import { UserService } from "./services";

const store = new Store();

interface State {
  store: Store;
}

export const StateContext = createContext<State>({ store });

function App() {
  const { store } = useContext(StateContext);
  const [users, setUsers] = useState<UserDTO[]>();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.error("Failed to fetch users", e);
    }
  }

  return (
    <StateContext.Provider value={{ store }}>
      <ChakraProvider>
        <Layout>
          <Heading as="h2" variant="h1" mb={3}>
            Auth / Register
          </Heading>

          {store.isLoading ? (
            <Spinner />
          ) : (
            <Box>
              <Text mb={3}>
                {store.isAuth ? "Authorized" : "Not authorized"}
              </Text>

              {!store.isAuth && <LoginForm />}
            </Box>
          )}

          {store.isAuth && (
            <Stack>
              <Heading variant="h3">Users</Heading>

              <Button
                onClick={() => {
                  getUsers();
                }}
              >
                Get users
              </Button>

              <List>
                {users &&
                  users.map((user) => (
                    <ListItem key={user.email}>
                      <Text>{user.email}</Text>
                    </ListItem>
                  ))}
              </List>
            </Stack>
          )}
        </Layout>
      </ChakraProvider>
    </StateContext.Provider>
  );
}

export default observer(App);
