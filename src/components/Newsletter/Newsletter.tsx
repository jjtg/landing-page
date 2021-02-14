import React from 'react'
import {
    FormControl,
    Input,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Button,
  } from "@chakra-ui/react"

const Newsletter = () => {
    return (
        <Box bg="#fff" p={4} maxW="560px" mt="30px" mb="30px" borderRadius="5px">
            <FormControl id="email">
            <FormLabel>Sign up to our newsletter and get a free e-book on all the steps you need to know to become a developer</FormLabel>
            <Input type="email" />
            <Button bg="#5a2ab2" color="white" mt="20px">Sign up</Button>
            <FormHelperText color="black">When you signup, we'll be sending you weekly emails with additional free content.</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default Newsletter
