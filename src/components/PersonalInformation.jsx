import React from 'react'
import { Avatar, Box, Tag, Divider, Flex, HStack, Img, Stack, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ChakraLink } from "@chakra-ui/react";


const PersonalInformation = () => {
  return (
    <Box p={6} bg={'white'}>
    <Stack gap={4}>
      <Box fontSize={"14px"} fontWeight={600}>
        <Text>Personal Information</Text>

      </Box>
      <Box>
        <HStack py={2} w={"100%"} >
          <Box w={"50%"} >
            <HStack>
              <Box>
                <Img src='/assests/userCircle.svg' />
              </Box>
              <Box>
                <Stack gap={2}>
                  <Text color={"#5F5F5F"} fontSize={"14px"} fontWeight={400}>Nationality</Text>
                  <Text fontSize={"14px"} fontWeight={500}>Sri Lankan</Text>

                </Stack>
              </Box>
            </HStack>

          </Box>
          <Box w={"50%"}>
            <HStack>
              <Box>
                <Img src='/assests/user_square.svg' />
              </Box>
              <Box>
                <Stack gap={2}>
                  <Text color={"#5F5F5F"} fontSize={"14px"} fontWeight={400}>Nationality</Text>
                  <Text fontSize={"14px"} fontWeight={500}>Sri Lankan</Text>

                </Stack>
              </Box>
            </HStack>

          </Box>


        </HStack>
      </Box>
      <Box>
        <HStack py={2} w={"100%"} >
          <Box w={"50%"} >
            <HStack>
              <Box>
                <Img src='/assests/User02_human.svg' />
              </Box>
              <Box>
                <Stack gap={2}>
                  <Text color={"#5F5F5F"} fontSize={"14px"} fontWeight={400}>Gender</Text>
                  <Text fontSize={"14px"} fontWeight={500}>Female</Text>

                </Stack>
              </Box>
            </HStack>

          </Box>
          <Box w={"50%"}>
            <HStack>
              <Box>
                <Img src='/assests/Calendar.svg' />
              </Box>
              <Box>
                <Stack gap={2}>
                  <Text color={"#5F5F5F"} fontSize={"14px"} fontWeight={400}>Date of Birth</Text>
                  <Text fontSize={"14px"} fontWeight={500}>00-00-0000</Text>

                </Stack>
              </Box>
            </HStack>

          </Box>


        </HStack>
      </Box>

    </Stack>

  </Box>
  )
}

export default PersonalInformation