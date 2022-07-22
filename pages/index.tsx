import { Heading, Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "../src/components/Link";

type Response = {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author?: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
};

export const getServerSideProps: GetServerSideProps<{ quote: Response }> = async () => {
  const defaultQuote: Response = {
    _id: "-1",
    content: "Zzzzz...",
    authorSlug: "me",
    length: 8,
    tags: ["default"],
  };
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    return { props: { quote: data } };
  } catch (err) {
    return { props: { quote: defaultQuote } };
  }
};

export default function Home({ quote }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <VStack display="flex" flexDirection="column" justifyContent="center" px="3">
      <Text pb="20" color="red">
        <Link href="https://blog.sharath.co.in" isExternal>Checkout my blog</Link>
      </Text>
      <Heading textAlign="center">{quote.content}</Heading>
      {quote.author && <Text>- {quote.author}</Text>}
    </VStack>
  );
}
