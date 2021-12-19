import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { MdSchool, MdSportsCricket, MdHome } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import Link from "./Link";
import { FaProjectDiagram } from "react-icons/fa";

export const NavBarHeight = "56px";

export default function NavDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <header>
        <Box p="2" display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Link href="/" onClick={onClose}>
              <IconButton aria-label="home" icon={<Icon as={MdHome} w="7" h="7" />} />
            </Link>
          </Box>
          <IconButton aria-label="open-drawer" ref={r => (btnRef.current = r)} onClick={onOpen}>
            <HamburgerIcon />
          </IconButton>
        </Box>
      </header>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm" finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Box p="2" display="flex" justifyContent="space-between" alignItems="center">
              <Box />
              <CloseButton onClick={onClose} />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <List h="100%" display="flex" flexDirection="column">
              <ListItem display="flex" alignItems="center" fontSize="2xl" py="1.5">
                <Link href="/projects">
                  <ListIcon as={FaProjectDiagram} w="7" h="7" />
                  Projects
                </Link>
              </ListItem>
              <ListItem display="flex" alignItems="center" fontSize="2xl" py="1.5">
                <Link href="/skills">
                  <ListIcon as={GiSkills} w="7" h="7" />
                  Skills
                </Link>
              </ListItem>
              <ListItem display="flex" alignItems="center" fontSize="2xl" py="1.5">
                <Link href="/acads">
                  <ListIcon as={MdSchool} w="7" h="7" />
                  Academics
                </Link>
              </ListItem>
              <ListItem display="flex" alignItems="center" fontSize="2xl" py="1.5">
                <Link href="/hobbies">
                  <ListIcon as={MdSportsCricket} w="7" h="7" />
                  Hobbies
                </Link>
              </ListItem>
              <ListItem flexGrow={1} />
              <ListItem display="flex" alignItems="center" fontSize="xl" py="1.5">
                <DarkModeSwitch />
                <Text pl="2">Dark mode</Text>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
