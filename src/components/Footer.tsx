import { Icon, IconProps } from "@chakra-ui/icons";
import { Box, Center, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from "./Link";

type SocialIconsProps = {
  size?: IconProps["w"];
  icon: React.FC;
  href: string;
};

const SocialIcon: React.FC<SocialIconsProps> = ({ href = "#", icon, size = "10" }) => (
  <Link href={href} isExternal>
    <Icon as={icon} w={size} h={size} />
  </Link>
);

export const FooterHeight = "133.5px";

export default function Footer() {
  return (
    <footer>
      <Box borderTop="1px" pt="5">
        <Center>
          <HStack spacing="5" justifyContent="center">
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/acads">Academics</Link>
            <Link href="/hobbies">Hobbies</Link>
          </HStack>
        </Center>
      </Box>
      <Box py="5">
        <Center>
          <HStack spacing="5">
            <SocialIcon href="https://www.linkedin.com/in/tnfssc" icon={FaLinkedin} />
            <SocialIcon href="https://twitter.com/tnfssc" icon={FaTwitter} />
            <SocialIcon href="mailto:tnfssc@gmail.com" icon={MdMail} />
            <SocialIcon href="https://www.youtube.com/channel/UCuB3HpVwVpNyaVxjr8k5Geg" icon={FaYoutube} />
            <SocialIcon href="https://github.com/tnfssc" icon={FaGithub} />
          </HStack>
        </Center>
      </Box>
    </footer>
  );
}
