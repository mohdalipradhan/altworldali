"use client"

import { Avatar, Box, Button, Flex, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { faCube, faFile, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'


interface AppProps {
    expdata: any[];
    singleobj: any;
    setSingleObj: any;
}
const MiddleHandSide: React.FC<AppProps> = ({ expdata, singleobj, setSingleObj }) => {

    const sendSingleObject = (item: any) => {
        setSingleObj(item)
        setSelectedMenu(item.name)
    }

    const [selectedMenu, setSelectedMenu] = useState(singleobj.name);
    console.log(expdata)


    useEffect(()=>{
        console.log("hello")
    },[selectedMenu])

    return (
        <Flex flex={4}>
            <Card width="1000px" maxW='md'>
                <CardHeader width="100%">
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Box display="flex" justifyContent="space-between" width="100%">
                                <Heading size='sm' >Sales BDE</Heading>


                                <Flex marginRight="-28px" align="center" gap={2} _hover={{ bg: "white" }}>
                                    <Text color="#05AB65" fontWeight={700}> Active</Text>
                                    <Flex p={3} bg="white" width="20px" height="20px" align="center" justify="center" border="1px solid lightgray" borderRadius="6px">
                                        <FontAwesomeIcon color="black" icon={faPen} />
                                    </Flex>
                                </Flex>

                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                        />
                    </Flex>
                </CardHeader>
                <CardBody marginTop="-23px" display="flex" flexDir="column" gap={4}>
                    <Stack>
                        <li style={{ listStyle: "none" }}>
                            <Flex justify="space-between">
                                <Text color="#79879C" fontWeight={700}>Assignment Link</Text>
                                <Text fontSize="14px" fontWeight={500} color="#2E88FF">httplink.com</Text>
                            </Flex>
                        </li>
                        <li style={{ listStyle: "none" }}>
                            <Flex justify="space-between">
                                <Text color="#79879C" fontWeight={700}>Assignment Hour</Text>
                                <Text fontWeight={600} fontSize="14px" color="#79879C">3 hours</Text>
                            </Flex>
                        </li>
                        <li style={{ listStyle: "none" }}>
                            <Flex justify="space-between">
                                <Text color="#79879C" fontWeight={700}>Assignment Ends at</Text>
                                <Text fontWeight={600} fontSize="14px" color="#79879C">11 March 2024</Text>
                            </Flex>
                        </li>



                    </Stack>

                    <Flex gap={4}>
                        <Button display="flex" gap={2} bg="white" borderRadius="4px" border="1px solid lightgray"><FontAwesomeIcon icon={faCube} />To Review</Button>
                        <Button display="flex" gap={2} bg="white" borderRadius="4px" border="1px solid lightgray"><FontAwesomeIcon icon={faFile} />Shortlisted</Button>
                    </Flex>


                    <Stack>

                        <Flex textTransform="uppercase" fontWeight={700} color="#8D99AB" justify="space-between">
                            <Text fontSize="14px">Candidate</Text>
                            <Text fontSize="14px">Score</Text>
                        </Flex>

                        {
                            expdata.map((item) => (
                                <Flex cursor="pointer" background={selectedMenu === item.name ? '#F0F0F0' : "white"} onClick={() => sendSingleObject(item)} align="center" justify="space-between" width="100%">
                                    <Flex align="center" gap={2}>
                                        <Avatar borderRadius="9px" name='Segun Adebayo' src={item.avatar.src} />
                                        <Stack justify="center" gap={0}>
                                            <Text fontSize="15px" fontWeight={700}>{item.name}</Text>
                                            <Text fontWeight={500} fontSize="12px" color="#7C8A9F">{item.email}</Text>
                                        </Stack>
                                    </Flex>
                                    <Flex>
                                        <Text color="#32BE5C" fontWeight={700}>{item.percentage}%</Text>
                                    </Flex>
                                </Flex>
                            ))
                        }


                    </Stack>
                </CardBody>



            </Card>
        </Flex>
    )
}

export default MiddleHandSide
