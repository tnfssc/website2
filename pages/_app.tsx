import "../styles/globals.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import theme from "../src/theme";
import { SWRConfig } from "swr";
import { UserProvider } from "../src/contexts/user";
import supabase from "../src/initSupabase";

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
      <UserProvider supabaseClient={supabase}>
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
            refreshInterval: 30000,
          }}>
          {getLayout(<Component {...pageProps} />)}
        </SWRConfig>
      </UserProvider>
    </ChakraProvider>
  );
}
