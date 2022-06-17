import { Center, Heading, Text, VStack, Wrap, WrapItem, chakra } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Card, { CardProps } from "../../src/components/Card";
import Link from "../../src/components/Link";

const experiences: CardProps[] = [
  {
    title: (
      <chakra.span>
        SaaS Labs{" "}
        <chakra.span fontSize="md" fontWeight="normal">
          Jun 2022 - Present
        </chakra.span>
      </chakra.span>
    ),
    description: (
      <>
        <Text>
          <Link href="https://saaslabs.co" isExternal>
            SaaS Labs US
          </Link>{" "}
          is the parent company of some SaaS products like JustCall, Helpwise, etc.{" "}
        </Text>
        <Text>It is a startup led by NITW alumnus, Gaurav Sharma.</Text>
        <Text>
          As a Full Stack Developer at SaaS Labs, I just got started on their flagship product JustCall. Let&apos;s see
          what happens.
        </Text>
      </>
    ),
    image: "/saaslabs-logo.jpeg",
    imageAspectRatio: 200 / 200,
    link: "https://saaslabs.co",
  },
  {
    title: (
      <chakra.span>
        StoryXpress{" "}
        <chakra.span fontSize="md" fontWeight="normal">
          Jul 2020 - Sep 2020
        </chakra.span>
      </chakra.span>
    ),
    description: (
      <>
        <Text>
          <Link href="https://storyxpress.co" isExternal>
            StoryXpress.co
          </Link>{" "}
          is a video platform for video management, hosting, recording etc.{" "}
        </Text>
        <Text>It is a startup by IITH alumni. Now serving over 1 million videos and over 500 thousand downloads.</Text>
        <Text>
          As a Full Stack Developer Intern at StoryXpress, I worked on the frontend and backend of their flagship
          application. I also worked on their internal dashboard. Learnt a lot about teamwork and company environment.
        </Text>
      </>
    ),
    image: "/storyxpress-logo.webp",
    imageAspectRatio: 1,
    link: "https://storyxpress.co",
  },
];

const Experience: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <Link href="/experience">
          <Heading>Experience</Heading>
        </Link>
        <Center py="10">
          <Wrap spacing={6} justify="center">
            {experiences.map(experience => (
              <WrapItem key={experience.image}>
                <Card {...experience} />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </VStack>
    </Center>
  );
};

export default Experience;
