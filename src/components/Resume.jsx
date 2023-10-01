import { Box, HStack, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Resume = () => {
  return (
    <Box p={6} bg={'white'}>
        <Stack gap={4}>
            <Box fontSize={"14px"} fontWeight={600}>
                <HStack justify={"space-between"}>
                <Text>Resume</Text>
                <HStack gap={"20px"}>
                    <Img src="/assests/eye.svg" />
                    <Img src="/assests/file_download.svg" />
                </HStack>

                </HStack>
            </Box>
            <Box h={"901px"} bg={"#F1F1F1"}>

            </Box>
        </Stack>
    </Box>
  )
}

export default Resume