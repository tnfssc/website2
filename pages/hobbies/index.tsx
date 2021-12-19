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

const Hobbies: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <Link href="/hobbies">
          <Heading>Hobbies</Heading>
        </Link>
        <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  E-Sports
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <List>
                <ListItem>CS:GO - Distinguished Master Guardian</ListItem>
                <ListItem>Valorant - Gold 1</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  Video Games
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <List>
                <ListItem>Minecraft - Redstone Engineer</ListItem>
                <ListItem>Forza Horizon - Casual</ListItem>
                <ListItem>A lot of indie titles like INSIDE, Limbo, The Room, Vector, Little Nightmares etc</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  Others
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <List>
                <ListItem>Netflix - Black Mirror, Lucifer, Stranger Things etc</ListItem>
                <ListItem>Anime - Assassination Classroom, Steins;Gate, Death Note, Naruto etc</ListItem>
                <ListItem>
                  Music -{" "}
                  <Link href="https://open.spotify.com/playlist/2hSgezIlZR5WZFAgAXXggd" isExternal>
                    Spotify
                    <ListIcon as={MdOpenInNew} ml="1" h="4" />
                  </Link>
                </ListItem>
                <ListItem>Cycling - Casual</ListItem>
                <ListItem>Web surfing</ListItem>
                <ListItem>Production - Newbie</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Center>
  );
};

export default Hobbies;
