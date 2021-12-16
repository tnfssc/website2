import "../styles/globals.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import theme from "../src/theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const createLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? createLayout;
  return (
    <ChakraProvider resetCSS theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
