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
    imagePadding: 12,
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
    imagePadding: 16,
    link: "https://search.sharath.co.in/",
  },
  {
    title: "CloudTube",
    description: (
      <>
        <Text>Alternative YouTube frontend for YouTube addicts. You can use it. But, you can&apos;t abuse it.</Text>
      </>
    ),
    image: "/cloudtube.svg",
    imageAspectRatio: 30 / 25,
    imagePadding: 24,
    link: "https://youtube.sharath.co.in/",
  },
  {
    title: "Jitsi Meet",
    description: (
      <>
        <Text>Alternative to Google Meet. Just use it to have meetings with people. Privacy friendly as well.</Text>
      </>
    ),
    image: "/jitsi.png",
    imageAspectRatio: 375 / 375,
    imagePadding: 24,
    link: "https://meet.sharath.co.in/",
  },
  {
    title: "RustDesk",
    description: (
      <>
        <Text>
          An alternative to TeamViewer and AnyDesk. It is a remote desktop application written in Rust.
          <Text>
            Use ID Server: <pre>rustdesk.sharath.co.in</pre>.
          </Text>
          <Text>
            Use Key: <pre>6ILz0Vr6wuqJzPIQnVD4x4td73Hc5ivyUq8wvXtJFXQ=</pre>.
          </Text>
        </Text>
      </>
    ),
    image: "/rustdesk.svg",
    imageAspectRatio: 375 / 375,
    imagePadding: 24,
    link: "https://rustdesk.com/",
  },
  {
    title: "OneDev",
    description: (
      <>
        <Text>
          OneDev is a self-hosted git service with Kanban and CI/CD, featuring out-of-box code intelligence,
          customizable issue workflow, and CI/CD without writing Yaml. Go on, try it.
        </Text>
      </>
    ),
    image: "/onedev.png",
    imageAspectRatio: 200 / 200,
    imagePadding: 16,
    link: "https://onedev.sharath.co.in/",
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
    title: "Penpot",
    description: (
      <>
        <Text>Open source alternative for Figma. Create account and start using it.</Text>
      </>
    ),
    image: "/penpot.jpeg",
    imageAspectRatio: 900 / 900,
    imagePadding: 16,
    link: "https://figma.sharath.co.in/",
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
    imagePadding: 16,
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
    imagePadding: 16,
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
    imagePadding: 16,
    link: "https://vaultwarden.sharath.co.in/",
  },
  {
    title: "Portainer",
    description: (
      <>
        <Text>
          A portainer web GUI for managing my Docker Swarm running all of these services. You will never use it. Only I
          will.
        </Text>
      </>
    ),
    image: "/docker.jpeg",
    imageAspectRatio: 2700 / 2311,
    imagePadding: 20,
    link: "https://portainer.sharath.co.in/",
  },
  {
    title: "Code Server",
    description: (
      <>
        <Text>
          Code Server is a VS Code server so that I have a dev environment everywhere I go. Only I can use it.
        </Text>
      </>
    ),
    image: "/vscode.png",
    imageAspectRatio: 200 / 200,
    imagePadding: 28,
    link: "https://vscode.sharath.co.in/",
  },
];

const SelfHosted: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <VStack>
          <Link href="/self-hosted">
            <Heading>Self Hosted</Heading>
          </Link>
          <Link isExternal href="https://stats.uptimerobot.com/nPX9VSXZ6v">
            Status
          </Link>
        </VStack>
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
