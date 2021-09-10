import React, { FC } from "react";

import github from "../media/images/github.svg";
import facebook from "../media/images/facebook.svg";
import linkedin from "../media/images/linkedin.svg";
import instagram from "../media/images/instagram.svg";
import email from "../media/images/email.svg";

const Contact: FC = () => {
  return (
    <div className="contact-me">
      <div className="project">
        <div className="contacts">
          <a
            className="profile-link"
            target="_blank noreferrer"
            href="https://github.com/Markkex"
          >
            <img src={github} alt="github-link" />
          </a>
          <a
            className="profile-link"
            target="_blank noreferrer"
            href="https://www.facebook.com/marco.avila.583/"
          >
            <img src={facebook} alt="facebook-link" />
          </a>
          <a
            className="profile-link"
            target="_blank noreferrer"
            href="www.linkedin.com/in/marco-ávila"
          >
            <img src={linkedin} alt="linkedin-link" />
          </a>
          <a
            className="profile-link"
            target="_blank noreferrer"
            href="https://www.instagram.com/m.avilafz/"
          >
            <img src={instagram} alt="instagram-link" />
          </a>
          <a
            className="profile-link"
            target="_blank noreferrer"
            href="mailto:marco_avila@live.com.pt"
          >
            <img src={email} alt="email-link" />
          </a>
        </div>

        <div className="presentation">
          <p>
            At the current moment im accepting projects so hit me up for a
            coffee so we can discuss it more!
            <br />
            <br />I would love to hear it from you!
          </p>
          <br />
          <ul>
            <li>Wordpress</li>
            <li>Responsive Websites</li>
            <li>Web Applications</li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
