import { Center, Heading, VStack, useColorMode, useTheme, useBreakpointValue } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";
import { useEffect, useRef } from "react";

import { skills } from "../../src/data/skills";
import { rainbow } from "../../src/utils/rainbow";

type SkillIconProps = { name: string; url: string; value: number };

const Skills: NextPageWithLayout = () => {
  const wordCloudRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();
  const theme = useTheme();
  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const wordcloud = (await import("wordcloud")).default;
        wordcloud(wordCloudRef.current!, {
          list: skills.map(skill => [skill.name, skill.value]),
          weightFactor: weight => Math.pow(weight * 4, 1.2),
          fontFamily: "Impact, Roboto, sans-serif",
          color: (word, weight, fontSize, distance, theta) =>
            rainbow(skills.length, (skills.findIndex(skill => skill.name === word)! * theta) % skills.length),
          rotateRatio: 0,
          backgroundColor:
            colorMode === "light"
              ? theme.__cssVars["--chakra-colors-whiteAlpha-900"]
              : theme.__cssVars["--chakra-colors-gray-800"],
          wait: 50,
          classes: "wordcloud",
          click: ([word], _, e) => {
            e.preventDefault();
            window.open(skills.find(s => s.name === word)?.url, "_blank", "noopener");
          },
        });
      })();
    }
  }, [colorMode, theme]);

  return (
    <Center>
      <VStack w="full">
        <Link href="/skills">
          <Heading>Skills</Heading>
        </Link>
        <VStack py="10" w="full" overflow="hidden">
          <VStack ref={wordCloudRef} w="full" h="500px"></VStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export default Skills;
