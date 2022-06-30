import { Center, Heading, Icon, IconButton, VStack, Wrap, WrapItem, Tooltip, HStack } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";
import { motion } from "framer-motion";

import { skills } from "../../src/data/skills";

type SkillIconProps = { icon: React.FC; name: string; url: string };

const SkillIcon: React.FC<SkillIconProps> = ({ icon, name, url }) => (
  <motion.span whileHover={{ scale: 1.06 }}>
    <Tooltip label={name}>
      <IconButton
        p="6"
        bgColor="transparent"
        w="44"
        h="44"
        icon={<Icon w="40" h="40" as={icon} />}
        aria-label={name}
        onClick={_ => window.open(url, "_blank", "noreferrer")}
      />
    </Tooltip>
  </motion.span>
);

const Skills: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <HStack>
          <Link href="/skills">
            <Heading>Skills</Heading>
          </Link>
        </HStack>
        <VStack py="10">
          <Wrap spacing={6} justify="center">
            {skills.map((skill, i) => (
              <WrapItem key={skill.name}>
                <SkillIcon {...skill} />
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </VStack>
    </Center>
  );
};

export default Skills;
