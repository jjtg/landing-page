import "./App.css";
import React from "react";
import Newsletter from "./components/Newsletter/Newsletter";
import YoutubeVideo from "./components/YoutubeVideo/YoutubeVideo";
import HeaderImage from "./components/HeaderImage/HeaderImage";
import Footer from "./components/Footer/Footer";
import YoutubeButton from "./components/YoutubeButton/YoutubeButton";
import HeaderText from "./components/HeaderText/HeaderText";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <HeaderImage />
        <HeaderText />
        <YoutubeVideo />
        <YoutubeButton />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
