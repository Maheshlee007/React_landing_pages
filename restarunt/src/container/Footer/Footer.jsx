import React, { useState } from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

// import { FooterOverlay, Newsletter } from '../../components';
import { images } from "../../constants";
import "./Footer.css";
import { SubHeading } from "../../components";

const Footer = () => {
  const [email, setemail] = useState("mahesh@");
  return (
    <div className="app__footer  ">
      <div className="app__footer-newsLetter">
        <SubHeading title="NewsLetter" />
        <h1 className="app__footer-heading">Subscribe To Our NewsLetter</h1>
        <p>And never miss latest updates!</p>
        <div className="app__footer-mail">
          <input
            type="text"
            name="email"
            placeholder="enter mail here...."
            // value={email}
            // onChange={(e) => setemail(e.target.value)}
          />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <div className="app__footer-contacts">
        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="p__opensans">+1 212-344-1230</p>
            <p className="p__opensans">+1 212-555-1230</p>
          </div>

          <div className="app__footer-links_logo">
            <img src={images.gericht} className="logo" alt="footer_logo" />
            <p className="p__opensans">
              &quot;The best way to find yourself is to lose yourself in the
              service of others.&quot;
            </p>
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15 }}
            />
            <div className="app__footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>

          <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">08:00 am - 12:00 am</p>
            <p className="p__opensans">Saturday-Sunday:</p>
            <p className="p__opensans">07:00 am - 11:00 pm</p>
          </div>
        </div>
      </div>
      <p className="app___footer-copyrights">
        2023 &#169; Reserved to MaheshLee
      </p>
    </div>
  );
};

export default Footer;
