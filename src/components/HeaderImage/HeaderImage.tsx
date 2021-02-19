import React from 'react'
import redEyeNew from "../../redEyeNew.png";
import "./HeaderImage.css";

const HeaderImage = () => {
    return (
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
    )
}

export default HeaderImage
