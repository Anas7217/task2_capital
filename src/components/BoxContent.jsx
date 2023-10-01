import { Avatar, Box, Tag, Divider, HStack, Img, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'

const BoxContent = () => {
    return (
        <Box bg={'white'} height={"auto"} w={"100%"} p={4}>
            <HStack gap={2}>
                <Box>
                    <Img src='/assests/square.svg' />
                </Box>
                <Box p={4} borderRadius={4} _hover={{ bg: "#FAFCFF" }}>
                    <HStack gap={6} >
                        <Box _hover={{ bg: "white" }}>
                            <Avatar name='Feroz Raees' bg='#FAFCFF' color={"#D0E1FF"} size={'lg'} />
                        </Box>
                        <Box >
                            <Text font-family={"Poppins"} fontSize={"14px"} fontWeight={600}>
                                Frances R. Kostka
                            </Text>
                            <Text fontSize={'10px'} fontWeight={500}>
                                Saudi Arabia
                            </Text>
                            <HStack gap={2} fontSize={'10px'} fontWeight={300}>
                                <Text>
                                    Bachelor in Information Technology and Cyber Security
                                </Text>
                                <Text>
                                    (2023-2023)
                                </Text>

                            </HStack>
                            <HStack overflow={'hidden'} textOverflow={'ellipsis'} color={"#8492A7"} fontSize={'8px'} fontWeight={400}>
                                <Text >
                                    #top_candidate
                                </Text>
                                <Text as={'p'}>
                                    #top_candidate
                                </Text>

                            </HStack>
                            <HStack gap={2.5} color={"#6B6B6B"} fontSize={"8px"} fontWeight={500}>
                                <Tag bg={'#F3FAFC'} >New York</Tag>
                                <Tag bg={'#F3FAFC'}  >Marketing</Tag>
                                <Tag bg={'#F3FAFC'}  >London</Tag>
                            </HStack>

                        </Box>
                    </HStack>
                </Box>

            </HStack>

        </Box>
    )
}

export default BoxContent