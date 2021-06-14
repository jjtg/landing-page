import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Box,
  Button,
} from "@chakra-ui/react";
import "./Newsletter.css";
import GdprModal from "./GdprModal";

const Newsletter = () => {
  const [userAgreementValue, setUserAgreementValue] = useState(false);
  const [buttonWasClicked, setButtonWasClicked] = useState(false);
  const [emailvalue, setEmailValue] = useState("");
  const [seeCustomerAgreement, setSeeCustomerAgreement] = useState(false);

  const handleUserAgreementCheckbox = () => {
    setUserAgreementValue(!userAgreementValue);
    console.log("useragreement value:", userAgreementValue);
  };

  const handleEmailValueOnChange = (event: { target: { value: string } }) => {
    console.log("emailvalue:", emailvalue);
    setEmailValue(event.target.value);
  };

  const handleNewsletterSignup = () => {
    const emailObject = { emailValue: emailvalue };
    try {
      axios
        .post("https://newsletterbackend.herokuapp.com/newsletter", emailObject)
        .then((data) => console.log("data from post request:", data))
        .catch((err) => console.log("error from post request:", err));
    } catch (err) {
      console.error("GG", err);
    }
    setButtonWasClicked(true);
  };

  const handleOpenCustomerAgreement = () => {
    setSeeCustomerAgreement(true);
  };

  return (
    <Box bg="#fff" p={4} maxW="560px" mt="30px" mb="30px" borderRadius="5px">
      {buttonWasClicked ? (
        <h1>Thank you!</h1>
      ) : (
        <FormControl id="email">
          <FormLabel>
            Sign up to our newsletter and get notified when we launch our first
            complete developer course.
          </FormLabel>
          <Input
            value={emailvalue}
            type="email"
            onChange={handleEmailValueOnChange}
          />
          <div className="customerAgreementContainer">
            <input
              checked={userAgreementValue}
              defaultChecked={false}
              type="checkbox"
              onChange={handleUserAgreementCheckbox}
            />
            <p className="paragraph">
              I confirm that I have read and accepted the
              <span
                onClick={handleOpenCustomerAgreement}
                className="customerAgreementLink"
              >
                {" "}
                privacy policy
              </span>
            </p>
          </div>
          <Button
            onClick={handleNewsletterSignup}
            bg="#5a2ab2"
            color="white"
            mt="20px"
            isDisabled={!userAgreementValue || emailvalue === ""}
          >
            Sign up
          </Button>
          <FormHelperText color="black">
            By signing up to our newsletter you need to agree to our privacy
            policy.
          </FormHelperText>
        </FormControl>
      )}
      <GdprModal
        seeCustomerAgreement={seeCustomerAgreement}
        setSeeCustomerAgreement={setSeeCustomerAgreement}
      />
    </Box>
  );
};

export default Newsletter;
