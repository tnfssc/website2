import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import * as DeckTypings from "@danmarshall/deckgl-typings";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

declare module "deck.gl" {
  export namespace DeckTypings {}
}
