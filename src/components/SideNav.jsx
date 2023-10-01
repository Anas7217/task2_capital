import { Avatar, Box, Flex, HStack, Heading, Icon, Img, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import { RiDashboardLine } from "react-icons/ri"  // Assuming you have the correct icon component
// import { BsArrowDownUp } from "react-icons/bs"
// import { BiSupport } from "react-icons/bi"
// import {FaBars} from "react-icons/fa"
// import bars from "bars.svg"






const SideNav = () => {
    const navLinks = [
        {
            img: "/assests/homeTask2.svg",
            text: "anas",
            link: "/"
        },
        {
            img: "/assests/group_task2.svg",
            text: "anas",
            link: "/"
        },
        {
            img: "/assests/box_right.svg",
            text: "anas",
            link: "/"
        },
        {
            img: "/assests/share.svg",
            text: "anas",
            link: "/"
        },
        {
            img: "/assests/frame.svg",
            text: "anas",
            link: "/"
        },
        {
            img: "/assests/notebook.svg",
            text: "anas",
            link: "/"
        },
        {
            img: "/assests/heart.svg",
            text: "anas",
            link: "/"
        },
        {
            img: "/assests/left_arrow.svg",
            text: "anas",
            link: "/"
        },




    ];
    return (
        <Stack boxShadow={{ base: "none", lg: "lg" }} w={"4.5rem"}  justifyContent={'space-between'}  bg={"#fffff"} py={6} px={6} >
            <Box display={'flex'} flexDirection={'column'} gap={8} >

                <Box > <Avatar  size={"xl"} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></Box>
                <Box display={'flex'} flexDirection={"column"} gap={6}  >
                   
                     {navLinks.map((nav, index) => (
                            <Link to={nav.link}>


                              <Box>
                                 <Img src={nav.img} w={12} h={12}></Img>
                                </Box>  
                                
                            </Link>
                        ))}
                </Box>
            </Box>
            <Box display={'flex'} flexDir={'column'} gap={6} >
                 <Img src='/assests/setting.svg' w={12} h={12} />
                 <Avatar size="sm" name="Asif Shiekh" bg='#D7E5FD'  />      
            </Box>


          
        </Stack>
    )
}

export default SideNav