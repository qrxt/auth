import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import React, { FC, useContext, useState } from "react";
import { StateContext } from "../../App";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const { store } = useContext(StateContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Stack>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />

        <Flex>
          <Button
            type="submit"
            mr={3}
            value={email}
            onClick={() => {
              store.login(email, pass);
            }}
          >
            Log in
          </Button>
          <Button
            type="submit"
            value={pass}
            onClick={() => {
              store.register(email, pass);
            }}
          >
            Register
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default LoginForm;
