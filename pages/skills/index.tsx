import { Center, Heading, Icon, IconButton, VStack, Wrap, WrapItem, Tooltip, HStack } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";
import { motion } from "framer-motion";

import {
  SiCplusplus,
  SiPython,
  SiReact,
  SiGit,
  SiAndroid,
  SiNodedotjs,
  SiCloudflare,
  SiMysql,
  SiWindowsxp,
  SiPhp,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiFlutter,
  SiGooglecloud,
  SiAmazonaws,
  SiMicrosoftazure,
  SiMacos,
  SiNextdotjs,
  SiFigma,
  SiFirebase,
  SiSupabase,
  SiJupyter,
  SiAtlassian,
  SiGithub,
  SiVercel,
  SiSvelte,
  SiMaterialui,
  SiChakraui,
  SiDart,
  SiGo,
  SiArduino,
  SiRaspberrypi,
  SiDocker,
  SiArchlinux,
  SiUbuntu,
} from "react-icons/si";

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

const skills: SkillIconProps[] = [
  { icon: SiTypescript, name: "TypeScript", url: "https://www.typescript.com/" },
  { icon: SiPhp, name: "PHP", url: "https://www.php.net/" },
  { icon: SiCplusplus, name: "C++", url: "https://www.cplusplus.com/" },
  { icon: SiPython, name: "Python", url: "https://www.python.org/" },
  { icon: SiMongodb, name: "MongoDB", url: "https://www.mongodb.com/" },
  { icon: SiMysql, name: "MySQL", url: "https://www.mysql.com/" },
  { icon: SiPostgresql, name: "PostgreSQL", url: "https://www.postgresql.com/" },
  { icon: SiReact, name: "React", url: "https://reactjs.org/" },
  { icon: SiNextdotjs, name: "Next.js", url: "https://nextjs.org/" },
  { icon: SiAndroid, name: "React Native", url: "https://reactnative.dev/" },
  { icon: SiFlutter, name: "Flutter", url: "https://flutter.dev/" },
  { icon: SiNodedotjs, name: "Node.JS", url: "https://nodejs.org/" },
  { icon: SiGit, name: "Git", url: "https://git-scm.com/" },
  { icon: SiMicrosoftazure, name: "Microsoft Azure", url: "https://azure.microsoft.com/" },
  { icon: SiGooglecloud, name: "Google Cloud", url: "https://cloud.google.com/" },
  { icon: SiAmazonaws, name: "Amazon AWS", url: "https://aws.amazon.com/" },
  { icon: SiCloudflare, name: "Cloudflare", url: "https://cloudflare.com/" },
  { icon: SiMacos, name: "MacOS", url: "https://www.apple.com/macos/" },
  { icon: SiWindowsxp, name: "Windows", url: "https://www.windows.com/" },
  { icon: SiSupabase, name: "Supabase", url: "https://supabase.com/" },
  { icon: SiJupyter, name: "Jupyter", url: "https://jupyter.org/" },
  { icon: SiAtlassian, name: "Atlassian", url: "https://www.atlassian.com/" },
  { icon: SiFigma, name: "Figma", url: "https://www.figma.com/" },
  { icon: SiFirebase, name: "Firebase", url: "https://firebase.google.com/" },
  { icon: SiGithub, name: "GitHub", url: "https://github.com/" },
  { icon: SiVercel, name: "Vercel", url: "https://vercel.com/" },
  { icon: SiSvelte, name: "Svelte", url: "https://svelte.dev/" },
  { icon: SiMaterialui, name: "Material UI", url: "https://material-ui.com/" },
  { icon: SiChakraui, name: "Chakra UI", url: "https://chakra-ui.com/" },
  { icon: SiDart, name: "Dart", url: "https://dart.dev/" },
  { icon: SiGo, name: "Go", url: "https://golang.org/" },
  { icon: SiArduino, name: "Arduino", url: "https://www.arduino.cc/" },
  { icon: SiRaspberrypi, name: "Raspberry Pi", url: "https://www.raspberrypi.org/" },
  { icon: SiDocker, name: "Docker", url: "https://www.docker.com/" },
  { icon: SiArchlinux, name: "Arch Linux", url: "https://www.archlinux.org/" },
  { icon: SiUbuntu, name: "Ubuntu", url: "https://www.ubuntu.com/" },
];

const Skills: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <HStack>
          <Link href="/skills">
            <Heading>Skills</Heading>
          </Link>
          <Link href="/skills/beta">(checkout the beta)</Link>
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
