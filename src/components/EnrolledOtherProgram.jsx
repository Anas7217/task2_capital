import { Box, Divider, HStack, Img, Stack, Tag, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'

const EnrolledOtherProgram = () => {
    return (
        <Box p={6}>
            <Stack>
                <Box>
                    <Text fontSize={"14px"} fontWeight={"600"}>
                        Enrolled Other Programs
                    </Text>
                </Box>
                <Box py={4}>
                    <HStack gap={4}>
                        <Box>
                            <Img src="/assests/swatches_pallete.svg" />
                        </Box>
                        <Box width={"100%"}>
                            <Stack>
                                <HStack justify={'space-between'}>
                                    <Text fontSize={"14px"} fontWeight={500}>Misk Internship</Text>
                                    <Tag
                                        size={"sm"}
                                        // key={size}
                                        borderRadius='full'
                                    
                                        bg={'#DBF5D3'}
                                        // colorScheme='#9DDC89'
                                        px={4}
                                        py={"2px"}
                                       
                                    >
                                        <TagLabel color={"#087B2F"} fontSize={"9px"} fontWeight={400}>Active</TagLabel>
                                    </Tag>
                                </HStack>
                                <Text fontSize={'12px'} fontWeight={300}>Currently At Video Task</Text>


                            </Stack>
                        </Box>
                    </HStack>
                </Box>
                <Box py={4}>
                    <HStack gap={4}>
                        <Box>
                            <Img src="/assests/swatches_pallete.svg" />
                        </Box>
                        <Box width={"100%"}>
                            <Stack>
                                <HStack justify={'space-between'}>
                                    <Text fontSize={"14px"} fontWeight={500}>Summer Internship</Text>
                                    <Tag
                                        size={"sm"}
                                        // key={size}
                                        borderRadius='full'
                                    
                                        bg={'#FFECEA'}
                                        // colorScheme='#9DDC89'
                                        px={4}
                                        py={"2px"}
                                       
                                    >
                                        <TagLabel color={"#FC402B"} fontSize={"9px"} fontWeight={400}>Disqaulified</TagLabel>
                                    </Tag>
                                </HStack>
                                <Text fontSize={'12px'} fontWeight={300}>Currently At Video Task</Text>


                            </Stack>
                        </Box>
                    </HStack>
                </Box>
                <Box py={4}>
                    <HStack gap={4}>
                        <Box>
                            <Img src="/assests/swatches_pallete.svg" />
                        </Box>
                        <Box width={"100%"}>
                            <Stack>
                                <HStack justify={'space-between'}>
                                    <Text fontSize={"14px"} fontWeight={500}>XYZ Internship</Text>
                                    <Tag
                                        size={"sm"}
                                        // key={size}
                                        borderRadius='full'
                                    
                                        bg={'#FFECEA'}
                                        // colorScheme='#9DDC89'
                                        px={4}
                                        py={"2px"}
                                       
                                    >
                                        <TagLabel color={"#FC402B"} fontSize={"9px"} fontWeight={400}>Disqaulified</TagLabel>
                                    </Tag>
                                </HStack>
                                <Text fontSize={'12px'} fontWeight={300}>Currently At Video Task</Text>


                            </Stack>
                        </Box>
                    </HStack>
                </Box>
                <Box py={4}>
                    <HStack gap={4}>
                        <Box>
                            <Img src="/assests/swatches_pallete.svg" />
                        </Box>
                        <Box width={"100%"}>
                            <Stack>
                                <HStack justify={'space-between'}>
                                    <Text fontSize={"14px"} fontWeight={500}>London Internship</Text>
                                    <Tag
                                        size={"sm"}
                                        // key={size}
                                        borderRadius='full'
                                    
                                        bg={'#DBF5D3'}
                                        // colorScheme='#9DDC89'
                                        px={4}
                                        py={"2px"}
                                       
                                    >
                                        <TagLabel color={"#087B2F"} fontSize={"9px"} fontWeight={400}>Active</TagLabel>
                                    </Tag>
                                </HStack>
                                <Text fontSize={'12px'} fontWeight={300}>Currently At Video Task</Text>


                            </Stack>
                        </Box>
                    </HStack>
                </Box>
                    
                

            </Stack>
        </Box>
    )
}

export default EnrolledOtherProgram