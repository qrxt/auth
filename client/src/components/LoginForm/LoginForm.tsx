import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import React, { FC, useState } from "react";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  return (
    <form>
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
          <Button type="submit" mr={3}>
            Log in
          </Button>
          <Button type="submit">Register</Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default LoginForm;
