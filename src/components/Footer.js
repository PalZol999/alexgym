import "./FooterStyles.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>AlexTraining</h1>
          <p>Come to move...</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
          <a href="/">ChangeLog</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
