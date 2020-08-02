import React from "react";

import logo from "./images/logo.svg";
import instagram from "./images/icon-instagram.svg";
import youtube from "./images/icon-youtube.svg";
import tiktok from "./images/icon-tiktok.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <span className="logo">
          <img src={logo} alt="voever.com" />
        </span>
        <div className="content">
          <h2 className="tagline">coming up</h2>
          <p className="description">
            Hold tight as we get our working robots together and produce the
            most astonishing product ever.
          </p>
        </div>
        <ul className="contacts">
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={youtube} alt="youtube" />
          </li>
          <li>
            <img src={tiktok} alt="tiktok" />
          </li>
          <li>
            <img src={phone} alt="phone" />
          </li>
          <li>
            <img src={email} alt="email" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
