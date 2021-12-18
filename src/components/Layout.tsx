import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { MainHeight } from "../constants";
import Footer from "./Footer";
import NavDrawer from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavDrawer />
      <main>
        <Container minH={MainHeight}>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
