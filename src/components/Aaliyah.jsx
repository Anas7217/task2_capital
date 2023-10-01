import { Avatar, Box, Tag, Divider, Flex, HStack, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Link as ChakraLink } from "@chakra-ui/react";
import PersonalInformation from './PersonalInformation';
import Eduaction from './Eduaction';
import WorkExperience from './WorkExperience';
import Resume from './Resume';
import AdditionalQuestion from './AdditionalQuestion';
import EnrolledOtherProgram from './EnrolledOtherProgram';
import data from './data';

const Aaliyah = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);


  const nameParam = queryParams.get('name');
  const locParam = queryParams.get('loc');
  const studyParam = queryParams.get('study');
  const { id } = useParams();
  const fetchDataById = (id) => {
    const item = data.find((item) => item.id === id);
    return item;
  };

  // Example usage:
  const itemById = fetchDataById(id); // Fetch data for id "2"

  return (
    <Box bg={"#F9FAFF"} display={"flex"} flexGrow={1} h={"960px"}>
      {/* {
        data.map((item) => (
          <Box key={item.id}>
            {item.name}
            {item.id}
          </Box>
        ))
      } */}
      {/* {itemById?.name} */}

      <Stack width={"100%"}>
        <Box py={6} px={4} bg={'white'}>

          <HStack gap={6}>
            <Box>
              <Avatar name={itemById?.name} src='/assests/girl.jpg' />
            </Box>
            <Box width={"100%"} display={'flex'} flexDir={"column"} gap={4}>
              <Stack>
                <HStack gap={6}>

                  <Text fontSize={"14px"} fontWeight={600}>{itemById?.name}</Text>
                  <HStack gap={2.5} color={"#6B6B6B"} fontSize={"8px"} fontWeight={500}>
                    <Tag bg={'#F3FAFC'}  >New York</Tag>
                    <Tag bg={'#F3FAFC'} >Marketing</Tag>
                    <Tag bg={'#F3FAFC'} >London</Tag>
                  </HStack>
                </HStack>
                <HStack fontSize={"10px"} fontWeight={300}>
                  <Text>{itemById?.loc}</Text>
                  <Divider orientation='vertical' />
                  <Text>aaliyahs@gmail.com</Text>
                  <Text>+00 000 000 0000</Text>
                </HStack>
                <HStack gap={2.5} color={"#6B6B6B"} fontSize={"8px"} fontWeight={500}>
                  <Text>{itemById?.name}</Text>
                  <Tag bg={'#F3FAFC'} >#top_candidate</Tag>
                  <Tag bg={'#F3FAFC'} gap={2} >
                    <Text>#marketing_june</Text>
                    <Img src='/assests/cross_white.svg' />
                  </Tag>
                  <Tag bg={'#F3FAFC'} gap={1}  >
                    <Img src='/assests/plus_white.svg' />
                    <Text>#Add tag</Text>
                  </Tag>

                </HStack>
              </Stack>
            </Box>
            <Box w={"189px"}>
              <Stack pl={4} pr={2} py={2} >
                <HStack justify={"space-between"}>
                  <Text fontSize={"14px"} fontWeight={500}>Overall Score</Text>
                  <Tag color={'#6B6B6B'} bg={"#F3FAFC"}>7</Tag>
                </HStack>
                <Text textAlign={"right"} color={"#A8A8A8"} fontSize={"10px"} fontWeight={275}>
                  Applied on 12 June 2023
                </Text>
              </Stack>
            </Box>
          </HStack>

        </Box>
        <Box px={6}>

          <HStack justify={"space-between"} fontSize={"14px"} fontWeight={600}>
            <ChakraLink
              to="/:id/profile"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "2px", // Adjust the thickness as needed
                textDecorationColor: "#0557E5",
                color: "#0557E5",
                textDecorationLine: "22px",


              }}
            >
              <Text fontSize="xl">Profile</Text>
            </ChakraLink>
            <ChakraLink
              to="/"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "2px", // Adjust the thickness as needed
                textDecorationColor: "blue",
                color: "blue"
              }}
            >
              <Text fontSize="xl">Video</Text>
            </ChakraLink>
            <ChakraLink
              to="/"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "2px", // Adjust the thickness as needed
                textDecorationColor: "blue",
                color: "blue"
              }}
            >
              <Text fontSize="xl">Evaluation</Text>
            </ChakraLink>
            <ChakraLink
              to="/"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "2px", // Adjust the thickness as needed
                textDecorationColor: "blue",
                color: "blue"
              }}
            >
              <Text fontSize="xl">Placement</Text>
            </ChakraLink>
            <ChakraLink
              to="/"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "2px", // Adjust the thickness as needed
                textDecorationColor: "blue",
                color: "blue"
              }}
            >
              <Text fontSize="xl">Compliance</Text>
            </ChakraLink>
            <ChakraLink
              to="/"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "2px", // Adjust the thickness as needed
                textDecorationColor: "blue",
                color: "blue"
              }}
            >
              <Text fontSize="xl">Notes</Text>
            </ChakraLink>
          </HStack>
        </Box>
        <PersonalInformation />
        <Eduaction />
        <WorkExperience />
        <Resume />
        <AdditionalQuestion />
        <EnrolledOtherProgram />

      </Stack>

    </Box>
  )
}

export default Aaliyah