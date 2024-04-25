import React, { useState } from "react";
import "./contact.css";

import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "870fac80-09dc-4ef0-946e-e2a1ee59ba78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(`Thank you for considering me for your team—I can't wait to make a positive impact.  ${res.message}`);
    }
  };

  
  return (
    <div className="contact-container" data-aos="zoom-in">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
          I am currently available for immediate employment and am ready to contribute my skills and expertise to your team. Please feel free to contact me at your earliest convenience to discuss potential opportunities further.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoIosMail /> <a href="mailto:isranivinita74@gmail.com" className="contact-link">isranivinita74@gmail.com</a>
            </div>
            <div className="contact-detail">
              <IoIosCall /> <a href="tel:7410804507" className="contact-link">Call me at 7410804507</a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name..." name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email..." name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message..."
          ></textarea>
          <button type="submit" className="contact-submit">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
