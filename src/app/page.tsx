"use client"
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import Image from "next/image";
import App from "./App";
import people from "./data/data";
import { useState } from "react";
import data0 from "../../public/300 (1).jpg"


export default function Home() {
  const [expdata, setExpData] = useState(people)
  const [singleObj, setSingleObj] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    percentage: 70, 
    behavioral: 60, 
    communication: 50, 
    situationHandling: 80,
    experience: "5 years in sales",
    hobbies: ["reading", "hiking"],
    introduction: "Experienced sales professional with a passion for reading and hiking.",
    avatar: data0
  });
  return (
    <ChakraProvider theme={theme}>
      <App expdata={expdata} singleobj={singleObj} setSingleObj={setSingleObj} setExpData={setExpData} />
    </ChakraProvider>
  );
}
