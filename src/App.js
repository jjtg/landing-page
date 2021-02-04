import './App.css';
import logo from './logo.png';
import React from "react";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div>
                    <a href="https://redeyemedia.io" target="_blank" rel="noreferrer">
                        <img src={logo} className="logo" alt="logo"/>
                    </a>
                </div>
                <div className="headerContainer">
                    <h1 className="title">Welcome to Red Eye Media</h1>
                    <span className="motto">- Helping you help yourself ;)</span>
                </div>
                <div className="videoContainer">
                    <iframe title="React for beginners - #1 Components"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/El6h6A3odaQ"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                </div>
                <div>
                    <p>At Red Eye Media we want you to learn and improve in order to become a successful developer.</p>
                </div>
            </div>
        </div>
    );
}

export default App;
