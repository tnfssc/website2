import { Center, Heading, VStack, useColorMode, useTheme, useBreakpointValue } from "@chakra-ui/react";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";
import { useEffect, useRef } from "react";

type SkillIconProps = { name: string; url: string; value: number };

const skills: SkillIconProps[] = [
  { name: "TypeScript", url: "https://www.typescript.com/", value: 10 },
  { name: "PHP", url: "https://www.php.net/", value: 2 },
  { name: "C++", url: "https://www.cplusplus.com/", value: 4 },
  { name: "Python", url: "https://www.python.org/", value: 4 },
  { name: "MongoDB", url: "https://www.mongodb.com/", value: 6 },
  { name: "MySQL", url: "https://www.mysql.com/", value: 7 },
  { name: "PostgreSQL", url: "https://www.postgresql.com/", value: 6 },
  { name: "React", url: "https://reactjs.org/", value: 10 },
  { name: "Next.js", url: "https://nextjs.org/", value: 8 },
  { name: "React Native", url: "https://reactnative.dev/", value: 7 },
  { name: "Flutter", url: "https://flutter.dev/", value: 2 },
  { name: "Node.JS", url: "https://nodejs.org/", value: 10 },
  { name: "Git", url: "https://git-scm.com/", value: 6 },
  { name: "Microsoft Azure", url: "https://azure.microsoft.com/", value: 5 },
  { name: "Google Cloud", url: "https://cloud.google.com/", value: 5 },
  { name: "Amazon AWS", url: "https://aws.amazon.com/", value: 5 },
  { name: "Cloudflare", url: "https://cloudflare.com/", value: 6 },
  { name: "MacOS", url: "https://www.apple.com/macos/", value: 5 },
  { name: "Windows", url: "https://www.windows.com/", value: 5 },
  { name: "Supabase", url: "https://supabase.com/", value: 7 },
  { name: "Jupyter", url: "https://jupyter.org/", value: 4 },
  { name: "Atlassian", url: "https://www.atlassian.com/", value: 2 },
  { name: "Figma", url: "https://www.figma.com/", value: 7 },
  { name: "Firebase", url: "https://firebase.google.com/", value: 4 },
  { name: "GitHub", url: "https://github.com/", value: 8 },
  { name: "Vercel", url: "https://vercel.com/", value: 8 },
  { name: "Svelte", url: "https://svelte.dev/", value: 4 },
  { name: "Material UI", url: "https://material-ui.com/", value: 7 },
  { name: "Chakra UI", url: "https://chakra-ui.com/", value: 7 },
  { name: "Dart", url: "https://dart.dev/", value: 2 },
  { name: "Go", url: "https://golang.org/", value: 2 },
  { name: "Arduino", url: "https://www.arduino.cc/", value: 4 },
  { name: "Raspberry Pi", url: "https://www.raspberrypi.org/", value: 4 },
  { name: "Docker", url: "https://www.docker.com/", value: 6 },
  { name: "Arch Linux", url: "https://www.archlinux.org/", value: 6 },
  { name: "Ubuntu", url: "https://www.ubuntu.com/", value: 7 },
];

/**
 * @param numOfSteps: Total number steps to get color, means total colors
 * @param step: The step number, means the order of the color
 */
function rainbow(numOfSteps: number, step: number) {
  // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
  // Adam Cole, 2011-Sept-14
  // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
  let r: number, g: number, b: number;
  var h = step / numOfSteps;
  var i = ~~(h * 6);
  var f = h * 6 - i;
  var q = 1 - f;
  switch (i % 6) {
    case 0:
      r = 1;
      g = f;
      b = 0;
      break;
    case 1:
      r = q;
      g = 1;
      b = 0;
      break;
    case 2:
      r = 0;
      g = 1;
      b = f;
      break;
    case 3:
      r = 0;
      g = q;
      b = 1;
      break;
    case 4:
      r = f;
      g = 0;
      b = 1;
      break;
    case 5:
      r = 1;
      g = 0;
      b = q;
      break;
  }
  var c =
    "#" +
    ("00" + (~~(r! * 255)).toString(16)).slice(-2) +
    ("00" + (~~(g! * 255)).toString(16)).slice(-2) +
    ("00" + (~~(b! * 255)).toString(16)).slice(-2);
  return c;
}

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
