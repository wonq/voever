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
          <a title="Voever" href="/">
            <img src={logo} alt="voever.com" />
          </a>
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
            <a
              href="https://instagram.com/voever.studio?igshid=1ahik7usnuxai"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCvQt5EHKxby2u8hHx3S7q5w"
              target="_blank"
            >
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://vt.tiktok.com/yjQGuG/" target="_blank">
              <img src={tiktok} alt="tiktok" />
            </a>
          </li>
          <li>
            <a href="tel: +6281296921392" target="_blank">
              <img src={phone} alt="phone" />
            </a>
          </li>
          <li>
            <a href="mailto: voeverstudio@gmail.com" target="_blank">
              <img src={email} alt="email" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
