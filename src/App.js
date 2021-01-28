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
                <div>
                    <p>At Red Eye Media we want you to learn and improve in order to become a successful developer.</p>
                </div>
            </div>
        </div>
    );
}

export default App;
