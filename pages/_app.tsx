import "../styles/nprogress.css";
import "../styles/globals.css";
import "normalize.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import nProgress from "nprogress";
import Layout from "../src/components/Layout";
import theme from "../src/theme";
import { BareFetcher, SWRConfig } from "swr";
import { UserProvider } from "../src/contexts/user";
import supabase from "../src/initSupabase";

import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { animations } from "../src/lib/animations";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const createLayout = (page: ReactElement) => <Layout>{page}</Layout>;

const fetcher: BareFetcher = (url: string, token?: string) =>
  fetch(url, {
    method: "GET",
    headers: token ? new Headers({ "Content-Type": "application/json", token }) : undefined,
    credentials: "same-origin",
  }).then(res => res.json());

const handleStart = (url: string) => url !== Router.asPath && nProgress.start();
const handleComplete = (url: string) => url === Router.asPath && nProgress.done();

Router.events.on("routeChangeStart", handleStart);
Router.events.on("routeChangeComplete", handleComplete);
Router.events.on("routeChangeError", handleComplete);

export default function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? createLayout;
  const animation = animations[2];
  return (
    <ChakraProvider resetCSS theme={theme}>
      <UserProvider supabaseClient={supabase}>
        <SWRConfig
          value={{
            fetcher,
            refreshInterval: 30000,
          }}>
          {getLayout(
            <LazyMotion features={domAnimation}>
              <AnimatePresence exitBeforeEnter>
                <m.div
                  key={router.route.concat(animation.name)}
                  className="page-wrap"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={animation.variants}
                  transition={animation.transition}>
                  <Component {...pageProps} />
                </m.div>
              </AnimatePresence>
            </LazyMotion>
          )}
        </SWRConfig>
      </UserProvider>
    </ChakraProvider>
  );
}
