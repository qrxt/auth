import { Box, Container } from "@chakra-ui/react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
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
          {children}
        </Box>
      </Container>
    </Box>
  );
}

export default Layout;
