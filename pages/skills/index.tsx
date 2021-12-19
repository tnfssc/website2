import { Center, Heading, Icon, IconButton, VStack, Wrap, WrapItem, Tooltip } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";

import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiGit,
  SiAndroid,
  SiNodedotjs,
  SiCloudflare,
  SiMysql,
  SiWindowsxp,
  SiLinux,
} from "react-icons/si";

type SkillIconProps = { icon: React.FC; name: string; url: string };

const SkillIcon: React.FC<SkillIconProps> = ({ icon, name, url }) => (
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
);

const languages: SkillIconProps[] = [
  { icon: SiJavascript, name: "JavaScript", url: "https://www.javascript.com/" },
  { icon: SiCplusplus, name: "C++", url: "https://www.cplusplus.com/" },
  { icon: SiPython, name: "Python", url: "https://www.python.org/" },
  { icon: SiMysql, name: "MySQL", url: "https://www.mysql.com/" },
];

const technologies: SkillIconProps[] = [
  { icon: SiReact, name: "React", url: "https://reactjs.org/" },
  { icon: SiNodedotjs, name: "Node.JS", url: "https://nodejs.org/" },
  { icon: SiGit, name: "Git", url: "https://git-scm.com/" },
  { icon: SiCloudflare, name: "Cloud Computing", url: "https://en.wikipedia.org/wiki/Cloud_computing" },
  { icon: SiAndroid, name: "React Native Android", url: "https://reactnative.dev/" },
];

const operatingSystems: SkillIconProps[] = [
  { icon: SiWindowsxp, name: "Windows", url: "https://www.windows.com/" },
  { icon: SiLinux, name: "Linux", url: "https://www.linux.org/" },
];

const Skills: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <Link href="/skills">
          <Heading>Skills</Heading>
        </Link>
        <VStack py="10">
          <Wrap spacing={6} justify="center">
            {languages.map((skill, i) => (
              <WrapItem key={skill.name}>
                <SkillIcon {...skill} />
              </WrapItem>
            ))}
          </Wrap>
          <Wrap spacing={6} justify="center">
            {technologies.map((skill, i) => (
              <WrapItem key={skill.name}>
                <SkillIcon {...skill} />
              </WrapItem>
            ))}
          </Wrap>
          <Wrap spacing={6} justify="center">
            {operatingSystems.map((skill, i) => (
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
