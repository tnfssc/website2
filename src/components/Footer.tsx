import { Icon, IconProps } from "@chakra-ui/icons";
import { Box, Center, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
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

const navItems: { label: string; href: string }[] = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Academics",
    href: "/acads",
  },
  {
    label: "Hobbies",
    href: "/hobbies",
  },
];

const socialIcons: { href: string; icon: React.FC }[] = [
  {
    href: "https://www.linkedin.com/in/tnfssc",
    icon: FaLinkedin,
  },
  {
    href: "https://twitter.com/tnfssc",
    icon: FaTwitter,
  },
  {
    href: "mailto:tnfssc@gmail.com",
    icon: MdMail,
  },
  {
    href: "https://www.youtube.com/channel/UCuB3HpVwVpNyaVxjr8k5Geg",
    icon: FaYoutube,
  },
  {
    href: "https://github.com/tnfssc",
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer>
      <Box borderTop="1px" pt="5">
        <Center>
          <Wrap spacing="5" justify="center">
            {navItems.map(item => (
              <WrapItem key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </Box>
      <Box py="5">
        <Center>
          <Wrap spacing={5} justify={"center"}>
            {socialIcons.map(item => (
              <WrapItem key={item.href}>
                <SocialIcon {...item} />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      </Box>
    </footer>
  );
}
