import { Avatar, Box, Tag, Divider, HStack, Img, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BoxContent from './BoxContent'
import { Link } from 'react-router-dom'
import data from './data'

const Oppitunity = () => {
    const boxtext = [
        {
            name: "Frances R.Kostka",
            loc: "Saudi Arabia",
            study: "Bachelor in Information Technology and Cyber Security",
            link: "/"

        },
        {
            name: "Aaliyah Sanderson",
            loc: "Saudi Arabia",
            study: "Bachelor in Marketing",
            link: "/"

        },
        {
            name: "Michael D.McKee",
            loc: "Saudi Arabia",
            study: "Bachelor in Finance ",
            link: "/"

        },
        {
            name: "Jerry S. Pollock",
            loc: "Saudi Arabia",
            study: "Bachelor in Marketing",
            link: "/"

        },
        // {
        //     name:"Frances R. Kostka",
        //     loc:"Saudi Arabia",
        //     study:"Bachelor in Information Technology and Cyber Security",

        // },
    ]
    return (
        // bg={"#F9FAFF"}
        <Box w={"440px"} h={"960px"} bg={"#F9FAFF"}  >
            <Stack gap={"14px"}  >
                <Box bg={"white"}>
                    <HStack justifyContent={"space-between"} p={4}>
                        <Tag borderRadius='full' bg={"F4F7FB"} color={"black"} size={"sm"}>SIP</Tag>
                        <Text fontSize={'16px'} fontWeight={500}>Opportunity Browsing</Text>
                        <Text fontSize={'16px'} fontWeight={500}>2325</Text>
                        <Img src="/assests/left_arrow.svg" />
                    </HStack>

                </Box>
                <Box bg={"white"}>
                    <HStack p={4}>

                        <InputGroup >
                            <InputLeftElement pointerEvents='none'>
                                {/* <PhoneIcon color='gray.300' /> */}
                                {/* <Img src='/assests/left_arrow.svg' /> */}
                            </InputLeftElement>
                            <Input type='tel' placeholder='search here' />

                        </InputGroup>
                        <Box>
                            <Img src='/assests/kuppi.svg' />
                        </Box>

                    </HStack>


                </Box>
                <Box bg={"white"}>
                    <HStack justifyContent={'space-between'} p={4}>
                        <Img src='/assests/square.svg' />
                        <Divider orientation='vertical' />
                        <HStack>
                            <Text  px color={"blue"}>Qualified</Text>
                            <Tag  borderRadius={"full"} py={"1px"} px={"6px"}fontSize={"10px"} fontWeight={600} color={'#1D4ED8'} bg={"#EDF4FF"}>247</Tag>
                        </HStack>
                        <HStack>
                            <Text>Task</Text>
                            <Tag borderRadius={"full"} py={"1px"} px={"6px"}fontSize={"10px"} fontWeight={600} color={'#22215B'} bg={"#F7F8FD"}>25</Tag>
                        </HStack>
                        <HStack>
                            <Text>Disqaulified</Text>
                            <Tag borderRadius={"full"} py={"1px"} px={"6px"}fontSize={"10px"} fontWeight={600} color={'#22215B'} bg={"#F7F8FD"}>78</Tag>
                        </HStack>
                    </HStack>

                </Box>

                {
                    data.map((item) => (
                        <Link to={`/${item.id}`} key={item.id}>

                            <Box bg={'white'} height={"auto"} w={"100%"} p={4}>
                                <HStack gap={2}>
                                    <Box>
                                        <Img src='/assests/square.svg' />
                                    </Box>
                                    <Box p={4} borderRadius={4} _hover={{ bg: "#FAFCFF" }}>
                                        <HStack gap={6} >
                                            <Box _hover={{ bg: "white" }}>
                                                <Avatar name={item.name} bg='#FAFCFF' color={"#D0E1FF"} size={'lg'} />
                                            </Box>
                                            <Box display={'flex'} flexDir={"column"} gap={2}>
                                                <Text font-family={"Poppins"} fontSize={"14px"} fontWeight={600}>
                                                    {item.name}
                                                </Text>
                                                <Text fontSize={'10px'} fontWeight={500}>
                                                    {item.loc}
                                                </Text>
                                                <HStack gap={2} fontSize={'10px'} fontWeight={300}>
                                                    <Text>
                                                        {item.study}
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


                        </Link>
                    ))
                }
            </Stack>
        </Box>

    )
}

export default Oppitunity