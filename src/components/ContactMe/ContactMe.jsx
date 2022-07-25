import React, { useRef } from "react";
import "./ContacrMe.scss";
import emailjs from "emailjs-com";
import { Button, Link } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ContactMe = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ew7am1p",
        "template_psf1lw9",
        form.current,
        "mDcswrS5lDcaEu1Km"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    form.current.reset()
  };
  return (
    <section className="contact" id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <Link href="https://t.me/HaqpaHR" target="_blank" underline="none">
              <TelegramIcon color={"primary"} />
              <h4>Telegram</h4>
            </Link>
          </div>
          <div className="contact__option">
            <Link
              href="https://www.linkedin.com/in/viacheslav-pereverzev-853430225/"
              target="_blank"
              underline="none"
            >
              <LinkedInIcon color={"primary"} />
              <h4>Linkedin</h4>
            </Link>
          </div>
          <div className="contact__option">
            <Link
              href="mailto:perverzev.viacheslav.job@gmail.com"
              underline="none"
            >
              <EmailIcon color={"primary"} />
              <h4>E-mail</h4>
            </Link>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="contact__form">
          <input
            className="contact__input"
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            className="contact__input"
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            className="contact__input"
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <Button type="submit" className="contact__btn" variant="contained">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
