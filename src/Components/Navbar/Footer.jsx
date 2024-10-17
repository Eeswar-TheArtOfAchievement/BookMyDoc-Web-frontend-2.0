import React from "react";
import "./Navbar.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import { Link } from "react-router-dom";
import { Email, Phone } from "@mui/icons-material";
const Footer = () => {
  return (
    <div id="footer" className="">
      <ul className=" ulnav ulfooter">
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
      </ul>
      <div className="infofooterlogo">
        <div className="logoin 1">
          <h3>Address </h3>
          <br />
          <address>1-90/a savisettipalli, sakn mandal kadapa 516193</address>
        </div>
        <div className="logoin 2">
          <h3>
            Email{" "}
            <sub>
              <Email></Email>
            </sub>
          </h3>

          <p>swastikagro86@gmail.com</p>
          <h3>
            Phone{" "}
            <sub>
              <Phone></Phone>
            </sub>
          </h3>
          <p>7702239022</p>
        </div>
        <div className="logoin 3">
          <h3>Social Network</h3>
          <br />
          <p>
            <a href="https://www.facebook.com/" target="/blank">
              <FacebookRoundedIcon></FacebookRoundedIcon>
            </a>{" "}
            facebook <br />
            <a href="https://www.youtube.com/" target="/blank">
              <SubscriptionsRoundedIcon></SubscriptionsRoundedIcon>
            </a>
            youtube <br />
            <a href="https://twitter.com/?lang=en" target="/blank">
              <CloseRoundedIcon></CloseRoundedIcon>
            </a>
            twitter <br />
          </p>
        </div>
      </div>

      <div className="">
        <p className="infofooter">
          Website Content Owned & Managed by Department of Agriculture & Farmers
          Welfare | MoA & FW | Government of India,
        </p>
        <p className="infofooter">
          Designed and Developed by SwastikAgro team, Hyderabad, India.
        </p>
        <hr />
        <p className="infofooter">
          &copy;2024 The Swastik Agro, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
