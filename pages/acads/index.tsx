import { Center, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { NextPageWithLayout } from "_/global";
import Link from "../../src/components/Link";

const Academics: NextPageWithLayout = () => {
  return (
    <Center>
      <VStack w="full">
        <Link href="/acads">
          <Heading>Academics</Heading>
        </Link>
        <List pt="10">
          <ListItem alignItems="center" display="flex" fontSize="19" mb="5">
            <ListIcon as={MdSchool} w="7" h="7" />
            <Link href="https://iith.ac.in" isExternal>
              <Text fontWeight="bold">IIT Hyderabad</Text>
            </Link>
            &nbsp;(B. Tech) - Electrical Engineering and Engineering Science
          </ListItem>
          <ListItem alignItems="center" display="flex" fontSize="19" mb="5">
            <ListIcon as={FaUniversity} w="7" h="7" />
            <Link href="http://www.velociity.co.in" isExternal>
              <Text fontWeight="bold">VelocIITy Jr. College (defunct)</Text>
            </Link>
            &nbsp;(12th) - Physics, Chemistry and Math
          </ListItem>
          <ListItem alignItems="center" display="flex" fontSize="19" mb="5">
            <ListIcon as={FaSchool} w="7" h="7" />
            <Link href="http://dilsukhnagarpublicschools.com" isExternal>
              <Text fontWeight="bold">Dilshuknagar Public School</Text>
            </Link>
            &nbsp;(10th) - Telangana Board of Secondary School Education
          </ListItem>
        </List>
      </VStack>
    </Center>
  );
};

export default Academics;
