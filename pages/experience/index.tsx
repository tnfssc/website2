import { Center, Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Card, { CardProps } from "../../src/components/Card";
import Link from "../../src/components/Link";

const experiences: CardProps[] = [
  {
    title: "StoryXpress",
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
          As a Full Developer Intern at StoryXpress, I worked on the frontend and backend of their flagship application.
          I also worked on their internal dashboard. Learnt a lot about teamwork and company environment.
        </Text>
      </>
    ),
    image: "/storyxpress-logo.webp",
    imageAspectRatio: 1,
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
              <WrapItem key={experience.title}>
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
