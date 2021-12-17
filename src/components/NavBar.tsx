import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  List,
  ListIcon,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { MdDarkMode } from "react-icons/md";
import Link from "./Link";

export const NavBarHeight = "56px";

export default function NavDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <header>
        <Box p="2" display="flex" justifyContent="space-between" alignItems="center">
          <Box ml="5">
            <Link href="/" onClick={onClose}>
              website2
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
              <Link href="/" onClick={onClose}>
                website2
              </Link>
              <IconButton aria-label="close-drawer" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <List>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={MdDarkMode} w="10" h="10" />
                <DarkModeSwitch />
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
