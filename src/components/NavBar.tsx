import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export default function NavDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <header>
        <Box p="2">
          <IconButton aria-label="open-drawer" ref={r => (btnRef.current = r)} onClick={onOpen}>
            <HamburgerIcon />
          </IconButton>
        </Box>
      </header>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="sm" finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <DarkModeSwitch />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
