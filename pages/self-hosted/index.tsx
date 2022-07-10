import { Center, Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Card, { CardProps } from "../../src/components/Card";
import Link from "../../src/components/Link";

const selfHosted: CardProps[] = [
  {
    title: "SearXNG",
    description: (
      <>
        <Text>Private search engine for my personal use.</Text>
      </>
    ),
    image: "/searxng.png",
    imageAspectRatio: 853 / 146,
    link: "https://search.sharath.co.in/",
  },
];

const SelfHosted: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <Link href="/self-hosted">
          <Heading>Self Hosted</Heading>
        </Link>
        <Center py="10">
          <Wrap spacing={6} justify="center">
            {selfHosted.map(project => (
              <WrapItem key={project.image}>
                <Card {...project} />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </VStack>
    </Center>
  );
};

export default SelfHosted;
