import React, {useState} from 'react'
import {
    FormControl,
    Input,
    FormLabel,
    FormHelperText,
    Box,
    Button,
  } from "@chakra-ui/react"
import "./Newsletter.css";

const Newsletter = () => {
    const [userAgreementValue, setUserAgreementValue] = useState(false);
    const [emailvalue, setEmailValue] = useState("");

    const handleUserAgreementCheckbox = () => {
        setUserAgreementValue(!userAgreementValue);
        console.log("useragreement value:", userAgreementValue);
    }

    const handleEmailValueOnChange = (event: { target: { value: string; }; }) => {
        console.log("emailvalue:", emailvalue);
        setEmailValue(event.target.value);
    }

    return (
        <Box bg="#fff" p={4} maxW="560px" mt="30px" mb="30px" borderRadius="5px">
            <FormControl id="email">
                <FormLabel>Sign up to our newsletter and get a free e-book on all the steps you need to know to become a developer</FormLabel>
                <Input value={emailvalue} type="email" onChange={handleEmailValueOnChange} />
                <div className="customerAgreementContainer">
                    <input checked={userAgreementValue} defaultChecked={false} type="checkbox" onChange={handleUserAgreementCheckbox} />
                        <p className="paragraph">I confirm that I have read and accepted the 
                            <a href="/" className="userAgreementLink"> user agreement</a>
                        </p>
                </div>
                <Button bg="#5a2ab2" color="white" mt="20px" isDisabled={!userAgreementValue || emailvalue === ""}>Sign up</Button>
                <FormHelperText color="black">By signing up to our newsletter you need to agree to our user agreement.</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default Newsletter
