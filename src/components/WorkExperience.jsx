import { Box, Divider, HStack, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const WorkExperience = () => {
  return (
    <Box p={6} bg={'white'}>
            <Stack gap={4} >
                <Box fontWeight={600} fontSize={"14px"}>
                    <Text>Work Experience</Text>
                </Box>
                <Box py={4}>
                    <HStack gap={4}>
                        <Box>
                            <Img src="/assests/suitcase.svg" />
                        </Box>
                        <Box >
                            <Stack gap={2}>
                                <Text fontSize={"14px"} fontWeight={500}>Cyber Security Intern</Text>
                                <HStack gap={2}>
                                    <Text fontSize={"14px"} fontWeight={400}>Crop Training</Text>
                                    <Divider borderColor={'red'} orientation='vertical' />
                                    <Box display={"flex"} gap={2}color=" #B8B8B8" fontSize={"14px"} fontWeight={300}>
                                        <Text>Saudi Arabia</Text>
                                        <Text>Jan 2022</Text>
                                        <Text>Jan 2023</Text>
                                    </Box>
                                </HStack>
                            </Stack>
                        </Box>

                    </HStack>
                </Box>
                <Box py={4}>
                    <HStack gap={4}>
                        <Box>
                            <Img src="/assests/suitcase.svg" />
                        </Box>
                        <Box >
                            <Stack gap={2}>
                                <Text fontSize={"14px"} fontWeight={500}>Cyber Security Intern</Text>
                                <HStack gap={2}>
                                    <Text fontSize={"14px"} fontWeight={400}>Crop Training</Text>
                                    <Divider borderColor={'red'} orientation='vertical' />
                                    <Box display={"flex"} gap={2}color=" #B8B8B8" fontSize={"14px"} fontWeight={300}>
                                        <Text>Saudi Arabia</Text>
                                        <Text>Jan 2022</Text>
                                        <Text>Jan 2023</Text>
                                    </Box>
                                </HStack>
                            </Stack>
                        </Box>

                    </HStack>
                </Box>
                
                
            </Stack>


        </Box>
  )
}

export default WorkExperience