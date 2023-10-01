import React from 'react'
import SideNav from '../components/SideNav'
import DashboardLayout from './DashboardLayout/DashboardLayout'
import { Box, Flex } from '@chakra-ui/react'


const Dashboard = ({children}) => {
  return (
     <Flex  w={"1440px"} h={"1024px"}>
        <SideNav />
        <DashboardLayout children={children}/>
        
        
     </Flex>
  )
}

export default Dashboard