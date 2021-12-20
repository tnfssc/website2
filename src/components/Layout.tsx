import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import NavDrawer from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <Flex flexDir="column" h="100vh">
      <Head>
        <title>Random site</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Just a random website. Probably nothing here is useful. Feel free to explore."
        />
      </Head>
      <NavDrawer />
      <Flex as="main" flexGrow={1} flexDir="column" justifyContent="center">
        <Container maxW={"full"}>{children}</Container>
      </Flex>
      <Footer />
    </Flex>
  );
}
