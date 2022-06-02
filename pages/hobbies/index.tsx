import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";

const ListItemLink = ({ href, text }: { href: string; text: string }) => (
  <ListItem>
    <Link href={href} isExternal>
      {text}
    </Link>
  </ListItem>
);

const videoGames = [
  {
    text: "Minecraft",
    href: "https://minecraft.net/en-us/",
  },
  {
    text: "No Man's Sky",
    href: "https://www.nomanssky.com/",
  },
  {
    text: "INSIDE",
    href: "https://playdead.com/games/inside/",
  },
  {
    text: "Limbo",
    href: "https://playdead.com/games/limbo/",
  },
  {
    text: "The Room",
    href: "https://www.fireproofgames.com/games/the-room/",
  },
  {
    text: "Vector",
    href: "https://nekki.com/vector/",
  },
  {
    text: "Little Nightmares",
    href: "https://en.bandainamcoent.eu/little-nightmares/",
  },
  {
    text: "Plug&Play",
    href: "https://plugplay.ch/",
  },
  {
    text: "Kids",
    href: "https://playkids.ch/",
  },
  {
    text: "Poppy Playtime",
    href: "https://poppyplaytimegame.io/",
  },
  {
    text: "CS:GO",
    href: "https://www.counter-strike.net/",
  },
  {
    text: "Valorant",
    href: "https://www.playvalorant.com/",
  },
];

const Hobbies: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <Link href="/hobbies">
          <Heading>Hobbies</Heading>
        </Link>
        <Accordion allowMultiple>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  Video Games&nbsp;&nbsp;
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <List>
                {videoGames.map(game => (
                  <ListItemLink key={game.text} {...game} />
                ))}
                <ListItem>and more</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  Anime
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <List>
                <ListItem>Assassination Classroom</ListItem>
                <ListItem>Steins;Gate</ListItem>
                <ListItem>Death Note</ListItem>
                <ListItem>Naruto</ListItem>
                <ListItem>and more</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  Netflix
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <List>
                <ListItem>Black Mirror</ListItem>
                <ListItem>Lucifer</ListItem>
                <ListItem>Stranger Things</ListItem>
                <ListItem>Marvel stuff</ListItem>
                <ListItem>and more</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  Chill
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <List>
                <ListItem>
                  Music -{" "}
                  <Link href="https://open.spotify.com/playlist/2hSgezIlZR5WZFAgAXXggd" isExternal>
                    Spotify
                    <ListIcon as={MdOpenInNew} ml="1" h="4" />
                  </Link>
                </ListItem>
                <ListItem>Web surfing</ListItem>
                <ListItem>Multimedia production</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Center>
  );
};

export default Hobbies;
