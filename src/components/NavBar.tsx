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
  HStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { MdSchool, MdSportsCricket, MdHome } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import Link from "./Link";
import { FaProjectDiagram, FaIndustry, FaServer } from "react-icons/fa";
import AuthButton from "./Auth";

export const NavBarHeight = "56px";

type LIProps = {
  href: string;
  name: string;
  icon: React.FC;
  onClick?: (..._: never) => void;
};

const LI: React.FC<LIProps> = ({ href, icon, name, onClick }) => (
  <ListItem display="flex" alignItems="center" fontSize="2xl" py="1.5" onClick={onClick}>
    <Link href={href}>
      <ListIcon as={icon} w="7" h="7" />
      {name}
    </Link>
  </ListItem>
);

const items: LIProps[] = [
  {
    href: "/experience",
    name: "Experience",
    icon: FaIndustry,
  },
  {
    href: "/self-hosted",
    name: "Self Hosted",
    icon: FaServer,
  },
  {
    href: "/projects",
    name: "Projects",
    icon: FaProjectDiagram,
  },
  {
    href: "/skills",
    name: "Skills",
    icon: GiSkills,
  },
  {
    href: "/acads",
    name: "Academics",
    icon: MdSchool,
  },
  {
    href: "/hobbies",
    name: "Hobbies",
    icon: MdSportsCricket,
  },
];

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <header>
        <Box p="2" display="flex" justifyContent="space-between" alignItems="center">
          <HStack>
            <Link href="/" onClick={onClose}>
              <IconButton variant="ghost" aria-label="home" icon={<Icon as={MdHome} w="7" h="7" />} />
            </Link>
            <Text>
              <Link href="https://new.sharath.co.in" isExternal>Go to new.sharath.co.in</Link>
            </Text>
          </HStack>
          <IconButton variant="ghost" aria-label="open-drawer" ref={r => (btnRef.current = r)} onClick={onOpen}>
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
              {items.map(item => (
                <LI key={item.href} {...item} onClick={onClose} />
              ))}
              <ListItem flexGrow={1} />
              <ListItem py="4">
                <AuthButton />
              </ListItem>
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
