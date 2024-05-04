import { Button, Divider, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { faHouse, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IoFilterCircleOutline } from 'react-icons/io5'

const LeftHandSide = () => {
  return (
    <Stack flex={2} >
      <Divider bg="yellow"/>
      <Flex gap={2} align="center" marginLeft={5} width="100%" p={4}>
        <Flex p={1}>
          <FontAwesomeIcon color='#1EC3B3' width="15px" icon={faHouse} />
        </Flex>
        <Text flexBasis="flex-start" fontWeight={600} fontSize="13px" textAlign="center">Dashboard</Text>
      </Flex>

      <Flex  justify="center" width="100%">
        <Stack p={2} bg="#4FD1C5" borderRadius="10px" width="75%">
          <Flex bg="white" p="3px" width="24px" justify="center" borderRadius="4px"><FontAwesomeIcon  icon={faPlus} /></Flex>
          <Text fontWeight={600} fontSize="15px" color="white">New Assignment?</Text>
          <Text fontSize="13px" color="white">Select from pre-defined questions to have a quick turnaround</Text>
          <Flex width="100%" >
            <Button width="100%" fontSize="14px" >Create the Assignment</Button>
          </Flex>
        </Stack>
      </Flex>


    </Stack>
  )
}

export default LeftHandSide
