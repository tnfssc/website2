import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  useColorModeValue as colorModeValue,
  HeadingProps,
  TextProps,
  BoxProps,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";

import Link from "./Link";

export type CardProps = Partial<{
  title: string;
  titleProps: HeadingProps;
  description: React.ReactNode;
  descriptionProps: TextProps;
  image: string;
  imageAspectRatio: number;
  link: string;
}> &
  BoxProps;

export default function Card({
  title,
  titleProps,
  description,
  descriptionProps,
  image = "",
  imageAspectRatio = 1,
  link = "#",
  ...props
}: CardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        maxW={"460px"}
        bg={colorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"auto"}
        {...props}>
        <Box bg={"white"} pos="relative" w="full" h="full" style={{ aspectRatio: "1" }}>
          <Flex flexDir="column" justifyContent="center" h="full">
            <Box>
              <Image src={image} layout={"responsive"} width={"100%"} height={`${100 / imageAspectRatio}%`} alt="img" />
            </Box>
          </Flex>
        </Box>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} flexGrow={1} mt={6}>
          <Heading color={colorModeValue("gray.700", "white")} fontSize={"2xl"} fontFamily={"body"} {...titleProps}>
            <Link href={link} target="_blank" rel="noreferer">
              {title}
            </Link>
          </Heading>
          <Text mt="1" as="span" color={"gray.500"} maxH="12" overflow={"hidden"} {...descriptionProps}>
            {description}
          </Text>
          <ChakraLink mt="4" onClick={onOpen}>
            Read more
          </ChakraLink>
        </Box>
      </Box>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90vw" w="540px">
          <ModalHeader {...titleProps}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg={"white"} pos="relative" w="full" h="full" style={{ aspectRatio: "1" }} mb={6}>
              <Flex flexDir="column" justifyContent="center" h="full">
                <Box>
                  <Image
                    src={image}
                    layout={"responsive"}
                    width={"100%"}
                    height={`${100 / imageAspectRatio}%`}
                    alt="img"
                  />
                </Box>
              </Flex>
            </Box>
            <Text as="span" overflow={"auto"} {...descriptionProps}>
              {description}
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
