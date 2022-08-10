import { Center, Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Card, { CardProps } from "../../src/components/Card";
import Link from "../../src/components/Link";

const selfHosted: CardProps[] = [
  {
    title: "Sharath's Blog",
    description: (
      <>
        <Text>
          My private blog. I post here very rarely. You can checkout if there are any posts there. It is powered by
          Ghost.org
        </Text>
      </>
    ),
    image: "/ghost.png",
    imageAspectRatio: 800 / 294,
    link: "https://blog.sharath.co.in/",
  },
  {
    title: "SearXNG",
    description: (
      <>
        <Text>Private search engine for my personal use. You can use it if you want too.</Text>
      </>
    ),
    image: "/searxng.png",
    imageAspectRatio: 200 / 200,
    link: "https://search.sharath.co.in/",
  },
  {
    title: "Kutt",
    description: (
      <>
        <Text>
          A free URL shortener. It&apos;s open source and you can use it. Shorten all your URLs and share them with
          everyone.
        </Text>
      </>
    ),
    image: "/kutt.png",
    imageAspectRatio: 363 / 404,
    link: "https://tinyurl.sharath.co.in/",
  },
  {
    title: "LibReddit",
    description: (
      <>
        <Text>
          Alternate frontend for reddit.com. I use a ton of reddit, so a little bit of privacy while browsing it helps a
          lot
        </Text>
      </>
    ),
    image: "/libreddit.png",
    imageAspectRatio: 200 / 200,
    link: "https://reddit.sharath.co.in/",
  },
  {
    title: "Bibliogram",
    description: (
      <>
        <Text>
          Alternate frontend for instagram.com. I don&apos;t use instagram, but everyone else please enjoy privacy while
          browsing it
        </Text>
      </>
    ),
    image: "/bibliogram.png",
    imageAspectRatio: 200 / 200,
    link: "https://instagram.sharath.co.in/",
  },
  {
    title: "VaultWarden",
    description: (
      <>
        <Text>
          A private BitWarden server with VaultWarden implementation. You will need an invite if you want to use it.
        </Text>
      </>
    ),
    image: "/bitwarden.png",
    imageAspectRatio: 375 / 250,
    link: "https://vaultwarden.sharath.co.in/",
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
