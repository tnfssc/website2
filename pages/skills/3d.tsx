import { Center, Heading, VStack, HStack } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";
import { Cloud } from "react-icon-cloud";
import { skills } from "../../src/data/skills";
import { useIconCloud } from "../../src/hooks/useIconCloud";

const slugs = skills.map(skill => ({ slug: skill.slug, url: skill.url }));

const Skills: NextPageWithLayout = () => {
  const icons = useIconCloud(slugs);
  return (
    <Center>
      <VStack w="full">
        <HStack>
          <Link href="/skills">
            <Heading>Skills</Heading>
          </Link>
        </HStack>
        <VStack py="10">{icons ? <Cloud>{icons}</Cloud> : <div>Loading...</div>}</VStack>
      </VStack>
    </Center>
  );
};

export default Skills;
