import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h3 className="gradient__text">
          Do you want to step in to the future before others
        </h3>
        <button> Request Early Access</button>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container__image">
          <img src={logo} alt="logo" />
          <p> Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-container__links">
          <h3>Links</h3>
          <p>
            <a href="#Overons">Overons</a>
          </p>
          <p>
            <a href="#Social Media">Social Media</a>
          </p>
          <p>
            <a href="#Counters">Counters</a>
          </p>
          <p>
            <a href="#Contact">Contact</a>
          </p>
        </div>
        <div className="gpt3__footer-container__company">
          <h3>Company</h3>
          <p>
            <a href="#Terms & Conditions">Terms & Conditions</a>
          </p>
          <p>
            <a href="#Privacy">Privacy</a>
          </p>
          <p>
            <a href="#Contact">Contact</a>
          </p>
        </div>
        <div className="gpt3__footer-container__git">
          <h3>Get in touch</h3>
          <p>
            <a href="#Crechterwoord K12 182 DK Alknjkcb">
              Crechterwoord K12 182 DK Alknjkcb
            </a>
          </p>
          <p>
            <a href="#085-132567">085-132567</a>
          </p>
          <p>
            <a href="#info@payme.net">info@payme.net</a>
          </p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <h4>© 2021 GPT-3. All rights reserved.</h4>
      </div>
    </div>
  );
}

export default Footer;
