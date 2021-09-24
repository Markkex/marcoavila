import React, { FC } from "react";
import emailjs from "emailjs-com";

import github from "../media/images/github.svg";
import facebook from "../media/images/facebook.svg";
import linkedin from "../media/images/linkedin.svg";
import instagram from "../media/images/instagram.svg";
import email from "../media/images/email.svg";

const Contact: FC = () => {
  const contacts = [
    { svg: github, name: "github", link: "https://github.com/Markkex" },
    {
      svg: facebook,
      name: "facebook",
      link: "https://www.facebook.com/marco.avila.583/",
    },
    {
      svg: linkedin,
      name: "linkedin",
      link: "www.linkedin.com/in/marco-ávila",
    },
    {
      svg: instagram,
      name: "instagram",
      link: "https://www.instagram.com/m.avilafz/",
    },
    { svg: email, name: "email", link: "mailto:marco_avila@live.com.pt" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kg3dj7f",
        "template_stb2509",
        e.target,
        "user_zyIcfYksaJu9L0t7MGJJA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <div id='contact-me' className='contact-me'>
      <div className='project'>
        <div className='contacts'>
          {contacts.map((contact) => (
            <div className='contacts'>
              <a
                href={contact.link}
                className='profile-link'
                target='_blank noreferrer'
              >
                <img src={contact.svg} alt={contact.name} />
              </a>
            </div>
          ))}
        </div>
        <div className='presentation'>
          <p>I would love to hear from you for projects and ideas!</p>
          <br />
          <form onSubmit={sendEmail} className='form'>
            <label>Name</label>
            <br />
            <input required type='text' name='name' />
            <br />
            <label>Email</label>
            <br />
            <input required type='email' name='email' />
            <br />
            <label>Message</label>
            <br />
            <textarea required name='message' rows={5} />
            <br />
            <input type='submit' value='Send' />
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
