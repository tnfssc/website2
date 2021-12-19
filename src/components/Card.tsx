import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue as colorModeValue,
  HeadingProps,
  TextProps,
  BoxProps,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
  Flex,
} from "@chakra-ui/react";

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
        maxW={"369px"}
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
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} flexGrow={1}>
          <Heading color={colorModeValue("gray.700", "white")} fontSize={"2xl"} fontFamily={"body"} {...titleProps}>
            {title}
          </Heading>
          <Text mt="1" as="span" color={"gray.500"} maxH="10" overflow={"hidden"} {...descriptionProps}>
            {description}
          </Text>
          <Link mt="4" onClick={onOpen}>
            Read more
          </Link>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader {...titleProps}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg={"white"} pos="relative" w="full">
              <Image src={image} layout={"responsive"} width={"100%"} height={"100%"} alt="img" />
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
