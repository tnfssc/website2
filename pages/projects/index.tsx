import { Center, Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Card, { CardProps } from "../../src/components/Card";
import Link from "../../src/components/Link";

const projects: CardProps[] = [
  {
    title: "COVID-19 Tracker",
    description: (
      <>
        <Text>
          <Link href="https://covid19tracker.in" isExternal>
            COVID-19 Tracker
          </Link>{" "}
          is a web application that tracks the spread of COVID-19.{" "}
        </Text>
        <Text>
          This is fork the (now discontinued){" "}
          <Link href="https://covid19india.org" isExternal>
            covid19india.org
          </Link>{" "}
          . It uses various APIs and web scraping techniques to collect the data.
        </Text>
        <Text>
          Serving over 10,000 unique visitors everyday, with a traffic of over 800 gigabytes every month, spread over 21
          million http requests, this is my most popular project.
        </Text>
        <Text>And it only costs $20 per month to run it.</Text>
      </>
    ),
    image: "/c19-logo.png",
    imageAspectRatio: 300 / 116,
    link: "https://covid19tracker.in",
  },
  {
    title: "Office of Career Services",
    description: (
      <>
        <Text>
          OCS - IITH is a one-stop-shop for all the career services of the institute. It is a knowledge hub for the
          students, faculty and potential employers.
        </Text>
        <Text>
          The OCS web application was primarily developed to digitalize, automate and streamline the process of
          placement and internship recruitment processes. It is a platform to connect students to their potential
          employers.
        </Text>
        <Text>The creation of OCS boosted the phase 1 2022 placements immensely.</Text>
      </>
    ),
    image: "/ocs-logo.png",
    imageAspectRatio: 1,
    link: "https://ocs.iith.ac.in",
  },
  {
    title: "Campus Energy Monitoring System",
    description: (
      <>
        <Text>CEMS is a system of devices that monitors the energy consumption throughout the campus.</Text>
        <Text>
          IoT devices that are spread all over the campus are connected to a central server. The server is responsible
          for collecting the data from the devices and storing it in a database. The data is then used to generate
          reports and various forms of visualizations.
        </Text>
        <Text>There is also a realtime dashboard that displays the realtime data.</Text>
      </>
    ),
    image: "/cems-logo.png",
    imageAspectRatio: 300 / 85,
    link: "https://cems.iith.ac.in",
  },
  {
    title: "Directions and Navigation",
    description: (
      <>
        <Text fontStyle="italic">
          Google Maps with Directions and current position. You can use this to navigate around the world.
        </Text>
      </>
    ),
    image: "/xlogo.png",
    imageAspectRatio: 300 / 300,
    link: "https://x.tnfssc.cf/",
  },
];

const Projects: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <Link href="/projects">
          <Heading>Projects</Heading>
        </Link>
        <Center py="10">
          <Wrap spacing={6} justify="center">
            {projects.map(project => (
              <WrapItem key={project.title}>
                <Card {...project} />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </VStack>
    </Center>
  );
};

export default Projects;
