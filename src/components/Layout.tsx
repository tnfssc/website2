import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { MainHeight } from "../constants";
import Footer from "./Footer";
import NavDrawer from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <>
      <Head>
        <title>Random site</title>
        <meta
          name="description"
          content="Just a random website. Probably nothing here is useful. Feel free to explore."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDrawer />
      <main>
        <Container maxW={"full"} minH={MainHeight}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}
