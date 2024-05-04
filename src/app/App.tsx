"use client"


import { Divider, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import LeftHandSide from './LeftHandSide'
import MiddleHandSide from './MiddleHandSide'
import RightHandSide from './RightHandSide'
import NavBar from './NavBar'

interface Person {
  name: string;
  email: string;
}

interface AppProps {
  expdata: Person[];
}

const App: React.FC<AppProps> = ({ expdata,singleobj, setSingleObj }) => {
    console.log(expdata, "Something")
    return (
        <Stack align="center" p={0} height="100vh" bg="#F8F9FA">
            <Stack width="95%">
                <Flex>
                    <NavBar />
                </Flex>

                <Flex gap={3}>
                    <LeftHandSide />
                    <Flex gap={4}>
                        <MiddleHandSide singleobj={singleobj} setSingleObj={setSingleObj} expdata={expdata}/>
                        <RightHandSide singleobj={singleobj}/>
                    </Flex>
                </Flex>
            </Stack>
        </Stack>
    )
}

export default App
