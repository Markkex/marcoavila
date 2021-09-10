import React from 'react'

const Contact = () => {
    return (
        <div id="contact-me">
        <div className="project">
          <div className="contacts">
            <a id="profile-link" target="_blank noreferrer" href="https://github.com/Markkex"
              ><img src="./img/github.svg" alt="github-link"
            /></a>
            <a
              id="profile-link"
              target="_blank noreferrer"
              href="https://www.facebook.com/marco.avila.583/"
              ><img src="./img/facebook.svg" alt="facebook-link"
            /></a>
            <a
              id="profile-link"
              target="_blank noreferrer"
              href="www.linkedin.com/in/marco-ávila"
              ><img src="./img/linkedin.svg" alt="linkedin-link"
            /></a>
            <a
              id="profile-link"
              target="_blank noreferrer"
              href="https://www.instagram.com/m.avilafz/"
              ><img src="./img/instagram.svg" alt="instagram-link"
            /></a>
            <a
              id="profile-link"
              target="_blank noreferrer"
              href="mailto:marco_avila@live.com.pt"
              ><img src="./img/email.svg" alt="email-link"
            /></a>
          </div>
  
          <div className="presentation">
            <p>
              At the current moment im accepting projects so hit me up for a
              coffee so we can discuss it more!
              <br />
              <br />
              I would love to hear it from you!
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
    )
}

export default Contact
