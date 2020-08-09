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
    <div className="container">
      <h1 className="logo">
        <a title="Voever" href="/">
          <span className="screen-reader-text">Voever</span>
          <img src={logo} alt="voever.com" />
        </a>
      </h1>
      <div className="content">
        <h2 className="tagline">coming up</h2>
        <p className="description">
          We're creating something exciting in the house and about to launch
          soon. Thank you so much for your interest
        </p>
      </div>
      <ul className="contacts">
        <li>
          <a
            title="Instagram"
            href="https://instagram.com/voever.studio?igshid=1ahik7usnuxai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="screen-reader-text">Instagram</span>
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a
            title="Youtube"
            href="https://www.youtube.com/channel/UCvQt5EHKxby2u8hHx3S7q5w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="screen-reader-text">Youtube</span>
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li>
          <a
            title="TikTok"
            href="https://vt.tiktok.com/yjQGuG/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="screen-reader-text">TikTok</span>
            <img src={tiktok} alt="tiktok" />
          </a>
        </li>
        <li>
          <a title="Phone" href="tel: +6281296921392">
            <span className="screen-reader-text">Phone</span>
            <img src={phone} alt="phone" />
          </a>
        </li>
        <li>
          <a
            title="Mail"
            href="mailto: voeverstudio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="screen-reader-text">Mail</span>
            <img src={email} alt="email" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
