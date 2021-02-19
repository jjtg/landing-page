import React from 'react'
import { AspectRatio } from "@chakra-ui/react";

const YoutubeVideo = () => {
    return (
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
    )
}

export default YoutubeVideo
