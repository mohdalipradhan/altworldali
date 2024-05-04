import { Flex, Stack, Text } from '@chakra-ui/react'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NavBar = () => {
  return (
    <Flex p={1} width="100%">
      <Flex marginLeft="38px" gap={2}  justify="flex-start" align="center" flex={2}>
        <FontAwesomeIcon width="16px"  icon={faKeyboard} />
        <Text  fontSize="15px" fontWeight={700}> Hi, AltWorld</Text>
      </Flex>
      <Stack flex={8}>
        <Flex>
          <Text fontSize="13px" color="gray" fontWeight={500}>Pages/</Text>
          <Text fontSize="13px" fontWeight={500}>Assignment</Text>
        </Flex>
        <Text fontWeight={700} fontSize="13px">Sales BDE</Text>
      </Stack>
    </Flex>
  )
}

export default NavBar
