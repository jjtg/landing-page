import "./App.css";
// import logo from "./logo.png";
import redEyeNew from "./redEyeNew.png";
import React from "react";
import Newsletter from "./components/Newsletter/Newsletter";
import { HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AspectRatio } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="logoHeaderBackgroundContainer">
          <div className="logo">
            <a
              href="https://redeyemedia.io"
              target="_blank"
              rel="noreferrer"
              className="logo"
            >
              <img src={redEyeNew} alt="logo" />
            </a>
          </div>
        </div>
        <div className="headerContainer">
          <h1 className="title">Welcome to Red Eye Media</h1>
          <span className="motto">
            Everything you need to get that first developer job
          </span>
        </div>
        <AspectRatio
          ratio={16 / 9}
          minW="350px"
          maxW="550px"
          width="100%"
          mt="50px"
        >
          <iframe
            title="React for beginners - #1 Components"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/El6h6A3odaQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>

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
        <Newsletter />
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
      </div>
    </div>
  );
}

export default App;
