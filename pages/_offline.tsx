import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Offline() {
  return (
    <VStack display="flex" flexDirection="column" justifyContent="center">
      <Heading textAlign="center">Offline</Heading>
      <Text>You have no internet connection</Text>
    </VStack>
  );
}
