"use client"

import { Avatar, Box, Button, ButtonGroup, Divider, Flex, Heading, IconButton, Image, Progress, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'




interface AppProps {

    singleobj: any;
    expdata: any[];
    setSingleObj: any;
}
const RightHandSide: React.FC<AppProps>  = ({singleobj, expdata, setSingleObj}) => {

    console.log(singleobj)

    return (
        <Flex flex={4}>
            <Card display="flex">
                <CardBody width="700px" gap={4} height="auto" display="flex" flexDir="row" padding={4}>

                    <Stack justify="space-between" width="100%" gap={0}>
                        <Flex align="center" justify="space-between" width="100%">
                            <Flex align="center" gap={2}>
                                <Avatar borderRadius="9px" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                <Stack justify="center" gap={0}>
                                    <Text fontSize="15px" fontWeight={700}>{singleobj.name}</Text>
                                    <Text fontWeight={500} fontSize="12px" color="#7C8A9F">{singleobj.email}</Text>
                                </Stack>
                            </Flex>
                            <Flex>
                                <Text color="#32BE5C" fontWeight={700}>{singleobj.percentage}</Text>
                            </Flex>
                        </Flex>

                        <Stack fontSize="12px" fontWeight={600} color="#8D99AB">
                            <Flex justify="space-between" align="center">
                                <Text>Behavioral</Text>
                                <ProgressBar bgColor={singleobj.behavioral <= 50 ? "#ECB22E" : '#2EBD59' } width='150px' height="17px" completed={singleobj.behavioral} />
                            </Flex>

                            <Flex justify="space-between" align="center">
                                <Text>Communication</Text>
                                <ProgressBar bgColor={singleobj.communication <= 50 ? "#ECB22E" : '#2EBD59' } width='150px' height="17px" completed={singleobj.communication} />
                            </Flex>

                            <Flex justify="space-between" align="center">
                                <Text>Situational handling</Text>
                                <ProgressBar bgColor={singleobj.situationHandling <= 50 ? "#ECB22E" : '#2EBD59' } width='150px' height="17px" completed={singleobj.situationHandling} />
                            </Flex>
                        </Stack>

                        <Stack gap={3}>
                            <Stack>
                                <Text fontWeight={700}>About</Text>
                                <Text color="gray" fontWeight={500} fontSize="12px">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
                            </Stack>

                            <Stack>
                                <Text fontWeight={700}>Experience</Text>
                                <Text color="gray" fontWeight={500} fontSize="12px">{singleobj.experience}</Text>
                            </Stack>

                            <Stack>
                                <Text fontWeight={700}>Hobbies</Text>
                                <Text textTransform="capitalize" color="gray" fontWeight={500} fontSize="12px">{singleobj.hobbies[0]}</Text>
                            </Stack>

                            <Stack>
                                <Text fontWeight={700}>Introduction</Text>
                                <Text color="gray" fontWeight={500} fontSize="12px">{singleobj.introduction}</Text>
                            </Stack>

                        </Stack>

                        <Button color="white" bg="#1EC3B3">Shortlist</Button>
                    </Stack>

                    <Image
                        height="500px"
                        width="300px"
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </CardBody>

            </Card>
        </Flex>
    )
}

export default RightHandSide
