import React from 'react'
import { HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <HStack mt="50px" mb="50px">
          <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
            <a
              href="https://www.facebook.com/Red-Eye-Media-Fullstack-Coaching-101331992002665"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
            <a
              href="https://twitter.com/RedEyeMedia3"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </Button>
        </HStack>
    )
}

export default Footer
