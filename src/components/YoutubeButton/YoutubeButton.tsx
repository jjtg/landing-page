import React from 'react'
import { Button } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import "./YoutubeButton.css";

function YoutubeButton() {
    return (
        <div>
          <div className="youtubeContainer">
            <h2 className="youtubeText">
              For more videos check out our channel!
            </h2>
            <Button colorScheme="red" leftIcon={<FaYoutube />}>
              <a
                href="https://www.youtube.com/channel/UCAgVeIc8xD0ARLDOeN0Frag"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </Button>
          </div>
        </div>
    )
}

export default YoutubeButton
