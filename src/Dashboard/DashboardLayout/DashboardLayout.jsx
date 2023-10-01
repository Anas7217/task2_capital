import { Box, Center, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import SideNav from '../../components/SideNav'
import Oppitunity from '../../components/Oppitunity'
import Aaliyah from '../../components/Aaliyah'

const DashboardLayout = ({children}) => {
  console.log(children)
  return (
       <Container flexGrow={1} bg={"#F9FAFF"} h="4011px">

          <Flex m={8} gap={8}>
            <Oppitunity />
            {children}
            {/* <Aaliyah /> */}
            

          </Flex>

       </Container>
  )
}

export default DashboardLayout