import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Offline() {
  return (
    <VStack display="flex" flexDirection="column" justifyContent="center">
      <Heading textAlign="center">404 Not Found</Heading>
      <Text>Please check your URL</Text>
    </VStack>
  );
}
