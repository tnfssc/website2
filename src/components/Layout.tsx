import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer, { FooterHeight } from "./Footer";
import NavDrawer, { NavBarHeight } from "./NavBar";

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
        <Container minH={`calc(100vh - ${NavBarHeight} - ${FooterHeight})`}>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
