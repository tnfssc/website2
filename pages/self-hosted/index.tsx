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
    title: "ViewTube",
    description: (
      <>
        <Text>
          Alternate frontend for youtube.com. I use a ton of youtube too, so a little bit of privacy while browsing it
          helps a lot
        </Text>
      </>
    ),
    image: "/viewtube.png",
    imageAspectRatio: 200 / 200,
    link: "https://youtube.sharath.co.in/",
    imagePadding: "10",
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
    title: "Zulip",
    description: (
      <>
        <Text>Slack alternative without voice features. A place for my friends and people.</Text>
      </>
    ),
    image: "/zulip.png",
    imageAspectRatio: 200 / 200,
    imagePadding: "-10",
    link: "https://chat.sharath.co.in/join/2w4dxubxdrmshbuh2nv4hmyz/",
  },
  {
    title: "YourLS",
    description: (
      <>
        <Text>
          Private URL shortener. You can&apos;t use it. But hey, you can always ping me if you want to get a short URL.
        </Text>
      </>
    ),
    image: "/yourls-logo.svg",
    imageAspectRatio: 512 / 210,
    link: "https://tinyurl.sharath.co.in/",
  },
  {
    title: "Coder",
    description: (
      <>
        <Text>
          Private Coder instance. It is like VSCode, but in a browser. You can&apos;t use it. But, I can&apos;t stop you
          from trying.
        </Text>
      </>
    ),
    image: "/coder.png",
    imageAspectRatio: 200 / 200,
    link: "https://code.sharath.co.in/",
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
