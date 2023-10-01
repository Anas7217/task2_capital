import { Box, Circle, HStack, Img, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const AdditionalQuestion = () => {
    return (
        <Box p={6} bg={'white'} >
            <Stack gap={8}>
                <Box>
                    <Text>Additional Question</Text>
                </Box>
                <Box h={"auto"} w={"100%"}>
                    <HStack gap={2} >
                        <Box pb={10} px={1} >
                            <Circle bg={"#F1CC04"} size={"12px"}> </Circle>
                        </Box>
                        <Box>

                            <Stack gap={4}>
                                <Box >
                                    <Tag px={4} py={"10px"} h={"23px"} fontSize={"10px"} fontWeight={400} color='#F1CC04' bg={"#FFFBE4"}>Sample Tag</Tag>
                                </Box>
                                <Box>

                                    <Text fontSize={"14px"} fontWeight={300} >What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Text>
                                </Box>
                                <Box p={4} bg={"#F8FAFF"} color={"#216C84"}>

                                    <Text>Dorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                                </Box>
                            </Stack>
                        </Box>

                    </HStack>

                </Box>
                <Box h={"322px"} w={"100%"}>
                    <HStack gap={2} >
                        <Box h={"300px"} pt={"44px"} >
                            <Circle bg={"#9EB8FF"} size={"12px"}> </Circle>
                        </Box>
                        <Box >

                            <Stack gap={4}>
                                <Box width={"100%"}>
                                    <Tag px={4} py={"10px"} h={"23px"} fontSize={"10px"} fontWeight={400} color='#9EB8FF' bg={"#EEF2FF"}>Video upload</Tag>
                                </Box>
                                <Box>

                                    <Text fontSize={"14px"} fontWeight={300} >What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Text>
                                </Box>
                                <Box>
                                    <Img src="/assests/video_image.jpg" />
                                </Box>
                            </Stack>
                        </Box>

                    </HStack>

                </Box>
                <Box h={"auto"} w={"100%"}>
                    <HStack gap={2} >
                        <Box pb={10} px={1} >
                            <Circle bg={"#E48A8F"} size={"12px"}> </Circle>
                        </Box>
                        <Box>

                            <Stack gap={4}>
                                <Box >
                                    <Tag px={4} py={"10px"} h={"23px"} fontSize={"10px"} fontWeight={400} color='#E48A8F' bg={"#FFF6F7"}>Sample Tag</Tag>
                                </Box>
                                <Box>

                                    <Text fontSize={"14px"} fontWeight={300} >What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Text>
                                </Box>
                                <Box p={4} bg={"#F8FAFF"} color={"#216C84"}>

                                    <Text>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</Text>
                                </Box>
                            </Stack>
                        </Box>

                    </HStack>

                </Box>
                <Box h={"auto"} w={"100%"}>
                    <HStack gap={2} >
                        <Box pb={1} pt={3} px={1} >
                            <Circle bg={"#D2FFC5"} size={"12px"}> </Circle>
                        </Box>
                        <Box>

                            <Stack gap={4}>
                                <Box >
                                    <Tag px={4} py={"10px"} h={"23px"} fontSize={"10px"} fontWeight={400} color='#8DB97F' bg={"#F0FFEB"}>Multiple choice</Tag>
                                </Box>
                                <Box>

                                    <Text fontSize={"14px"} fontWeight={300} >What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Text>
                                </Box>
                                <Box  fontSize={"12px"} fontWeight={400} color={"#216C84"} display={'flex'} gap={2}>
                                    <Tag px={4}  variant='solid' borderRadius={"full"} bg={"#F8FAFF"}>New York</Tag>
                                    <Tag px={4} bg={"#F8FAFF"}>New York</Tag>
                                    <Tag px={4} bg={"#F8FAFF"}>New York</Tag>
                                </Box>
                            </Stack>
                        </Box>

                    </HStack>

                </Box>
                <Box h={"auto"} w={"100%"}>
                    <HStack gap={2} >
                        <Box pb={7} px={1} >
                            <Circle bg={"#82E0FF"} size={"12px"}> </Circle>
                        </Box>
                        <Box>

                            <Stack gap={4}>
                                <Box >
                                    <Tag px={4} py={"10px"} h={"23px"} fontSize={"10px"} fontWeight={400} color='#82E0FF' bg={"#F2FCFF"}>Dropdown</Tag>
                                </Box>
                                <Box>

                                    <Text fontSize={"14px"} fontWeight={300} >What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Text>
                                </Box>
                                <Box p={4} bg={"#F8FAFF"} color={"#216C84"}>

                                    <Text>Dorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                                </Box>
                            </Stack>
                        </Box>

                    </HStack>

                </Box>

            </Stack>
        </Box>
    )
}

export default AdditionalQuestion