import React from "react";

import Logo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <img src={Logo} alt="voever.com" />
        <div className="content">
          <h2 className="tagline">coming up</h2>
          <p className="description">
            Hold tight as we get our working robots together and produce the
            most astonishing product ever.
          </p>
        </div>
        <ul>Social Media</ul>
      </div>
    </div>
  );
}

export default App;
